import { BookingStatus } from "../Constant/Booking";
import { SeatType } from "../Constant/Seat";

export class Booking {
    
    constructor(
        protected bookingNumber: string,
        protected flight: FlightInstance,
        protected customer: Customer,
        protected seatType: SeatType,
        protected bookingStatus: BookingStatus
    ) {
        this.bookingNumber = bookingNumber;
        this.flight = flight;
        this.customer = customer;
        this.seatType = seatType;
        this.bookingStatus = bookingStatus;
    }

    public getPassenger(): Customer {
        return this.customer;
    }

    public updateStatus(newStatus: BookingStatus): void {
        this.bookingStatus = newStatus;
    }
}