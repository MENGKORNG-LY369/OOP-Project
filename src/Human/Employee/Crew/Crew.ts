import { Employee, Gender } from "../../../Connector";

export abstract class Crew extends Employee {
    
    constructor(
        firstName: string, 
        lastName: string, 
        email: string, 
        age: number, 
        gender: Gender
    ){
        super(firstName, lastName, email, age, gender)
    }
    abstract getSalary(): number;
}