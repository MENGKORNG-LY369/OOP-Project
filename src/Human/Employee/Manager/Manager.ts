import { Employee, Flight, Gender } from "../../../Connector";

export class Manager extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        private flightList: Flight[] = []
    ) {
        super(firstName, lastName, email, age, gender);
    }
    public getSalary(): number {
        return 5000
    }

    public getFlights(): Flight[] {
        return this.flightList;
    }
}