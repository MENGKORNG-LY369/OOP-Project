import { Booking } from "../Connector";

export class Itinerary {
    constructor(
        private deskOfficerEmail: string,
        private booking: Booking[],
    ) {
        this.booking = booking;
        this.deskOfficerEmail = deskOfficerEmail;
    }
}