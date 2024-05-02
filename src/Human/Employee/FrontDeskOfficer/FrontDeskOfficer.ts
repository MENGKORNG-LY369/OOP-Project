import { Employee, Gender, Itinerary } from "../../../Connector";

export class FrontDeskOfficer extends Employee {
    constructor(firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        public trip: Itinerary[] = []
    ) {
        super(firstName, lastName, email, age, gender);
        this.trip = trip;
    }
    getSalary(): number {
        return 800
    }
}