import { BookingStatus, Customer, Flight, FlightInstance, Payment, PaymentMethod, PaymentStatus, SeatClass, SeatType, Ticket } from "../Connector";

export class Booking {
    /**
     * 
     * @param bookingNumber 
     * @param flight 
     * @param customer 
     * @param seatType 
     * @param bookingStatus 
     * @param payment 
     */
    constructor(
        public bookingNumber: string,
        public flight: Flight,
        public customer: Customer,
        private seatType: SeatType,
        private bookingStatus: BookingStatus,
        public payment?: Payment,
        public ticket?: Ticket,
    ) {
        this.bookingNumber = bookingNumber;
        this.flight = flight;
        this.customer = customer;
        this.seatType = seatType;
        this.bookingStatus = bookingStatus;
    }

    public getSeatType(): SeatType {
        return this.seatType;
    }

    public updateStatus(newStatus: BookingStatus): void {
        this.bookingStatus = newStatus;
    }

    public paymentProcess(
        amount: number,
        currency: string,
        cardType: PaymentMethod,
        cardNumber: string,
        expireDate: string,
        seatClass: SeatClass,
        payStatus: PaymentStatus
    ): any {
        if (
            ((this.seatType == SeatType.Regular && amount >= 300) ||
            (this.seatType == SeatType.Accessible && amount >= 400) ||
            (this.seatType == SeatType.EmergencyExit && amount >= 500) ||
            (this.seatType == SeatType.EmergencyExit && amount >= 600)) &&
            (this.bookingStatus !== BookingStatus.CheckIn) && 
            (this.customer.email == this.flight.getOnePassenger(this.customer)?.email)
        ) {
            const pay = new Payment(this.customer, amount, currency, cardType, cardNumber, expireDate, seatClass, payStatus);
            this.payment = pay;
            this.ticket = this.printTicket()
            return this.ticket;
            this.flight.addPassenger(this.customer)
        }
    }

    private printTicket(): Ticket {
        const ticket = new Ticket(this.payment, this.flight);
        this.ticket = ticket;
        return this.ticket;
    }
}