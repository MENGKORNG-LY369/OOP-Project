import { Route } from "../../Address/Route/Route";
import { FlightInstance } from "./FlightInstance";

export  class Flight{
    constructor
    (
        private flightNumber: string,
        private route: Route,
        private flightInstance:FlightInstance[]=[]

    ){
        this.flightNumber = flightNumber;
        this.route = route;
        this.flightInstance = flightInstance;
    }
    getFlightInstance(): FlightInstance[]{
        return this.flightInstance; 
    }
    cancel(): void{

    }
    addFlightSchedule(): void{
        
    }




    
}