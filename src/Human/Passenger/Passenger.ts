import { Cuisine, Customer, Gate, Ticket } from "../../Connector";

export class Passenger {
    constructor(
        private customer: Customer,
        private passportNumber: string,
        private dateOfBirth: string,
        public ticket: Ticket,
        public meal: Cuisine[] = [],
    ) {
        this.passportNumber = passportNumber;
        this.dateOfBirth = dateOfBirth;
        this.ticket = ticket;
        this.meal = meal;
    }

    public getPassportNumber(): string { return this.passportNumber; }

    public getGateNumber(): Gate[] {
        let gateList: Gate[] = [];
        this.ticket.boardingPass.filter(board => {
            gateList.push(board.flight.gate);
        })
        return gateList;
    }

    public choosingMeal(...meals: Cuisine[]): void {
        meals.forEach(cuisine => this.meal.push(cuisine));
    }
}
