import { BoardingPass } from "../../../BookingSystem/BoardingPass/BoardingPass"
import { GateStatus } from "../../../Constant/Gate"

export class Gate {
    constructor
        (
            private gateNumber: string,
            private status: GateStatus,
            private boarding: BoardingPass[] = []

        ) {

        this.gateNumber = gateNumber
        this.status = status
    }
    public getBoardingPass(): BoardingPass[]{
        return this.boarding
    }
}