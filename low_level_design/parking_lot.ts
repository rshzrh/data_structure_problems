interface Presence {
    spots: number[]
    time: Date
    type: string
    vehicleId?: number
    hoursSpent?: number
}

interface Fee {
    type: string
    amount: number
}

interface Receipt {
    status: string
    fee: number | null
    entry?: Date | null
    exit?: Date | null
    spots?: number[] | null
    type?: string | null
    vehicleType?: string | null
}


class Parking {

    // three different types of vehicles
    // 1- motorcycle: 1 spot
    // 2- car: 1 spot
    // 3- truck: 2 consecutive spots

    private spots: Map<number, Presence> // vehicleId -> [...spots]
    private capacity: number
    private availableSpots: number[]
    private reservedSpots: Map<number, Presence> //vehicleId -> [...spots]
    private reservationMaxHours: number
    private stayMaxHours: number
    private fees: Map<string, Fee>
    private fines: Map<string, Fee>
    private totalEarning: number = 0
    private earningHistory: Receipt[] = []
    private expiredReservations: Presence[] = []
    private subscriptionEarning: number = 0
    private subscribers: Map<number, Receipt>

    constructor(capacity: number, stayMaxHours = 0.5, reservationMaxHours = 6, fees: Fee[] = [], fines: Fee[] = []) {
        this.capacity = capacity
        this.reservationMaxHours = reservationMaxHours
        this.stayMaxHours = stayMaxHours
        this.spots = new Map<number, Presence>() // vehicleId -> [...spots]
        this.reservedSpots = new Map<number, Presence>()

        this.availableSpots = []
        this.fees = new Map<string, Fee>()
        this.fines = new Map<string, Fee>()
        this.subscribers = new Map<number, Receipt>()


        for (let i = 0; i < this.capacity; i++) {
            this.availableSpots.push(i)
        }

        for (let fee of fees)
            this.fees.set(fee.type, fee)
        for (let fine of fines)
            this.fines.set(fine.type, fine)

        console.log(`Parking initialized with capacity: ${this.capacity} | reservation max hours: ${this.reservationMaxHours} | stay max hours: ${this.stayMaxHours} | fees: ${this.fees}`)


    }

    private removeExpiredReservations(): number { //return total spots returned
        const toRemoveReservations: number[] = [] //list of vehicleIds that their reservations are expired

        const now = new Date()

        for (let vehicleId of this.reservedSpots.keys()) {
            const reservation = this.reservedSpots.get(vehicleId)
            const reservationDate = reservation?.time
            const hours = this.hourDifference(now, reservationDate)
            if (hours > this.reservationMaxHours)
                toRemoveReservations.push(vehicleId)
        }

        let totalFreed = 0
        for (let vehicleId of toRemoveReservations) {
            const reservation = this.reservedSpots.get(vehicleId)
            if (reservation === undefined)
                continue
            this.returnFreedSpot(reservation.spots)
            totalFreed += reservation.spots.length
            this.expiredReservations.push(reservation)
            this.reservedSpots.delete(vehicleId)


        }
        return totalFreed

    }

    private hourDifference(first: Date | undefined, second: Date | undefined): number {
        if (first === undefined || second === undefined)
            return 0
        return Math.abs(first.getTime() - second.getTime()) / 360e5
    }

    subscribe(vehicleId: number, type: string): Receipt | null {
        if(this.subscribers.has(vehicleId))
            return this.subscribers.get(vehicleId) || null

        let fee = 100.0
        if(type === 'car')
            fee = 200.0
        if(type === 'truck')
            fee = 300.0

        const receipt: Receipt = {vehicleType: type, fee: fee, status: "success" }
        this.subscribers.set(vehicleId, receipt)
        this.subscriptionEarning += fee
        this.totalEarning += fee
        return receipt
    }

    reserve(vehicleId: number, type: string): Presence | null {

        if (this.reservedSpots.has(vehicleId))
            return this.reservedSpots.get(vehicleId) || null
        if (this.spots.has(vehicleId)) //already in parking
            return null
        const spots = this.occupySpots(vehicleId, type)
        if (spots != null) {
            const reservation: Presence = { time: new Date(), spots: spots, type: type, vehicleId: vehicleId }
            this.reservedSpots.set(vehicleId, reservation)
            return reservation
        }
        console.log("No available spots to reserve to vehicle", vehicleId)
        return null

    }

    private occupySpots(vehicleId: number, type: string): number[] | null {
        this.removeExpiredReservations()

        let result: number[] | null = null
        let spotsNeeded = 1
        if (type === 'car' || type === 'motorcycle') {
            let spotIndex = this.availableSpots.shift()
            if (spotIndex !== undefined) {
                result = [spotIndex]
            }
        } else if (type === 'truck') {
            spotsNeeded = 2
            for (let i = 1; i < this.availableSpots.length; i++) {
                let current = this.availableSpots[i]
                let prev = this.availableSpots[i - 1]
                if (Math.abs(prev - current) === 1) { // availableSpots is always sorted
                    this.availableSpots.splice(i - 1, 2)
                    result = [current, prev]
                }

            }
        }
        if(result === null && this.subscribers.has(vehicleId) && this.reservedSpots.size > 0){
            const validCancelation = this.cancelReservation(spotsNeeded)
            if(validCancelation)
                result = this.occupySpots(vehicleId, type)
        }
        return result
    }

    private cancelReservation(totalSpots: number): boolean{
        let totalCanceled = 0
        const toCancelReservations: number[] = []
        for(let vehicleId of this.reservedSpots.keys()){

            const presence = this.reservedSpots.get(vehicleId)
            toCancelReservations.push(vehicleId)

            this.returnFreedSpot(presence?.spots)
            totalCanceled += presence?.spots.length
            if(totalCanceled >= totalSpots)
                break

        }
        for(let vehicleId of toCancelReservations)
            this.reservedSpots.delete(vehicleId)
        if(totalCanceled >= totalSpots)
            return true
        return false
    }
    enter(vehicleId: number, type: string): Presence | null { //returns the spot index
        if (this.occupationCount() >= this.capacity)
            return null
        if (this.spots.has(vehicleId))
            return this.spots.get(vehicleId) ?? null

        let spots: number[] | null = null

        if (this.reservedSpots.has(vehicleId)) {
            const reservation = this.reservedSpots.get(vehicleId)
            if (reservation !== undefined) {
                spots = reservation?.spots
                this.reservedSpots.delete(vehicleId)
            }

        } else {
            spots = this.occupySpots(vehicleId, type)
        }

        if (spots !== null) {
            const entry: Presence = { spots: spots, time: new Date(), type: type }
            this.spots.set(vehicleId, entry)
            return entry
        }
        console.log("No available spots for vehicle", vehicleId)
        return null
    }

    exit(vehicleId: number): Receipt {
        if (!this.spots.has(vehicleId)) {
            console.log("vehicle", vehicleId, " not found")
            const receipt: Receipt = { status: "failed", fee: 0.0, entry: null, exit: null, spots: null, type: null }
            return receipt
        }

        let presence = this.spots.get(vehicleId)
        console.log("exiting from presence", presence)

        if (presence !== undefined) {
            const spots = presence.spots
            let total = 0
            const now = new Date()
            const entry = presence.time
            if(!this.subscribers.has(vehicleId)){
                const totalHours = this.hourDifference(now, entry)

                const type = presence.type
                let hourlyFee = this.fees.get(type)
                if (hourlyFee == undefined)
                    hourlyFee = { type: "universal", amount: 6.0 }
    
    
                const regular = Math.min(totalHours, 6) * hourlyFee?.amount
                const surcharge = Math.max(0, totalHours - 6) * 10
                total = regular + surcharge
    
                this.totalEarning += total
    
            }
            this.returnFreedSpot(spots)
            this.spots.delete(vehicleId)
            const receipt: Receipt = { status: "success", fee: total, entry: entry, exit: now, spots: spots }
            this.earningHistory.push(receipt)
            return receipt

        }
        const receipt: Receipt = { status: `failed: no entry found for vehicle: ${vehicleId}`, fee: 0.0, entry: null, exit: null, spots: null, type: "ondemand" }
        return receipt

    }

    private returnFreedSpot(spots: number[]) {
        for (let spot of spots) {
            let index = this.spotIndex(spot)
            this.availableSpots.splice(index, 0, spot)
        }
    }

    private spotIndex(spot: number): number {
        let left = 0
        let right = this.availableSpots.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let current = this.availableSpots[mid]

            if (current >= spot)
                right = mid - 1
            else
                left = mid + 1
        }

        return left
    }
    availableSpotsCount() {
        return this.availableSpots.length
    }

    occupationCount() {
        return this.capacity - this.availableSpotsCount()
    }
    report() {
        return {
            "spots": this.spots,
            "occupation": this.occupationCount(),
            "available_spots": this.availableSpots,
            "reserved_spots": this.reservedSpots
        }
    }

    generateReport() {
        this.removeExpiredReservations()
        const now: Date = new Date()
        const occupation: Presence[] = []
        for (let vehicleId of this.spots.keys()) {
            const presence = this.spots.get(vehicleId)

            if (presence === undefined)
                continue

            const entry = presence?.time
            const hours = this.hourDifference(now, entry)
            presence.hoursSpent = hours

            occupation.push(presence)
        }
        return {
            "total_earning": this.totalEarning,
            "expired_reservations": this.expiredReservations,
            "occupation": occupation
        }
    }

}

const fees: Fee[] = []
fees.push({ type: "car", amount: 5 })
fees.push({ type: "truck", amount: 8 })
fees.push({ type: "motorcycle", amount: 2 })
const parking = new Parking(5, 6, 0.5, fees)

console.log(parking.reserve(100, "car"))
console.log(parking.reserve(100, "car"))
console.log(parking.reserve(99, "truck"))
// console.log(parking.report())
console.log(parking.enter(101, "car"))  // ✅ Should return a spot index (e.g., 0)
console.log(parking.enter(102, "motorcycle"))  // ✅ Should return a spot index (e.g., 1)
console.log("--------------")
console.log(parking.generateReport())

console.log(parking.report())
console.log(parking.enter(103, "truck"))  // ✅ Should return two consecutive spot indexes (e.g., 2 and 3)
// console.log(parking.enter(104, "truck"))  // ❌ Should return -1 (not enough adjacent spots)
// console.log(parking.report())
// console.log(parking.exit(103))  // ✅ Truck exits, freeing spots 2 and 3
// console.log(parking.report())
// console.log(parking.enter(104, "truck"))  // ✅ Now succeeds since spots 2 and 3 are free
// console.log(parking.report())
