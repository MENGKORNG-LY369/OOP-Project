import { Airplane } from "../Airline/Airplane"
import { FlightStatus } from "../Enums/Enums"
import { Flight } from "./Flight"

export class FlightInstance{
    constructor (
        private flight: Flight , 
        private status:FlightStatus, 
        private airplane:Airplane
    ){
        this.flight = flight
        this.status = status
        this.airplane  = airplane
    }

    UpdateStatus(statusToUpdate: FlightStatus): void{
        this.status = statusToUpdate
    }
}