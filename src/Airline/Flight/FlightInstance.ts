import { Airplane, Customer, FlightStatus, Gate, Route, Seat } from "../../Connector";

export class FlightInstance {
    constructor
        (
            private flightStatus: FlightStatus,
            private airplane: Airplane,
            private route: Route,
            private passenger: Customer[] = [],
            private seats: Seat[] = [],
            public gate?: Gate,
            public date: Date = new Date,
        ) {
        this.flightStatus = flightStatus;
        this.airplane = airplane;
        this.route = route;
        this.date = date;
    }
    public getPassender(): Customer[] {
        return this.passenger;
    }
    public getOnePassenger(email: string): Customer {
        return this.passenger.filter(pass => pass.email === email)[0];
    }

    public setGate(gate: Gate): void {
        this.gate = gate;
    }

    public updateStatus(newStatus: FlightStatus): void {
        this.flightStatus = newStatus;
    }

    public setAirplane(airplane: Airplane): void {
        this.airplane = airplane;
    }

    public addPassenger(...passengers: Customer[]): void {
        passengers.forEach(passenger => this.passenger.push(passenger));
    }

    public addSeat(...seats: Seat[]): void {
        seats.forEach(seat => this.seats.push(seat));
    }
}