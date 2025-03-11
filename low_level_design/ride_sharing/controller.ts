
import { Trip } from './trip'; // Adjust the import path as necessary
import { Rider } from './rider'
import { Driver } from './driver'
import { Position } from './position';
import { Earning } from './earning';

export class RideSharingController {

    private riders: Rider[] = []
    private drivers: Map<string, Driver> //map of driver id -> driver object
    private availableDrivers: Map<string, Driver> //map of driver id -> driver object

    private history: Trip[] = []

    private ongoingTrips: Map<string, Trip> //map of trip id -> trip object

    private ongoingDrivers: Map<string, Trip>
    private ongoingRiders: Map<string, Trip>
    private earnings: Map<string, Earning[]>

    constructor() {
        this.drivers = new Map<string, Driver>()
        this.ongoingTrips = new Map<string, Trip>()
        this.ongoingDrivers = new Map<string, Trip>()
        this.ongoingRiders = new Map<string, Trip>()
        this.availableDrivers = new Map<string, Driver>()
        this.earnings = new Map<string, Earning[]>()
    }

    public riderCurrentTrip(rider: Rider): Trip | null {
        return this.ongoingRiders.get(rider.id) || null
    }

    public driverCurrentTrip(driver: Driver): Trip | null {
        return this.ongoingDrivers.get(driver.id) || null
    }

    public cancelCurrentTripFromRider(rider: Rider): boolean{
        const trip = this.riderCurrentTrip(rider)
       
        return this.finishTrip(trip)

    }

    public cancelCurrentTripFromDriver(driver: Driver): boolean{
        const trip = this.driverCurrentTrip(driver)
        return this.finishTrip(trip)

    }

    public startRide(driver: Driver): boolean{
        const trip = this.driverCurrentTrip(driver)
        if(trip === null)
            return false

        trip.status = "started"

        return true
    }
    public finishRide(driver: Driver): boolean{
        const trip = this.driverCurrentTrip(driver)
        if(trip === null)
            return false

        return this.finishTrip(trip, "finished")
    }
    private finishTrip(trip: Trip | null, status: string = "canceled"): boolean{

        if(trip === null)
            return false
        if(trip.status !== "ongoing"){
            console.log("only ongoing trips could be canceled")
            return false
        }
        trip.status = status

        const driver = trip.driver
        const rider = trip.rider
        this.availableDrivers.set(driver.id, driver)
        this.ongoingDrivers.delete(driver.id)
        this.ongoingRiders.delete(rider.id)
        this.ongoingTrips.delete(trip.id)
        this.history.push(trip)

        if(trip.status === "finished"){
            //calculate fee and register the fee for the driver
            const driverEarings = this.earnings.get(driver.id) || []
            const fee = 20.0 //fee should be calculated based on source, destination, and time of the day
            const earning = new Earning(trip, fee)
            driverEarings.push(earning)
            this.earnings.set(driver.id, driverEarings)

        }
        return true

    }

    public getDriverEarnings(driver: Driver): Earning[]{
        return this.earnings.get(driver.id) || []
    }

    private firstAvailableDriver(source: Position, destination: Position): Driver | null {
        const index = Math.random() * this.availableDrivers.size
        let counter = 0
        for (let driverId of this.availableDrivers.keys()) {
            counter++
            if(counter === index){
                return this.drivers.get(driverId) || null
            }
        }
        return null
    }

    private registerTrip(trip: Trip): void {
        this.availableDrivers.delete(trip.driver.id)
        this.ongoingDrivers.set(trip.driver.id, trip)
        this.ongoingRiders.set(trip.rider.id, trip)
        this.ongoingTrips.set(trip.id, trip)

    }

    requestRide(rider: Rider, source: Position, destination: Position): Trip | null {
        let trip = this.riderCurrentTrip(rider)
        if (trip != null)
            return trip

        let accepted: boolean = false
        let tryCount: number = 0
        let driver: Driver | null = null
        while (!accepted || tryCount < 5) {
            driver = this.firstAvailableDriver(source, destination)
            if (driver === null)
                return null

            accepted = driver.acceptRide(rider, source, destination)

            tryCount++
        }
        if (driver === null)
            return null

        trip = new Trip(driver, rider, "ongoing")

        this.registerTrip(trip)

        return trip
    }
}