import { Customer, FlightInstance, Route, Seat } from "../../Connector";

export class Flight {
    constructor
        (
            public flightNumber: string,
            public route: Route,
            public passenger: Customer[] = [],
            private seat: Seat[] = [],
            private flightInstance: FlightInstance[] = []
        ) {
        this.flightNumber = flightNumber;
        this.route = route;
        this.flightInstance = flightInstance;
    }

    public getOnePassenger(passenger: Customer): Customer {
        const pass = this.passenger.filter(pass => passenger.email === passenger.email);
        return pass[0];
    }

    public getFlightInstances(customer: Customer): FlightInstance[] {
        return this.flightInstance.filter(instance => instance.getPassender().email === customer.email)
    }

    public addSeat(...seats: Seat[]): void {
        seats.forEach(seat => {
            this.seat.push(seat);
        });
    }

    public addFlightInstances(...instances: FlightInstance[]): void {
        instances.forEach(flight => {
            this.flightInstance.push(flight);
        });
    }
    public addPassenger(...passengers: Customer[]): void {
        passengers.forEach(passenger => this.passenger.push(passenger));
    }

}