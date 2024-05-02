"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gate = void 0;
var Gate = /** @class */ (function () {
    function Gate(gateNumber, status, boarding) {
        if (boarding === void 0) { boarding = []; }
        this.gateNumber = gateNumber;
        this.status = status;
        this.boarding = boarding;
        this.gateNumber = gateNumber;
        this.status = status;
    }
    Gate.prototype.getBoardingPass = function () {
        return this.boarding;
    };
    return Gate;
}());
exports.Gate = Gate;
