import { Customer } from "../../../../Human/Customer/Customer";

export class Baggage {
    constructor
        (
            private label: string,
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