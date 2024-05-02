"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
var Connector_1 = require("../Connector");
var Booking = /** @class */ (function () {
    /**
     *
     * @param bookingNumber
     * @param flight
     * @param customer
     * @param seatType
     * @param bookingStatus
     * @param payment
     */
    function Booking(bookingNumber, flight, customer, seatType, bookingStatus, payment, ticket) {
        this.bookingNumber = bookingNumber;
        this.flight = flight;
        this.customer = customer;
        this.seatType = seatType;
        this.bookingStatus = bookingStatus;
        this.payment = payment;
        this.ticket = ticket;
        this.bookingNumber = bookingNumber;
        this.flight = flight;
        this.customer = customer;
        this.seatType = seatType;
        this.bookingStatus = bookingStatus;
    }
    Booking.prototype.getSeatType = function () {
        return this.seatType;
    };
    Booking.prototype.updateStatus = function (newStatus) {
        this.bookingStatus = newStatus;
    };
    Booking.prototype.paymentProcess = function (amount, currency, cardType, cardNumber, expireDate, seatClass, payStatus) {
        var _a;
        if (((this.seatType == Connector_1.SeatType.Regular && amount >= 300) ||
            (this.seatType == Connector_1.SeatType.Accessible && amount >= 400) ||
            (this.seatType == Connector_1.SeatType.EmergencyExit && amount >= 500) ||
            (this.seatType == Connector_1.SeatType.EmergencyExit && amount >= 600)) &&
            (this.bookingStatus !== Connector_1.BookingStatus.CheckIn) &&
            (this.customer.email == ((_a = this.flight.getOnePassenger(this.customer)) === null || _a === void 0 ? void 0 : _a.email))) {
            var pay = new Connector_1.Payment(this.customer, amount, currency, cardType, cardNumber, expireDate, seatClass, payStatus);
            this.payment = pay;
            this.ticket = this.printTicket();
            return this.ticket;
            this.flight.addPassenger(this.customer);
        }
    };
    Booking.prototype.printTicket = function () {
        var ticket = new Connector_1.Ticket(this.payment, this.flight);
        this.ticket = ticket;
        return this.ticket;
    };
    return Booking;
}());
exports.Booking = Booking;
