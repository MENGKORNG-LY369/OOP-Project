"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightInstance = void 0;
var FlightInstance = /** @class */ (function () {
    function FlightInstance(flightStatus, airplane, route, passenger, gate, date) {
        if (date === void 0) { date = new Date; }
        this.flightStatus = flightStatus;
        this.airplane = airplane;
        this.route = route;
        this.passenger = passenger;
        this.gate = gate;
        this.date = date;
        this.flightStatus = flightStatus;
        this.airplane = airplane;
        this.route = route;
        this.date = date;
    }
    FlightInstance.prototype.getGate = function () {
        return this.gate;
    };
    FlightInstance.prototype.getPassender = function () {
        return this.passenger;
    };
    FlightInstance.prototype.setGate = function (gate) {
        this.gate = gate;
    };
    FlightInstance.prototype.updateStatus = function (newStatus) {
        this.flightStatus = newStatus;
    };
    FlightInstance.prototype.setAirplane = function (airplane) {
        this.airplane = airplane;
    };
    return FlightInstance;
}());
exports.FlightInstance = FlightInstance;
