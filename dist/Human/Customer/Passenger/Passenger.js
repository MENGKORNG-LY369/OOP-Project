"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
var Customer_1 = require("../Customer");
var Passenger = /** @class */ (function (_super) {
    __extends(Passenger, _super);
    function Passenger(firstName, lastName, email, age, gender, phone, frequentFlyerNumber, booking, baggage, passportNumber, dateOfBirth, ticket, meal, trip, returnTicket) {
        if (baggage === void 0) { baggage = []; }
        var _this = _super.call(this, firstName, lastName, email, age, gender, phone, frequentFlyerNumber, booking, baggage) || this;
        _this.passportNumber = passportNumber;
        _this.dateOfBirth = dateOfBirth;
        _this.ticket = ticket;
        _this.meal = meal;
        _this.trip = trip;
        _this.returnTicket = returnTicket;
        _this.passportNumber = passportNumber;
        _this.dateOfBirth = dateOfBirth;
        _this.ticket = ticket;
        _this.meal = meal;
        _this.returnTicket = returnTicket;
        _this.trip = trip;
        return _this;
    }
    return Passenger;
}(Customer_1.Customer));
exports.Passenger = Passenger;
