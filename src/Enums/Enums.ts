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

// Enum for Payment
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
enum PaymentMethod {
    Mastercard = "Master Card",
    VISA = "VISA Card",
    JCB = "JCB Card",
    AEC = "American Express card",
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

// Enum for Booking
enum BookingStatus {
    Requested = "Requested",
    Pending = "Pending",
    Confirmed = "Confirmed",
    CheckIn = "Check-in",
    Cancelled = "Cancelled",
    Abandoned = "Abandoned"
}

// Enum for Meal
enum Meal {
    Baby = "baby",
    Bland = "bland",
    Child = "child",
    Toddler = "toddler",
    Diabetic = "diabetic",
    GlutenFree = "gluten-free",
    NoSodiumOrNoSaltAdded = "No Sodium/Salt Added",
    Halal = "Halal",
    Hindu = "Hindu"
}

export { FlightStatus, PaymentStatus, SeatClass, SeatType, PaymentMethod, BookingStatus, Meal }