import {
    Airline, Airplane, Airport, Booking, BookingStatus, Controller,
    Customer, Flight, FlightInstance, FlightStatus, FrontDeskOfficer,
    Gate, GateStatus, Gender, Manager, PaymentMethod, 
    PaymentStatus, Pilot, PilotRole, Route, Seat, SeatClass, SeatType, Cargo, Baggage,
    Passenger,
    Ticket,
    Payment,
    Cuisine,
} from "./Connector"
import { MealType } from "./Constant/Meal";
import { Chef } from "./Human/Employee/Chef/Chef";

// airline manager
const AirManager = new Manager("Mengkorng", "Ly", "mengkorng.ly@gmail.com", 19, Gender.male)
const managerSalary = AirManager.getSalary();


// controllers
const Controller1 = new Controller("sanok", "payang", "sanok@gmail.com", 20, Gender.male);
const controllerSalary = Controller1.getSalary();

// Pilots 
const pilot1 = new Pilot("Sanok", "payang", "sanok@gmail.com", 20, Gender.male, PilotRole.CoPilot);
const pilot2 = new Pilot("thona", "ngon", "thona@gmail.com", 20, Gender.female, PilotRole.Pilot);

// chefs
const chef1 = new Chef("thona", "ngon", "thona@gmail.com", 20, Gender.female)

// customers
const customer1 = new Customer("mengkorng", "Ly", "mengkorng@gmail.com", 20, Gender.male, "313-234-342", "dfha423")
const customer2 = new Customer("thona", "ngon", "thona@gmail.com", 20, Gender.female, "313-234-342", "dfha423");

// gates
const gate1 = new Gate("$2sq23", GateStatus.Available)
const gate2 = new Gate("$2sq23", GateStatus.Available)


// airports
const PpAirport = new Airport("342dsa", "Phnom Penh", "123-123", "Cambodia", "12323")
const SgAirport = new Airport("dfa342", "singapor", "123-123", "Singapore", "12323")
const TaiwanAirport = new Airport("dfa342", "taiwan", "123-123", "Taiwan", "12323")


// routes
const route1 = new Route(PpAirport, SgAirport, 1000, 50000)
const route2 = new Route(SgAirport, TaiwanAirport, 1000, 50000)

// airline
const CamAirline = new Airline("@#324", AirManager)

// Baggages
const customer1Baggage = new Baggage("123d54", customer1, 10);
const customer2Baggage = new Baggage("123d24", customer2, 20);

// Cargo
const plane1Cargo = new Cargo();
plane1Cargo.addBaggages(customer1Baggage, customer2Baggage)

// front desk officers
const officer1 = new FrontDeskOfficer("sanok", "sanok", "sanok@gmail.com", 21, Gender.male)

// airplanes
const Airplane1 = new Airplane("#!3dfa", "I don't know", CamAirline);
const Airplane2 = new Airplane("#$edfa23", "I don't know", CamAirline);
Airplane1.addCargo(plane1Cargo) // add cargo to an airplane

// seats
const Seat1 = new Seat("1", SeatType.Regular, 500);
const Seat2 = new Seat("2", SeatType.Regular, 500);
const Seat3 = new Seat("3", SeatType.EmergencyExit, 500);


// Meals
const khmerMeal = new Cuisine("Korko", MealType.Khmer, 20)
const HalalDinner = new Cuisine("Halal", MealType.Halal, 10)


// flight instance
const flightInstance1 = new FlightInstance(FlightStatus.Scheduled, Airplane1, route1)
flightInstance1.setGate(gate1);
flightInstance1.addSeat(Seat1, Seat2, Seat3)
flightInstance1.addPassenger(customer1, customer2)

const flightInstance2 = new FlightInstance(FlightStatus.Active, Airplane2, route2)
flightInstance2.addSeat(Seat1, Seat2, Seat3)
flightInstance2.setGate(gate2);


// flights
const flight1 = new Flight("fds-333", route2);
flight1.addPassenger(customer1)
flight1.addFlightInstances(flightInstance1, flightInstance2);
flight1.addSeat(Seat1, Seat2);

const flight2 = new Flight("323-fsd", route1)
flight2.addPassenger(customer2);
flight2.addFlightInstances(flightInstance1);
flight2.addSeat(Seat1, Seat2);


// booking (customer 1)
const Cuz1Booking1 = new Booking("23@#fd", flight1, customer1, SeatType.Regular, BookingStatus.Confirmed)
const cuz1Payment = new Payment(customer1, 500, "usa", PaymentMethod.VISA, "123-123-123", "2025", SeatClass.FirstClass, PaymentStatus.Completed, true)
const cuz1Ticket = new Ticket(cuz1Payment, flight1)
const cuz1BoardingPass = cuz1Ticket.checkInProcess()


// booking (customer 2)
const cuz2Booking1 = new Booking("342#dfa", flight2, customer2, SeatType.Accessible, BookingStatus.Confirmed);
const cuz2Payment = new Payment(customer1, 900, "usa", PaymentMethod.Mastercard, "123-123-312", "2025", SeatClass.Business, PaymentStatus.Completed, false);
const cuz2Ticket = new Ticket(cuz2Payment, flight1)
const cuz2BoardingPass = cuz2Ticket.checkInProcess()


// passengers
const passenger1 = new Passenger(customer1, "123-dfa-123", "2002-12-12", cuz1Ticket)
passenger1.choosingMeal(khmerMeal)
const passenger1Gate = passenger1.getGateNumber()

const passenger2 = new Passenger(customer2, "123-dfa-123", "2002-12-12", cuz2Ticket)
passenger2.choosingMeal(HalalDinner)
const passenger2Gate = passenger2.getGateNumber()

/**----------------------------------------------------------------------- */

// Manager manage flights (Airline manager)
AirManager.addFlight(flight1, flight2);
AirManager.addBooking(Cuz1Booking1, cuz2Booking1)
const passengerList = AirManager.getPassenger(true)

// Create Itineraries (Front desk officer)
const trip1 = officer1.createTrips(Cuz1Booking1, cuz2Booking1)

// controller management (Controller)
Controller1.addTrip(trip1)
const listTrip = Controller1.getCustomerTrips();


// Chef Managements (Chef)
chef1.addPassenger(passenger1, passenger2);
