
import { Airport } from "../Airport/Airport";
import { Route } from "../Route/Route";

export class Flight {
    constructor(private flightNumber: string, private gate:Route, private airport:Airport[]=[] ){
        this.flightNumber = flightNumber;
        this.gate = gate;
        this.airport = airport;
    }
}