"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Baggage = void 0;
var Baggage = /** @class */ (function () {
    function Baggage(label, passenger, weight) {
        this.label = label;
        this.passenger = passenger;
        this.weight = weight;
        this.passenger = passenger;
        this.weight = weight;
    }
    Baggage.prototype.getWeight = function () {
        return this.weight;
    };
    return Baggage;
}());
exports.Baggage = Baggage;
