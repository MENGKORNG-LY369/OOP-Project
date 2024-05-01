import { Booking } from "../../../BookingSystem/Booking";
import { SeatType } from "../../../Constant/Seat";
import { Airplane } from "../Airplane";

export class Seat {

    constructor
        (
            private seatNumber: string,
            private airplane: Airplane,
            private  type:SeatType,
            private  price: number,
            private booking?: Booking

        ) {
        this.seatNumber = seatNumber;
        this.airplane = airplane
        this.type = type;
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