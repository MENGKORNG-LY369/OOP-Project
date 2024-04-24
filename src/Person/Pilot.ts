import { Employee } from "./Employee";

class Pilot extends Employee{
    constructor(firstName: string, lastName: string,email: string,age: number,gender: string,salary: number){
        super(firstName,lastName,email,age,gender,salary);
    }
    getflight(){}
}