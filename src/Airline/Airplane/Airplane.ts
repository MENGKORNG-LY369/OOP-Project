import { Airline } from "../Airline"
import { Cargo } from "./Cargo/Cargo"

export class Airplane {
    constructor
        (
            private registrationNumber: string,
            private layout: string,
            private airline: Airline,
            private cargo: Cargo[] = []

        ) {
        this.registrationNumber=registrationNumber;
        this.layout = layout
        this.airline = airline
        this.cargo = cargo

    }
    getAirline(): Airline {
        return this.airline

    }
}