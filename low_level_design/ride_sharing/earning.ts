import { Trip } from "./trip"
import {v4 as uuidv4} from 'uuid';

export class Earning{
    id: string
    date: Date
    trip: Trip
    fee: number

    constructor(trip: Trip, fee: number){
        this.id = uuidv4()
        this.trip = trip
        this.date = new Date()
        this.fee = fee
    }
}