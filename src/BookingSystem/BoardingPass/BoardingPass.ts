import { FlightInstance, Payment } from "../../Connector";

export class BoardingPass {
    constructor(
        public barCode: string,
        public flight: FlightInstance,
        public payment: Payment,
    ) {
        this.barCode = barCode;        
    }
}