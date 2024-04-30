import { FlightStatus } from "../../Constant/Flight";
import { Airplane } from "../Airplane/Airplane";
import { Flight } from "./Flight";

export class FlightInstance{
    constructor
    (
        private flight:Flight,
        private flightStatus:FlightStatus,
        private airplane:Airplane,
        private date:Date
    ){
        this.flight=flight;
        this.flightStatus=flightStatus;
        this.airplane=airplane;
        this.date=date;
    }
    updateStatus(): void{
        this.flightStatus
    }


}