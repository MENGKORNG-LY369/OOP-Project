import { Crew, Customer, FlightInstance, Gender, PilotRole } from "../../../../Connector";

export class Pilot extends Crew {        
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: Gender,
        public role: PilotRole,
    ){
        super(firstName, lastName, email, age, gender)
        this.role = role;
    }
    getSalary(): number {
        return 800;
    }

}