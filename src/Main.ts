import {
    Airline, Airplane, Airport, Booking, BookingStatus, Controller,
    Customer, Flight, FlightInstance, FlightStatus, FrontDeskOfficer,
    Gate, GateStatus, Gender, Manager, PaymentMethod, 
    PaymentStatus, Pilot, PilotRole, Route, Seat, SeatClass, SeatType, Cargo, Baggage
} from "./Connector"

// airline manager
const AirManager = new Manager("Mengkorng", "Ly", "mengkorng.ly@gmail.com", 19, Gender.male)
const managerSalary = AirManager.getSalary();


// controllers
const Controller1 = new Controller("sanok", "payang", "sanok@gmail.com", 20, Gender.male);
const controllerSalary = Controller1.getSalary();

// customers
const customer1 = new Customer("mengkorng", "Ly", "mengkorng@gmail.com", 20, Gender.male, "313-234-342", "dfha423")
const customer2 = new Customer("thona", "ngon", "thona@gmail.com", 20, Gender.female, "313-234-342", "dfha423");


// airports
const PpAirport = new Airport("342dsa", "Phnom Penh", "123-123", "Cambodia", "12323")
const SgAirport = new Airport("dfa342", "singapor", "123-123", "Singapore", "12323")
const TaiwanAirport = new Airport("dfa342", "taiwan", "123-123", "Taiwan", "12323")

// gates
const gate1 = new Gate("$2sq23", GateStatus.Available)
const gate2 = new Gate("$2sq23", GateStatus.Available)

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

// airplanes
const Airplane1 = new Airplane("#!3dfa", "I don't know", CamAirline);
const Airplane2 = new Airplane("#$edfa23", "I don't know", CamAirline);

Airplane1.addCargo(plane1Cargo) // add cargo to an airplane


// seats
const Seat1 = new Seat("1", Airplane1, SeatType.Regular, 500);
const Seat2 = new Seat("2", Airplane1, SeatType.Regular, 500);

// front desk officers
const officer1 = new FrontDeskOfficer("sanok", "sanok", "sanok@gmail.com", 21, Gender.male)

// flight instance
const flightInstance1 = new FlightInstance(FlightStatus.Scheduled, Airplane1, route1, customer1)
flightInstance1.setGate(gate1);

const flightInstance2 = new FlightInstance(FlightStatus.Active, Airplane2, route2, customer2)
flightInstance2.setGate(gate2);


// flight 1
const flight1 = new Flight("fds-333", route2);
flight1.addPassenger(customer1)
flight1.addFlightInstances(flightInstance1, flightInstance2);
flight1.addSeat(Seat1, Seat2);

// flight 2
const flight2 = new Flight("323-fsd", route1)
flight2.addPassenger(customer2);
flight2.addFlightInstances(flightInstance1);
flight2.addSeat(Seat1, Seat2);


// Pilots 
const pilot1 = new Pilot("Sanok", "payang", "sanok@gmail.com", 20, Gender.male, PilotRole.CoPilot);
const pilot2 = new Pilot("thona", "ngon", "thona@gmail.com", 20, Gender.female, PilotRole.Pilot);

// booking (customer 1)
const Cuz1Booking1 = new Booking("23@#fd", flight1, customer1, SeatType.Regular, BookingStatus.Confirmed)
const ticket = Cuz1Booking1.paymentProcess(500, "usa", PaymentMethod.VISA, "123-123-123", "2025", SeatClass.FirstClass, PaymentStatus.Completed);
const boardingPass = ticket.checkInProcess();

// booking (customer 2)
const CuzBooking2 = new Booking("342#dfa", flight2, customer2, SeatType.Accessible, BookingStatus.Confirmed);
const ticket2 = CuzBooking2.paymentProcess(900, "usa", PaymentMethod.Mastercard, "123-123-312", "2025", SeatClass.Business, PaymentStatus.Completed)
const boardingPass2 = ticket2.checkInProcess();

// add booking list to Controller
// Controller1.


// set pilots to an Airplane
Airplane1.setPilot(pilot1, pilot2)
console.log(Airplane1);
