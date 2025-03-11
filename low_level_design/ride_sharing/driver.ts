import { RideSharingController } from "./controller"
import { Earning } from "./earning"
import { Position } from "./position"
import { Rider } from "./rider"
import { Trip } from "./trip"

export class Driver {
    id: string
    name: string
    status: string
    currentRider: Rider | null
    currentTrip: Trip | null
    controller: RideSharingController

    constructor(id: string, name: string, controller: RideSharingController) {
        this.id = id
        this.name = name
        this.controller = controller
    }

    acceptRide(rider: Rider, source: Position, destination: Position): boolean {
        //TODO: accept based on route and fee
        this.currentRider = rider
        return true
    }
    cancelTrip(): boolean {
        return this.controller.cancelCurrentTripFromDriver(this)
    }
    startRide(): boolean {
        return this.controller.startRide(this)
    }

    listEarnings(): Earning[]{
        return this.controller.getDriverEarnings(this)
    }

}