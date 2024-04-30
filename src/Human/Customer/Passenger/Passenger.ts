import { Booking } from "../../../BookingSystem/Booking";
import { Ticket } from "../../../BookingSystem/Ticket/Ticket";
import { Cuisine } from "../../../Cuisine/Cuisine";
import { Customer } from "../Customer";

export class Passenger extends Customer {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: string,
        phone: string,
        frequentFlyerNumber: string,
        booking: Booking,
        baggage: Baggage[] = [],
        protected passportNumber: string,
        protected dateOfBirth: string,
        protected meal: Cuisine[],
        protected ticket: Ticket,
        protected returnTicket?: Ticket,
    ) {
        super(firstName, lastName, email, age, gender, phone, frequentFlyerNumber, booking, baggage);
    }

    public getItinerary(): Itinerary[] {
        return this.ticket.payment.flight
    }
}