import { Booking, SeatType } from "../../../Connector";

export class Seat {

    constructor
        (
            private seatNumber: string,
            private type: SeatType,
            private price: number,
            private booking?: Booking

        ) {
        this.seatNumber = seatNumber;
        this.type = type;
        this.price = price
        this.booking = booking

    }
    public getSeatType(): SeatType {
        return this.type
    }
    public getPrice(): number {
        return this.price
    }



}