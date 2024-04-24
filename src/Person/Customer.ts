import { Person } from "./Person";

class Customer extends Person{
    constructor(firstName: string, lastName: string,email: string,age: number,gender: string){
        super(firstName,lastName,email,age,gender);
    }
}