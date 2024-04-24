
import { FlightInstance } from "../Flight/FlightsInstance";
import { Seat } from "../test";
import { Airline } from "./Airline";
export class Airplane {
    /**
     * 
     * @param Parameters
     * 
    - name: string
    - modal: string
    - airline: Airline
    - seat: Seat[] 
    - flight: FlightInstance
     */
    constructor(private name: string, private modal: string, private airline: Airline, private seat: Seat[]=[] , private flight: FlightInstance) {
        this.name = name
        this.modal = modal
        this.airline = airline
        this.seat = seat
        this.flight= flight
    }

}