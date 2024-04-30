import { Manager } from "../../Manager/Manager";
import { Employee } from "../Employee";

class Controller extends Employee {
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      age: number,
      gender: string,
      salary: number,
      public airplane: Airplane,
      public manager: Manager
    ) {
      super(firstName, lastName, email, age, gender, salary);
      this.airplane = airplane;
      this.manager = manager;
    }
  }