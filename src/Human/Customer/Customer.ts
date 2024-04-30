<<<<<<< HEAD
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
=======
import { Person } from "../Person";

export class Customer extends Person {

    constructor(
      firstName: string,
      lastName: string,
      email: string,
      age: number,
      gender: string,
      private phone: string,
      private frequentFlyerNumber: string,
      private booking:Booking[],
      private baggage: Baggage[] = []
    ) {
      super(firstName, lastName, email, age, gender);
      this.phone = phone;
      this.frequentFlyerNumber = frequentFlyerNumber;
      this.booking = booking;
      this.baggage = baggage;
    }
  }
>>>>>>> 1d591c6118d27b7cad99c44ae0a6e4f6f29deb29
