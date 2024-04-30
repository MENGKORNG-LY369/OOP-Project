import { Person } from "../../Person";
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
    booking: Booking[],
    baggage: Baggage[] = [],
    private passportNumber: string,
    private dateOfBirth: string,
    private ticket: Ticket,
    private meal: Cusin[],
    private returnTicket?: Ticket,
    private trip: Itinerary[]
  ) {
    super(
      firstName,
      lastName,
      email,
      age,
      gender,
      phone,
      frequentFlyerNumber,
      booking,
      baggage
    );
    this.passportNumber = passportNumber;
    this.dateOfBirth = dateOfBirth;
    this.ticket = ticket;
    this.meal = meal;
    this.returnTicket = returnTicket;
    this.trip = trip;
  }
}
