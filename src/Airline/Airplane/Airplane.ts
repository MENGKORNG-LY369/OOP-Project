
export class Plane {
    constructor
    (
            private registerNumber: string,
            private layout: string,
            private airline: Airline,
            private cargo: Cargo[] = []


        ) {
        this.registerNumber = registerNumber
        this.layout = layout
        this.airline = airline
        this.airline = airline
        this.cargo = cargo

    }
    getAirline(): Airline {
        return this.airline

    }
}