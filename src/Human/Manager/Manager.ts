import { Employee } from "../Employee/Employee";

export class Manager extends Employee {
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      age: number,
      gender: string,
      salary: number,
      public airline: Airline
      
    ) {
      super(firstName, lastName, email, age, gender, salary);
      this.airline=airline;
    }
  }