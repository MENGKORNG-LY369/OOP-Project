import { FlightStatus, SeatType } from "./Enums/Enums";


export abstract class Person {
    constructor(private firstName: string, private lastName: string, private email: string, private age: number, private gender: string) {
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.email = this.email;
        this.age = this.age;
        this.gender = this.gender;
    }
}

export abstract class Employee extends Person {
    constructor(protected salary: number, firstName: string, lastName: string, email: string, age: number, gender: string) {
        super(firstName, lastName, email, age, gender);

        this.salary = salary;
    }
    abstract getSalary(): number;
}

export class Pilot extends Employee {
    constructor(salary: number, firstName: string, lastName: string, email: string, age: number, gender: string) {
        super(salary, firstName, lastName, email, age, gender);
    }
    getSalary(): number {
        return this.salary
    }
}

export class Crew extends Employee {
    constructor(salary: number, firstName: string, lastName: string, email: string, age: number, gender: string) {
        super(salary, firstName, lastName, email, age, gender);
    }
    getSalary(): number {
        return this.salary
    }
}

export class Passenger extends Person{
    /**
     * @param parameters
     * *
        - address: string                                  
        - contactNumber: string 
        - trip: Trip[] 
     */
    constructor(private address: Address, private contactNumber: string, private trip: Trip[], firstName: string, lastName: string, email: string, age: number, gender: string) {
        super(firstName, lastName, email, age, gender);
    }
}


export class Address {
    constructor(public street: string, public city: string, public zipcode: string, public country: string) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;
    }
}

export class Airport {
    constructor(private name: string, private address: Address, private flight: Flight[] = []) {
        this.name = name;
        this.address = address;
        this.flight = flight;
    }
    getFlight() { return this.flight; }
}

export class Flight {
    constructor(private flightNumber: string, private gate: Route, private airport: Airport[]) {
        this.flightNumber = flightNumber;
        this.gate = gate;
        this.airport = airport;
    }
}

export class FlightInstance {
    /**
     * @param parameters
     * *
        - flight: Flight
        - flightStatus: FlightStatus
        - airplane:  Airplane
    */
    constructor(private flight: Flight, private flightStatus: FlightStatus, private airplane: Airplane) {
        this.flight = flight;
        this.flightStatus = flightStatus;
        this.airplane = airplane;
    }
}

export class Airline {
    /**
     * @param parameters
     * *
        - name: string
        - code: string
        - airplane:  Airplane[] = []
    */
    constructor(private name: string, private code: string, private airplane: Airplane[] = []) {
        this.name = name;
        this.code = code;
        this.airplane = airplane;
    }
}

export class Airplane {
    /** 
     * @param parameters
     * *
        - name: string
        - modal: string
        - airline: Airline
        - seat: Seat[] 
        - flight: FlightInstance
    */
    constructor(private name: string, private modal: string, private airline: Airline, private seat: Seat[]) {
        this.name = name;
        this.modal = modal;
        this.airline = airline;
        this.seat = seat;
    }
}

export class Seat {
    /**
     * 
     * @param parameters 
     * *
        - seatNumer: number
        - seatType:  SeatType
        - airplane: Airplane
        - price: number
        - reservationNumber: string
        - reservation?: Reservation
     */
    constructor(private seatNumber: number, private seatType: SeatType, private airplane: Airplane, private price: number, private reservationNumber: string, private reservation?: Reservation) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.airplane = airplane;
        this.price = price;
        this.reservation = reservation;
    }
}

export class Reservation {
    /**
     * @param parameters 
        - reservationNumber: string
        - flight: FlightInstance
        - seating: [Seat, Passenger]
        - status: ReservationStatus
     */
    constructor(private reservationNumber: string, private flight: FlightInstance, private seating: [Seat, Passenger]) {
        this.reservationNumber = reservationNumber;
        this.flight = flight;
        this.seating = seating;       
    }
}

export class Route {
    /* 
        - id: string   
        - departure: Airport
        - arrival: Airport
        - departureTime: number
        - arrivalTime: number
        - distance: number
    */
    constructor(private id: string, private departure: Airport, private arrival: Airport, private departureTime: number, private arrivalTime: number, private distance: number) {
        this.id = id;
        this.departure = departure;
        this.arrival = arrival;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.distance = distance;
    }
}

export class Trip {
    /**
     * @param parameters
     * *
        - address: Address                                  
        - contactNumber: string 
        - trip: Trip[] 
     */
    constructor(private addrss: Address, private contactNumber: string, private trip: Trip[]) {
        this.addrss = addrss;
        this.contactNumber = contactNumber;
        this.trip = trip;
    }
}