"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatType = exports.SeatClass = void 0;
var SeatClass;
(function (SeatClass) {
    SeatClass["Economy"] = "Economy";
    SeatClass["EconomyPlus"] = "EconomyPlus";
    SeatClass["PreferredEconomy"] = "PreferredEconomy";
    SeatClass["Business"] = "Business";
    SeatClass["FirstClass"] = "FirstClass";
})(SeatClass || (exports.SeatClass = SeatClass = {}));
var SeatType;
(function (SeatType) {
    SeatType["Regular"] = "Regular";
    SeatType["Accessible"] = "Accessible";
    SeatType["EmergencyExit"] = "EmergencyExit";
    SeatType["ExtraLegRoom"] = "ExtraLegRoom";
})(SeatType || (exports.SeatType = SeatType = {}));
