import { Crew, Customer, FlightInstance, Gender, PilotRole } from "../../../../Connector";

export class Attendant extends Crew {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        flightInstance: FlightInstance,
        public role: PilotRole,
    ) {
        super(firstName, lastName, email, age, gender);
    }
    getSalary(): number {
        return 400;
    }
}