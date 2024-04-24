import { Person } from "./Person";

export class Employee extends Person{
    private salary: number;
    constructor(firstName: string, lastName: string,email: string,age: number,gender: string,salary: number){
        super(firstName,lastName,email,age,gender);
        this.salary = salary;
    }
    getSalary(): number{
        return this.salary;
    }
}