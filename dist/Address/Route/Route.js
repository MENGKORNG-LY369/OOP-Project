"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
var Route = /** @class */ (function () {
    function Route(departure, arrival, distance, duration, flgith) {
        if (flgith === void 0) { flgith = []; }
        this.departure = departure;
        this.arrival = arrival;
        this.distance = distance;
        this.duration = duration;
        this.flgith = flgith;
        this.departure = departure;
        this.arrival = arrival;
        this.distance = distance;
        this.duration = duration;
        this.flgith = flgith;
    }
    Route.prototype.getFlight = function () {
        return this.flgith;
    };
    return Route;
}());
exports.Route = Route;
