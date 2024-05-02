"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Connector_1 = require("../../Connector");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(firstName, lastName, email, age, gender, phone, frequentFlyerNumber, booking, baggage) {
        if (booking === void 0) { booking = []; }
        if (baggage === void 0) { baggage = []; }
        var _this = _super.call(this, firstName, lastName, email, age, gender) || this;
        _this.phone = phone;
        _this.frequentFlyerNumber = frequentFlyerNumber;
        _this.booking = booking;
        _this.baggage = baggage;
        _this.phone = phone;
        _this.frequentFlyerNumber = frequentFlyerNumber;
        _this.booking = booking;
        _this.baggage = baggage;
        return _this;
    }
    return Customer;
}(Connector_1.Person));
exports.Customer = Customer;
