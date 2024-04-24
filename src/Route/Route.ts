import { Airport } from "../test";

export class Route {
    /**
     * 
     * @param parameters 
     * *
        - id: string   
        - departure: Airport
        - arrival: Airport
        - departureTime: number
        - arrivalTime: number
        - distance: number
     */
    constructor( private id: string, private departure: Airport, private arrival: Airport, private departureTime: number ,private arrivalTime: number,private distance: number) {
        this.id = id;
        this.departure = departure;
        this.arrival = arrival;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.distance = distance;
        
    }
}