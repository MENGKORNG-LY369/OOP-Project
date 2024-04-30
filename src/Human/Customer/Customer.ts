import { Booking } from "../../BookingSystem/Booking";
import { Person } from "../Person";

export class Customer extends Person{
    constructor(
        firstName: string,
        lastName: string,
        email: string, 
        age: number, 
        gender: string,
        protected phone: string,
        protected frequentFlyerNumber: string,
        protected booking: Booking[] = [],
        protected baggage: Baggage[] = []

    ) {
        super(firstName, lastName, email, age, gender);
    }
}