"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(customer, amount, currency, cardType, cardNumber, expireDate, seatclass, status) {
        this.customer = customer;
        this.amount = amount;
        this.currency = currency;
        this.cardType = cardType;
        this.cardNumber = cardNumber;
        this.expireDate = expireDate;
        this.seatclass = seatclass;
        this.status = status;
        // this.amount = amount;
        // this.currency = currency;
        // this.cardType = cardType;
        // this.cardNumber = cardNumber;
        // this.expireDate = expireDate;
        // this.status = status;
    }
    Payment.prototype.getPaymentStatus = function () {
        return this.status;
    };
    Payment.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Payment;
}());
exports.Payment = Payment;
