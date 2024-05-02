"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = void 0;
var Airplane = /** @class */ (function () {
    function Airplane(registrationNumber, layout, airline, cargo) {
        if (cargo === void 0) { cargo = []; }
        this.registrationNumber = registrationNumber;
        this.layout = layout;
        this.airline = airline;
        this.cargo = cargo;
        this.registrationNumber = registrationNumber;
        this.layout = layout;
        this.airline = airline;
        this.cargo = cargo;
    }
    Airplane.prototype.getAirline = function () {
        return this.airline;
    };
    return Airplane;
}());
exports.Airplane = Airplane;
