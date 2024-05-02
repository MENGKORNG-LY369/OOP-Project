import { Gender, Person } from "../../Connector";

export abstract class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
    ) { 
        super(firstName, lastName, email, age, gender);
    }
    public abstract getSalary(): number;
}