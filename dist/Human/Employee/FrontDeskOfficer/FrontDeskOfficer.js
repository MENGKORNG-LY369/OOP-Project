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
exports.FrontDeskOfficer = void 0;
var Connector_1 = require("../../../Connector");
var FrontDeskOfficer = /** @class */ (function (_super) {
    __extends(FrontDeskOfficer, _super);
    function FrontDeskOfficer(firstName, lastName, email, age, gender, trip) {
        if (trip === void 0) { trip = []; }
        var _this = _super.call(this, firstName, lastName, email, age, gender) || this;
        _this.trip = trip;
        _this.trip = trip;
        return _this;
    }
    FrontDeskOfficer.prototype.getSalary = function () {
        return 800;
    };
    return FrontDeskOfficer;
}(Connector_1.Employee));
exports.FrontDeskOfficer = FrontDeskOfficer;
