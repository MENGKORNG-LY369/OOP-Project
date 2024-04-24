import { FlightInstance } from "../Flight/FlightsInstance";
import { Employee } from "./Employee";

class Crew extends Employee{
    constructor(firstName: string, lastName: string,email: string,age: number,gender: string,salary: number){
        super(firstName,lastName,email,age,gender,salary);
    }
    getFlights():FlightInstance[]{
        return [];
    }
}