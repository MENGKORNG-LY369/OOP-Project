import { Person } from "../Person";

export class Employee extends Person {
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      age: number,
      gender: string,
      private salary: number
    ) {
      super(firstName, lastName, email, age, gender);
      this.salary = salary;
    }
  
    getSalary(): number {
      return this.salary;
    }
  }