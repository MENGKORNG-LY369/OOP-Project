import { SeatClass } from "../../Constant/Seat";
import { Payment } from "../Payment/Payment";

export class Ticket {
    constructor(
        public seatClass: SeatClass,
        public payment: Payment
    ) {
        this.seatClass = seatClass;
        this.payment = payment;
    }

    public printTicket(): object {
        return {
            "passenger": this.payment.getPassenger(),
            "seat class": this.seatClass,
        }
    }
}