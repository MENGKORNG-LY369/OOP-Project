"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.PaymentMethod = void 0;
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Mastercard"] = "Mastercard";
    PaymentMethod["VISA"] = "VISA";
    PaymentMethod["JCB"] = "JCB";
    PaymentMethod["AEC"] = "AEC";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Unpaid"] = "Unpaid";
    PaymentStatus["Pending"] = "Pending";
    PaymentStatus["Completed"] = "Completed";
    PaymentStatus["Failed"] = "Failed";
    PaymentStatus["Declined"] = "Declined";
    PaymentStatus["Cancelled"] = "Cancelled";
    PaymentStatus["Abandoned"] = "Abandoned";
    PaymentStatus["Settling"] = "Settling";
    PaymentStatus["Settled"] = "Settled";
    PaymentStatus["Refunded"] = "Refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
