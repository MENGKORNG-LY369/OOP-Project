"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(codeShare, manager, airplane) {
        if (airplane === void 0) { airplane = []; }
        this.codeShare = codeShare;
        this.manager = manager;
        this.airplane = airplane;
        this.codeShare = codeShare;
        this.airplane = airplane;
    }
    Airline.prototype.addAirplane = function () {
        this.airplane;
    };
    Airline.prototype.getCodeShare = function () {
        return this.codeShare;
    };
    return Airline;
}());
exports.Airline = Airline;
