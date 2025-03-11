
import {v4 as uuidv4} from 'uuid';
import {Driver} from './driver'
import {Rider} from './rider'

export class Trip{
    driver: Driver
    rider: Rider
    status: string
    id: string
    constructor(driver: Driver, rider: Rider, status: string = "ongoing"){
        this.driver = driver
        this.rider = rider
        this.status = status
        this.id = uuidv4()
    }
}
