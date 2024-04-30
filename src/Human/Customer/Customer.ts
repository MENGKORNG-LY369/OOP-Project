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