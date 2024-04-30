export class Baggage {
    constructor
        (
            private passenger: Customer,
            private weight: number

        ) {
        this.passenger = passenger;
        this.weight = weight;

    }
    getWeight(): number {
        return this.weight;
    }

}