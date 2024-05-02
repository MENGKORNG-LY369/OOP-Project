import { BookingStatus, Customer, FlightInstance, PaymentMethod, PaymentStatus, SeatClass } from "../../Connector";

export class Payment {
    constructor(
        public customer: Customer,
        public amount: number,
        public currency: string,
        public cardType: PaymentMethod,
        public cardNumber: string,
        public expireDate: string,
        public seatclass: SeatClass,
        private status: PaymentStatus
    ) {
        // this.amount = amount;
        // this.currency = currency;
        // this.cardType = cardType;
        // this.cardNumber = cardNumber;
        // this.expireDate = expireDate;
        // this.status = status;
    }

    public getPaymentStatus(): PaymentStatus {
        return this.status;
    }
    public updateStatus(newStatus: PaymentStatus): void {
        this.status = newStatus
    }
}