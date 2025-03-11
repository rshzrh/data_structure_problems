
import { RideSharingController } from "./controller"
import { Position } from "./position"
import { Trip } from "./trip"

export class Rider{

    name: string
    id: string
    controller: RideSharingController
    
    constructor(id: string, name: string, controller: RideSharingController){
        this.id = id
        this.name = name
        this.controller = controller
    }

    requestRide(source: Position, destination: Position){
        
        const trip = this.controller.requestRide(this, source, destination)
        if(trip !== null){
            console.log(`driver accepted and is coming to you. Driver: ${trip.driver.name}`)
        }else{
            console.log(`Nobody accepted your request. Please try again later!`)
        }
    }
    cancelRide(): boolean{
        return this.controller.cancelCurrentTripFromRider(this)
    }
    

}