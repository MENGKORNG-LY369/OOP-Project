import { Airplane } from "../Airplane";
import { Baggage } from "./Baggage/Baggage";

export class Cargo {
    constructor
        (
            private baggage: Baggage[] = [],

        ) {
        this.baggage = baggage;

    }
    method(type): type {

    }


}