import { Booking } from "../../../BookingSystem/Booking";
import { SeatType } from "../../../Constant/Seat";
import { Airplane } from "../Airplane";

export class Seat {

    constructor
        (
            public seatNumber: string,
            public type: SeatType,
            public airplane: Airplane,
            public price: number,
            public booking?: Booking

        ) {
        this.seatNumber = seatNumber;
        this.type = type;
        this.airplane = airplane
        this.price = price
        this.booking = booking

    }
    getSeatType(): SeatType {
        return this.type
    }
    getPrice(): number {
        return this.price
    }



}