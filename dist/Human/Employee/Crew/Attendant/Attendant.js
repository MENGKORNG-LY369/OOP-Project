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
exports.Attendant = void 0;
var Connector_1 = require("../../../../Connector");
var Attendant = /** @class */ (function (_super) {
    __extends(Attendant, _super);
    function Attendant(firstName, lastName, email, age, gender, salary, passenger, role, flightInstance) {
        var _this = _super.call(this, firstName, lastName, email, age, gender, flightInstance) || this;
        _this.passenger = passenger;
        _this.role = role;
        _this.flightInstance = flightInstance;
        return _this;
    }
    Attendant.prototype.getSalary = function () {
        return 400;
    };
    return Attendant;
}(Connector_1.Crew));
exports.Attendant = Attendant;
