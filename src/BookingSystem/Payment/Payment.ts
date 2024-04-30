import { BookingStatus } from "../../Constant/Booking";
import { PaymentMethod, PaymentStatus } from "../../Constant/Payment";
import { SeatType } from "../../Constant/Seat";
import { Booking } from "../Booking";

export class Payment extends Booking {
    constructor(
        bookingNumber: string,
        flight: Flight,
        customer: Customer,
        seatType: SeatType,
        bookingStatus: BookingStatus,
        protected amount: number,
        protected currency: string,
        protected cardType: PaymentMethod,
        protected cardNumber: string,
        protected expireDate: string,
        protected status: PaymentStatus
    ) {
        super(bookingNumber, flight, customer, seatType, bookingStatus);

        this.amount = amount;
        this.currency = currency;
        this.cardType = cardType;
        this.cardNumber = cardNumber;
        this.expireDate = expireDate;
        this.status = status;
    }

    public processPayment() : boolean {
        return;
    }
}