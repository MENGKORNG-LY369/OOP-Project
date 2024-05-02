"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightNumber, route, passenger, seat, flightInstance) {
        if (passenger === void 0) { passenger = []; }
        if (seat === void 0) { seat = []; }
        if (flightInstance === void 0) { flightInstance = []; }
        this.flightNumber = flightNumber;
        this.route = route;
        this.passenger = passenger;
        this.seat = seat;
        this.flightInstance = flightInstance;
        this.flightNumber = flightNumber;
        this.route = route;
        this.flightInstance = flightInstance;
    }
    Flight.prototype.getOnePassenger = function (passenger) {
        var pass = this.passenger.filter(function (pass) { return passenger.email === passenger.email; });
        return pass[0];
    };
    Flight.prototype.getFlightInstances = function (customer) {
        return this.flightInstance.filter(function (instance) { return instance.getPassender().email === customer.email; });
    };
    Flight.prototype.addSeat = function () {
        var _this = this;
        var seats = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            seats[_i] = arguments[_i];
        }
        seats.forEach(function (seat) {
            _this.seat.push(seat);
        });
    };
    Flight.prototype.addFlightInstances = function () {
        var _this = this;
        var instances = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            instances[_i] = arguments[_i];
        }
        instances.forEach(function (flight) {
            _this.flightInstance.push(flight);
        });
    };
    Flight.prototype.addPassenger = function () {
        var _this = this;
        var passengers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            passengers[_i] = arguments[_i];
        }
        passengers.forEach(function (passenger) { return _this.passenger.push(passenger); });
    };
    return Flight;
}());
exports.Flight = Flight;
