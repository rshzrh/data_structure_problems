

class Parking {

    private spots: Map<number, number>
    private capacity: number
    private availableSpots: number[]

    constructor(capacity: number) {
        this.capacity = capacity

        this.spots = new Map<number, number>() // vehicleId -> spot
        this.availableSpots = []

        for (let i = 0; i < this.capacity; i++) {
            this.availableSpots.push(i)
        }
    }

    enter(vehicleId: number): number { //returns the spot index
        if (this.occupationCount() >= this.capacity)
            return -1
        if(this.spots.has(vehicleId))
            return this.spots.get(vehicleId)
        let spotIndex = this.availableSpots.shift()
        if(spotIndex !== undefined){
            this.spots.set(vehicleId, spotIndex)
            return spotIndex
        }
        return -1
    }

    exit(vehicleId: number) {
        if (!this.spots.has(vehicleId)){
            console.log("vehicle", vehicleId, " not found")
            return false
        }

        let spotIndex = this.spots.get(vehicleId)
        console.log("exit spotIndex", spotIndex)
        if (spotIndex !== undefined) {
            this.availableSpots.push(spotIndex)
            this.spots.delete(vehicleId)
            return true
        }
        return false

    }
    availableSpotsCount(){
        return this.availableSpots.length
    }

    occupationCount(){
        return this.spots.size
    }
    report(){
        return {
            "spots": this.spots,
            "occupation": this.occupationCount(),
            "available_spots": this.availableSpots
        }
    }

}

const parking = new Parking(10)
const firstSpot = parking.enter(1)
// parking.report()
const secondSpot = parking.enter(2)
// parking.report()
const thirdSpot = parking.enter(3)
// parking.report()

parking.exit(1)
console.log(parking.report())

