"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatus = void 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["Requested"] = "Requested";
    BookingStatus["Pending"] = "Pending";
    BookingStatus["Confirmed"] = "Confirmed";
    BookingStatus["CheckIn"] = "Check-in";
    BookingStatus["Cancelled"] = "Cancelled";
    BookingStatus["Abandoned"] = "Abandoned";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
