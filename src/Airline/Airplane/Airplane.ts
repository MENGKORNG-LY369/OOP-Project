export class Plane {
    constructor
        (
            private registrationNumber: string,
            private layout: string,
            private airline: Airline,
            private cargo: Cargo[] = []


        ) {
        this.registerNumber = this.registrationNumber
        this.layout = this.layout
        this.airline = this.airline
        this.airline = airline
        this.cargo = this.cargo

    }
    getAirline(): Airline {
        return this.airline

    }
}