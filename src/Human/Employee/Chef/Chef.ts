import { Passenger } from "../../Customer/Passenger/Passenger";
import { Employee } from "../Employee";

class Chef extends Employee {
    constructor(firstName: string,
      lastName: string,
      email: string,
      age: number,
      gender: string,
      salary: number, 
      private passenger:Passenger[]){
      super(firstName, lastName, email, age, gender, salary,);
      this.passenger = passenger;
      
    }
    addMeal(newMeal:string,quantity:number):void{
        this.passenger.addMeal(newMeal,quantity);
    }
  }