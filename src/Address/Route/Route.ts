import { FlightStatus } from "../../Constant/Flight"
import { Airport } from "../Airport/Airport"
export class Route{
    constructor
    (
        private gateNumber: string,
        private departure: Airport,
        private arrival: Airport,
        private distance: number,
        private duration: number,
        private flgith: FlightStatus[]= []

    ){
        this.gateNumber = gateNumber
        this.departure = departure
        this.arrival = arrival
        this.distance = distance
        this.duration = duration
        this.flgith = flgith

    }
    getFlight():Flight[]{
        return this.flgith
    } 
}