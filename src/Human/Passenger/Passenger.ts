import { Cuisine, Customer, Gender, Itinerary, Ticket } from "../../Connector";

export class Passenger extends Customer {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        phone: string,
        frequentFlyerNumber: string,
        private passportNumber: string,
        private dateOfBirth: string,
        public ticket: Ticket,
        public meal: Cuisine[] = [],
        public trip: Itinerary[] = [],
        public returnTicket?: Ticket,

    ) {
        super(firstName, lastName, email, age, gender, phone, frequentFlyerNumber);
        this.passportNumber = passportNumber;
        this.dateOfBirth = dateOfBirth;
        this.ticket = ticket;
        this.meal = meal;
        this.returnTicket = returnTicket;
        this.trip = trip;
    }

    public getPassportNumber(): string { return this.passportNumber; }
}
