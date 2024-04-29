export enum PaymentMethod {
    Mastercard = "Mastercard",
    VISA = "VISA",
    JCB = "JCB",
    AEC = "AEC",
}

export enum PaymentStatus {
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