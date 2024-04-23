// Enum for Flight status
enum FlightStatus {
    Active = "Active",
    Scheduled = "Scheduled",
    Delayed = "Delayed",
    Departed = "Departed",
    Landed = "Landed",
    InAir = "InAir",
    Arrived = "Arrived",
    Cancelled = "Cancelled",
    Deverted = "Deverted",
    Unknown = "Unknown",
}

// Enum for Payment status
enum PaymentStatus {
    Unpaid = "Unpaid",
    Pending = "Pending",
    Completed = "Completed",
    Failed = "Failed",
    Declined = "Declined",
    Cancelled = "Cancelled",
    Abandoned = "Abandoned",
    Settling = "Settling",
    Settled = "Settled",
    Refunded = "Refunded",
}

// Enum for seat
enum SeatClass {
    Economy = "Economy",
    EconomyPlus = "EconomyPlus",
    PreferredEconomy = "Preferred",
    Business = "Business",
    FirstClass = "FirstClass"
}
enum SeatType {
    Regular = "Regular",
    Accessible = "Accessible",
    EmergencyExit = "EmergencyExit",
    ExtraLegRoom = "ExtraLegRoom"
}

export {FlightStatus, PaymentStatus, SeatClass, SeatType }