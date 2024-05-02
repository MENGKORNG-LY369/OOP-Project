import { Baggage } from "../../../Connector";

export class Cargo {
    constructor(
            public baggage: Baggage[] = [],
        ) {
        this.baggage = baggage;
    }
    public addBaggages(...baggages: Baggage[]): void {
        baggages.forEach(b => this.baggage.push(b));
    }
}