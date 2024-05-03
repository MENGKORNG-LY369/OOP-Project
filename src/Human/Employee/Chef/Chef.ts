import { Employee, Gender, Passenger } from "../../../Connector";

export class Chef extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        private passenger: Passenger[] = []
    ) {
        super(firstName, lastName, email, age, gender);
        this.passenger = passenger;
    }

    public getSalary(): number {
        return 500
    }

    public getPassenger(): Passenger[] {
        return this.passenger;
    }

    public addPassenger(...passengers: Passenger[]): void {
        passengers.forEach(passenger => this.passenger.push(passenger));
    }
}