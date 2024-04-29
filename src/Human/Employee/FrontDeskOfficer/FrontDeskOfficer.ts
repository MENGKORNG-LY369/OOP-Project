import { Itinerary } from "../../../Itinerary/Itinerary";
import { Employee } from "../Employee";

export class FrontDeskOfficer extends Employee {
    constructor(firstName: string,
      lastName: string,
      email: string,
      age: number,
      gender: string,
      salary: number, 
      private trip:Itinerary[]){
      super(firstName, lastName, email, age, gender, salary,);
      this.trip = trip;
    }
  }