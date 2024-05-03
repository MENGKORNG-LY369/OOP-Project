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
        private status: PaymentStatus,
        public returnTicket: boolean = false
    ) {

    }

    public getPaymentStatus(): PaymentStatus {
        return this.status;
    }
    public updateStatus(newStatus: PaymentStatus): void {
        this.status = newStatus
    }
}