"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var Connector_1 = require("../../Connector");
var Ticket = /** @class */ (function () {
    function Ticket(payment, flight, checkIn, boardingPass) {
        if (boardingPass === void 0) { boardingPass = []; }
        this.payment = payment;
        this.flight = flight;
        this.checkIn = checkIn;
        this.boardingPass = boardingPass;
    }
    Ticket.prototype.checkInProcess = function () {
        if (this.payment.getPaymentStatus() === Connector_1.PaymentStatus.Completed) { // checking the payment status
            this.checkIn = new Connector_1.CheckIn(this, true);
            return this.printBoardingPass();
        }
        this.checkIn = new Connector_1.CheckIn(this, false);
    };
    Ticket.prototype.printBoardingPass = function () {
        var _this = this;
        var flightInstances = this.flight.getFlightInstances(this.payment.customer);
        flightInstances.forEach(function (instance) {
            var boardingPass = new Connector_1.BoardingPass("&#$234", instance, _this.payment); // Create boarding pass
            _this.boardingPass.push(boardingPass);
        });
        return this.boardingPass;
    };
    return Ticket;
}());
exports.Ticket = Ticket;
