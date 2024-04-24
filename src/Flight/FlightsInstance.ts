import { Airplane } from "../Airline/Airplane"
import { FlightStatus } from "../Enums/Enums"
import { Flight } from "./Flight"

export class FlightInstance{
    constructor (private flight: Flight , private flightStatus:FlightStatus, private airplane:Airplane){
        this.flight = flight
        this.flightStatus = flightStatus
        this.airplane  = airplane
    }
    UpdateStatus(): void{
        

    }
}