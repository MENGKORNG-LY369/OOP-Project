"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIn = void 0;
var CheckIn = /** @class */ (function () {
    function CheckIn(ticket, isSuccess) {
        if (isSuccess === void 0) { isSuccess = false; }
        this.ticket = ticket;
        this.isSuccess = isSuccess;
        this.isSuccess = isSuccess;
    }
    CheckIn.prototype.printBoardingPass = function () {
        return this.ticket.boardingPass;
    };
    return CheckIn;
}());
exports.CheckIn = CheckIn;
