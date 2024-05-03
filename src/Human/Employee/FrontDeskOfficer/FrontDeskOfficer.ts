import { Booking, Employee, Gender, Itinerary } from "../../../Connector";

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

    public createTrips(...bookings: Booking[]): Itinerary[] {
        this.trip.push(new Itinerary(this.email, bookings)) 
        return this.trip;
    }

    public getSalary(): number {
        return 800
    }
}