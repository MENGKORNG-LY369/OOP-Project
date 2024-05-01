import { MealType } from "../../../Constant/Meal";
import { Cuisine } from "../../../Cuisine/Cuisine";
import { Passenger } from "../../Customer/Passenger/Passenger";
import { Employee } from "../Employee";

export class Chef extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    gender: string,
    salary: number,
    private passenger: Passenger[]
  ) {
    super(firstName, lastName, email, age, gender, salary);
    this.passenger = passenger;
  }
  public getFoodList(): Cuisine[][] {
    return this.passenger.map((pass) => pass.meal);
  }
}