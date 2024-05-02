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
exports.Airport = void 0;
var Address_1 = require("../Address");
var Airport = /** @class */ (function (_super) {
    __extends(Airport, _super);
    function Airport(street, city, zipcode, country, code, gate) {
        if (gate === void 0) { gate = []; }
        var _this = _super.call(this, street, city, zipcode, country) || this;
        _this.code = code;
        _this.gate = gate;
        _this.code = code;
        _this.gate = gate;
        return _this;
    }
    return Airport;
}(Address_1.Address));
exports.Airport = Airport;
