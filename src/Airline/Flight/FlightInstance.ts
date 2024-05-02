import { Airplane, Customer, FlightStatus, Gate, Route } from "../../Connector";

export class FlightInstance {
    constructor
        (
            private flightStatus: FlightStatus,
            private airplane: Airplane,
            private route: Route,
            private passenger: Customer,
            private gate?: Gate,
            private date: Date = new Date,
        ) {
        this.flightStatus = flightStatus;
        this.airplane = airplane;
        this.route = route;
        this.date = date;
    }

    public getGate(): Gate {
        return this.gate;
    }
    public getPassender(): Customer {
        return this.passenger;
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
}