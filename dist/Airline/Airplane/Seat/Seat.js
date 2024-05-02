"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seat = void 0;
var Seat = /** @class */ (function () {
    function Seat(seatNumber, airplane, type, price, booking) {
        this.seatNumber = seatNumber;
        this.airplane = airplane;
        this.type = type;
        this.price = price;
        this.booking = booking;
        this.seatNumber = seatNumber;
        this.airplane = airplane;
        this.type = type;
        this.price = price;
        this.booking = booking;
    }
    Seat.prototype.getSeatType = function () {
        return this.type;
    };
    Seat.prototype.getPrice = function () {
        return this.price;
    };
    return Seat;
}());
exports.Seat = Seat;
