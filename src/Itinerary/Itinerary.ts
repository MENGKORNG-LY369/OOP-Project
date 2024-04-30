import { Booking } from "../BookingSystem/Booking";
import { FrontDeskOfficer } from "../Human/Employee/FrontDeskOfficer/FrontDeskOfficer";

export class Itinerary{
    constructor(private booking:Booking[],private deskOfficer:FrontDeskOfficer){
        this.booking = booking;
        this.deskOfficer = deskOfficer;
    }
    creatTrip():boolean{
        return true;
    }
}