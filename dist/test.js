// Enum for Flight status
var FlightStatus;
(function (FlightStatus) {
    FlightStatus["Active"] = "Active";
    FlightStatus["Scheduled"] = "Scheduled";
    FlightStatus["Delayed"] = "Delayed";
    FlightStatus["Departed"] = "Departed";
    FlightStatus["Landed"] = "Landed";
    FlightStatus["InAir"] = "InAir";
    FlightStatus["Arrived"] = "Arrived";
    FlightStatus["Cancelled"] = "Cancelled";
    FlightStatus["Deverted"] = "Deverted";
    FlightStatus["Unknown"] = "Unknown";
})(FlightStatus || (FlightStatus = {}));
// Enum for Payment status
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Unpaid"] = 0] = "Unpaid";
    PaymentStatus[PaymentStatus["Pending"] = 1] = "Pending";
    PaymentStatus[PaymentStatus["Completed"] = 2] = "Completed";
    PaymentStatus[PaymentStatus["Failed"] = 3] = "Failed";
    PaymentStatus[PaymentStatus["Declined"] = 4] = "Declined";
    PaymentStatus[PaymentStatus["Cancelled"] = 5] = "Cancelled";
    PaymentStatus[PaymentStatus["Abandoned"] = 6] = "Abandoned";
    PaymentStatus[PaymentStatus["Settling"] = 7] = "Settling";
    PaymentStatus[PaymentStatus["Settled"] = 8] = "Settled";
    PaymentStatus[PaymentStatus["Refunded"] = 9] = "Refunded";
})(PaymentStatus || (PaymentStatus = {}));
// Enum for seat
var SeatClass;
(function (SeatClass) {
    SeatClass[SeatClass["Economy"] = 0] = "Economy";
    SeatClass[SeatClass["EconomyPlus"] = 1] = "EconomyPlus";
    SeatClass[SeatClass["PreferredEconomy"] = 2] = "PreferredEconomy";
    SeatClass[SeatClass["Business"] = 3] = "Business";
    SeatClass[SeatClass["FirstClass"] = 4] = "FirstClass";
})(SeatClass || (SeatClass = {}));
var SeatType;
(function (SeatType) {
    SeatType[SeatType["Regular"] = 0] = "Regular";
    SeatType[SeatType["Accessible"] = 1] = "Accessible";
    SeatType[SeatType["EmergencyExit"] = 2] = "EmergencyExit";
    SeatType[SeatType["ExtraLegRoom"] = 3] = "ExtraLegRoom";
})(SeatType || (SeatType = {}));
console.log(FlightStatus.Active);
