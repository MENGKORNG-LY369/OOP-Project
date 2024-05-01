import { BookingStatus } from "../../Constant/Booking";
import { BoardingPass } from "../BoardingPass/BoardingPass";
import { Ticket } from "../Ticket/Ticket";

export class CheckIn {
    constructor(
        protected ticket: Ticket,
        protected boardingPass: BoardingPass[],
        private isSuccess: boolean = false 
    ) {
        this.ticket = ticket;
        this.isSuccess = isSuccess;
        this.isSuccess = isSuccess;
    }

    public isValid(): boolean {
        this.ticket.payment.getStatus() == BookingStatus.Pending
        return ;
    }
    public printBoardingPass(): BoardingPass[] {
        return ;
    }
}