import { Baggage, Booking, Gender, Person } from "../../Connector";
export class Customer extends Person {

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,    
        gender: Gender,
        public phone: string,
        public frequentFlyerNumber: string,
        public booking: Booking[] = [],
        public baggage: Baggage[] = []
    ) {
        super(firstName, lastName, email, age, gender);
        this.phone = phone;
        this.frequentFlyerNumber = frequentFlyerNumber;
        this.booking = booking;
        this.baggage = baggage;
    }
}
