

class Parking {

    // three different types of vehicles
    // 1- motorcycle: 1 spot
    // 2- car: 1 spot
    // 3- truck: 2 consecutive spots

    private spots: Map<number, number[]> // vehicleId -> [...spots]
    private capacity: number
    private availableSpots: number[]

    constructor(capacity: number) {
        this.capacity = capacity

        this.spots = new Map<number, number[]>() // vehicleId -> [...spots]

        this.availableSpots = []

        for (let i = 0; i < this.capacity; i++) {
            this.availableSpots.push(i)
        }
    }

    enter(vehicleId: number, type: string): number[] { //returns the spot index
        if (this.occupationCount() >= this.capacity)
            return [-1]
        if (this.spots.has(vehicleId))
            return this.spots.get(vehicleId) ?? [-1]
        if (type === 'car' || type === 'motorcycle') {
            let spotIndex = this.availableSpots.shift()
            if (spotIndex !== undefined) {
                this.spots.set(vehicleId, [spotIndex])
                return [spotIndex]
            }
        }else if(type === 'truck'){
            for(let i = 1; i < this.availableSpots.length; i++){
                let current = this.availableSpots[i]
                let prev = this.availableSpots[i - 1]
                if(Math.abs(prev - current) === 1){ // availableSpots is always sorted
                    this.availableSpots.splice(i - 1, 2)
                    let spot = [current, prev]
                    this.spots.set(vehicleId, spot)
                    return spot
                }

            }
        }
        return [-1]
    }

    exit(vehicleId: number) {
        if (!this.spots.has(vehicleId)) {
            console.log("vehicle", vehicleId, " not found")
            return false
        }

        let spots = this.spots.get(vehicleId)
        console.log("exit spotIndex", spots)
        if (spots !== undefined) {

            for(let spot of spots){
                let index = this.spotIndex(spot)
                this.availableSpots.splice(index, 0, spot)
            }
            this.spots.delete(vehicleId)
            return true
        }
        return false

    }

    private spotIndex(spot: number): number{
        let left = 0
        let right = this.availableSpots.length - 1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            let current = this.availableSpots[mid]

            if(current >= spot)
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
            "available_spots": this.availableSpots
        }
    }

}

const parking = new Parking(5)
console.log(parking.enter(101, "car"))  // ✅ Should return a spot index (e.g., 0)
console.log(parking.enter(102, "motorcycle"))  // ✅ Should return a spot index (e.g., 1)
console.log(parking.enter(103, "truck"))  // ✅ Should return two consecutive spot indexes (e.g., 2 and 3)
console.log(parking.enter(104, "truck"))  // ❌ Should return -1 (not enough adjacent spots)
console.log(parking.report())
console.log(parking.exit(103))  // ✅ Truck exits, freeing spots 2 and 3
console.log(parking.report())
console.log(parking.enter(104, "truck"))  // ✅ Now succeeds since spots 2 and 3 are free
console.log(parking.report())
