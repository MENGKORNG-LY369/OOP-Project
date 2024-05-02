import { Crew, Customer, FlightInstance, Gender, PilotRole } from "../../../../Connector";

export class Attendant extends Crew {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        salary: number,
        public passenger: Customer[],
        public role: PilotRole,
        public flightInstance: FlightInstance
    ) {
        super(firstName, lastName, email, age, gender, flightInstance);
    }
    getSalary(): number {
        return 400;
    }
}