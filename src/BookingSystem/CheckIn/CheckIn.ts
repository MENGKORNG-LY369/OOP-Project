import { BoardingPass, Ticket } from "../../Connector";

export class CheckIn {
    constructor(
        public ticket: Ticket,
        private isSuccess: boolean = false 
    ) {
        this.isSuccess = isSuccess;
    }

    public printBoardingPass(): BoardingPass[] {
        return this.ticket.boardingPass
    }
}