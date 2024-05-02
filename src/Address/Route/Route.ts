import { Flight } from "../../Airline/Flight/Flight"
import { Airport } from "../Airport/Airport"
export class Route{
    constructor
    (
        private departure: Airport,
        private arrival: Airport,
        private distance: number,
        private duration: number,
        private flgith: Flight[]= []

    ){
        
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