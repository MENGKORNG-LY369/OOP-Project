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