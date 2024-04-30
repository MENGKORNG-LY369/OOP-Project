import { Airplane } from "../Airplane";
import { Baggage } from "./Baggage/Baggage";

export class Cargo {

    constructor
        (
            private baggage: Baggage[] = [],
            private airplane: Airplane

        ) {
        this.baggage = baggage;
        this.airplane = airplane;

    }
    method(type): type {

    }


}