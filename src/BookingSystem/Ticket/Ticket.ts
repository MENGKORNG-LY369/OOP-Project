import { BoardingPass, CheckIn, Flight, Payment, PaymentStatus } from "../../Connector";

export class Ticket {
    constructor(
        public payment: Payment,
        public flight: Flight,
        public checkIn?: CheckIn,
        public boardingPass: BoardingPass[] = []
    ) {}

    public checkInProcess(): BoardingPass[] | undefined {
        if (this.payment.getPaymentStatus() === PaymentStatus.Completed) { // checking the payment status
            this.checkIn = new CheckIn(this, true);
            return this.printBoardingPass()
        }
        this.checkIn = new CheckIn(this, false);
    }
    private printBoardingPass(): BoardingPass[] {
        const flightInstances = this.flight.getFlightInstances(this.payment.customer)
        flightInstances.forEach(instance => {
            const boardingPass = new BoardingPass("&#$234", instance, this.payment); // Create boarding pass
            this.boardingPass.push(boardingPass);
        });
        return this.boardingPass;
    }
}