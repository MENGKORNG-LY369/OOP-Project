"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightStatus = void 0;
var FlightStatus;
(function (FlightStatus) {
    FlightStatus["Active"] = "Active";
    FlightStatus["Scheduled"] = "Scheduled";
    FlightStatus["Delayed"] = "Delayed";
    FlightStatus["Departed"] = "Departed";
    FlightStatus["Landed"] = "Landed";
    FlightStatus["InAir"] = "InAir";
    FlightStatus["Arrived"] = "Arrived";
    FlightStatus["Canced"] = "Cancelled";
    FlightStatus["Deverted"] = "Deverted";
    FlightStatus["Unknown"] = "Unknown";
})(FlightStatus || (exports.FlightStatus = FlightStatus = {}));
