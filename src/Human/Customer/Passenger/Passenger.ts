
import { Baggage } from "../../../Airline/Airplane/Cargo/Baggage/Baggage";
import { Booking } from "../../../BookingSystem/Booking";
import { Ticket } from "../../../BookingSystem/Ticket/Ticket";
import { Cuisine } from "../../../Cuisine/Cuisine";
import { Itinerary } from "../../../Itinerary/Itinerary";
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
    private meal: Cuisine[],
    private trip: Itinerary[],
    private returnTicket?: Ticket,
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
