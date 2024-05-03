import { Employee, Gender, Itinerary } from "../../../Connector";

export class Controller extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        private trips: Itinerary[] = []
    ){
        super(firstName, lastName, email, age, gender);
    }

    public getSalary(): number {
        return 1300;
    }

    public getCustomerTrips(): Itinerary[] {
        return this.trips;
    }

    public addTrip(cusTrips: Itinerary[]): void {
        cusTrips.forEach(trip => { this.trips.push(trip) });
    }
}