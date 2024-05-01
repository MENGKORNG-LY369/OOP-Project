import { FlightStatus } from "../../Constant/Flight";
import { Airplane } from "../Airplane/Airplane";
import { Seat } from "../Airplane/Seat/Seat";
import { Flight } from "./Flight";

export class FlightInstance{
    constructor
    (
        private flight:Flight,
        private flightStatus:FlightStatus,
        private airplane:Airplane,
        private date:Date,
        private seat:Seat[]
    ){
        this.flight=flight;
        this.flightStatus=flightStatus;
        this.airplane=airplane;
        this.date=date;
        this.seat=seat;
    }
    updateStatus(): void{
        this.flightStatus
    }


}