import { Airline, Cargo, Pilot } from "../../Connector";

export class Airplane {
    constructor
        (
            private registrationNumber: string,
            private layout: string,
            private airline: Airline,
            private cargo: Cargo[] = [],
            private pilots?: Pilot,
            private colPilots?: Pilot
        ) {
        this.registrationNumber=registrationNumber;
        this.layout = layout
        this.airline = airline
        this.cargo = cargo
        this.pilots = pilots
    }
    public getAirline(): Airline {
        return this.airline
    }
    public setPilot(pilot: Pilot, colPilot: Pilot): void {
        this.pilots = pilot;
        this.colPilots = colPilot;
    }
    public addCargo(...cargos: Cargo[]): void {
        if (this.cargo.length <= 5) {
            cargos.forEach(cargo => this.cargo.push(cargo));
        }
    }
}