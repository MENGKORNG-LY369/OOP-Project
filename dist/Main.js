"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connector_1 = require("./Connector");
// airline manager
var AirManager = new Connector_1.Manager("Mengkorng", "Ly", "mengkorng.ly@gmail.com", 19, Connector_1.Gender.male);
var managerSalary = AirManager.getSalary();
// controllers
// const Controller1 = new Controller("sanok", "payang", "sanok@gmail.com", 20, Gender.male);
// const controllerSalary = Controller1.getSalary();
// customers
var customer1 = new Connector_1.Customer("mengkorng", "Ly", "mengkorng@gmail.com", 20, Connector_1.Gender.male, "313-234-342", "dfha423");
var customer2 = new Connector_1.Customer("thona", "ngon", "thona@gmail.com", 20, Connector_1.Gender.female, "313-234-342", "dfha423");
// airports
var PpAirport = new Connector_1.Airport("342dsa", "Phnom Penh", "123-123", "Cambodia", "12323");
var SgAirport = new Connector_1.Airport("dfa342", "singapor", "123-123", "Singapore", "12323");
var TaiwanAirport = new Connector_1.Airport("dfa342", "taiwan", "123-123", "Taiwan", "12323");
// gates
var gate1 = new Connector_1.Gate("$2sq23", Connector_1.GateStatus.Available);
var gate2 = new Connector_1.Gate("$2sq23", Connector_1.GateStatus.Available);
// routes
var route1 = new Connector_1.Route(PpAirport, SgAirport, 1000, 50000);
var route2 = new Connector_1.Route(SgAirport, TaiwanAirport, 1000, 50000);
// airline
var CamAirline = new Connector_1.Airline("@#324", AirManager);
// airplanes
var Airplane1 = new Connector_1.Airplane("#!3dfa", "I don't know", CamAirline);
var Airplane2 = new Connector_1.Airplane("#$edfa23", "I don't know", CamAirline);
// seats
var Seat1 = new Connector_1.Seat("1", Airplane1, Connector_1.SeatType.Regular, 500);
var Seat2 = new Connector_1.Seat("2", Airplane1, Connector_1.SeatType.Regular, 500);
// Baggages
var customer1Baggage = new Connector_1.Baggage("123d54", customer1, 10);
var customer2Baggage = new Connector_1.Baggage("123d24", customer2, 20);
// Cargo
var plane1Cargo = new Connector_1.Cargo();
plane1Cargo.addBaggages(customer1Baggage, customer2Baggage);
// front desk officers
var officer1 = new Connector_1.FrontDeskOfficer("sanok", "sanok", "sanok@gmail.com", 21, Connector_1.Gender.male);
// flight instance
var flightInstance1 = new Connector_1.FlightInstance(Connector_1.FlightStatus.Scheduled, Airplane1, route1, customer1);
flightInstance1.setGate(gate1);
var flightInstance2 = new Connector_1.FlightInstance(Connector_1.FlightStatus.Active, Airplane2, route2, customer2);
flightInstance2.setGate(gate2);
// flight 1
var flight1 = new Connector_1.Flight("fds-333", route2);
flight1.addPassenger(customer1);
flight1.addFlightInstances(flightInstance1, flightInstance2);
flight1.addSeat(Seat1, Seat2);
// flight 2
var flight2 = new Connector_1.Flight("323-fsd", route1);
flight2.addPassenger(customer2);
flight2.addFlightInstances(flightInstance1);
flight2.addSeat(Seat1, Seat2);
// Pilots 
var pilot1 = new Connector_1.Pilot("Sanok", "payang", "sanok@gmail.com", 20, Connector_1.Gender.male, Connector_1.PilotRole.Pilot, flightInstance1);
var pilot2 = new Connector_1.Pilot("thona", "ngon", "thona@gmail.com", 20, Connector_1.Gender.female, Connector_1.PilotRole.CoPilot, flightInstance1);
// booking (customer 1)
var Cuz1Booking1 = new Connector_1.Booking("23@#fd", flight1, customer1, Connector_1.SeatType.Regular, Connector_1.BookingStatus.Confirmed);
var ticket = Cuz1Booking1.paymentProcess(500, "usa", Connector_1.PaymentMethod.VISA, "123-123-123", "2025", Connector_1.SeatClass.FirstClass, Connector_1.PaymentStatus.Completed);
var boardingPass = ticket.checkInProcess();
// booking (customer 2)
var CuzBooking2 = new Connector_1.Booking("342#dfa", flight2, customer2, Connector_1.SeatType.Accessible, Connector_1.BookingStatus.Confirmed);
var ticket2 = CuzBooking2.paymentProcess(900, "usa", Connector_1.PaymentMethod.Mastercard, "123-123-312", "2025", Connector_1.SeatClass.Business, Connector_1.PaymentStatus.Completed);
var boardingPass2 = ticket2.checkInProcess();
console.log(boardingPass2);
// add booking list to Controller
// console.log(Controller1);
