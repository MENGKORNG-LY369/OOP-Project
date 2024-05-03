import { Booking, Customer, Employee, Flight, Gender } from "../../../Connector";

export class Manager extends Employee {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        private flightList: Flight[] = [],
        private bookingList: Booking[] = [],
    ) {
        super(firstName, lastName, email, age, gender);
    }
    public getSalary(): number {
        return 5000
    }

    public addFlight(...flights: Flight[]): void {
        flights.forEach(flight => this.flightList.push(flight))
    }

    public addBooking(...bookings: Booking[]): void {
        bookings.forEach(b => this.bookingList.push(b));
    }

    public getPassenger(returnTicket?: boolean): number {
        if (returnTicket != undefined) {
            const booking = this.bookingList.filter(b => b.returnTicket == returnTicket);
            return booking.length
        }
        return this.bookingList.length;
    }

    public getFlights(): Flight[] {
        return this.flightList;
    }
}