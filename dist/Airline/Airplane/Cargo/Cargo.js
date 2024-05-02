"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
var Cargo = /** @class */ (function () {
    function Cargo(baggage) {
        if (baggage === void 0) { baggage = []; }
        this.baggage = baggage;
        this.baggage = baggage;
    }
    Cargo.prototype.addBaggages = function () {
        var _this = this;
        var baggages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            baggages[_i] = arguments[_i];
        }
        baggages.forEach(function (b) { return _this.baggage.push(b); });
    };
    return Cargo;
}());
exports.Cargo = Cargo;
