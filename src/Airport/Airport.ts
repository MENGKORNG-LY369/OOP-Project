import { Address } from "../Address/Address";
import { Flight } from "../Flight/Flight";

export class Airport {
    /**
     * 
     * @param parameters
     * *
     - name: string
     - address:  Address
     - flight: Flight[] = []
        
     */
    constructor(private name: string, private address: Address, private flight: Flight[] = []) {
        this.name = name;
        this.address = address;
        // this.flight = flight;

    }
    getFlight(): Flight[]{
        return this.flight;


    }
}
