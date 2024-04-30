import { Address } from "../Address";
import { Gate } from "./Gate/Gate";
export class Airport extends Address {
    constructor
        (
            street: string,
            city: string,
            zipcode: string,
            country: string,
            private code:string,
            private gate:Gate[]=[],

        ) {
            super(street, city, zipcode, country)
              this.code = code; 
              this.gate = gate;

    }

    method(type): type {

    }

}