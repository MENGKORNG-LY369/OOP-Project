"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuisine = void 0;
var Cuisine = /** @class */ (function () {
    function Cuisine(meal, category, quantity) {
        this.meal = meal;
        this.category = category;
        this.quantity = quantity;
        this.category = category;
        this.quantity = quantity;
    }
    Cuisine.prototype.getMeal = function () { return this.meal; };
    return Cuisine;
}());
exports.Cuisine = Cuisine;
