import { Manager } from "../Human/Employee/Manager/Manager"
import { Airplane } from "./Airplane/Airplane"

export class Airline {
    constructor
        (
            private codeShare: string,
            private manager: Manager,
            private airplane: Airplane[] = []
        ) 
        {
        this.codeShare = codeShare
        this.airplane = airplane
       

        }
    addAirplane(): void {
        this.airplane 

    }
    getCodeShare(): string {
        return this.codeShare

    }


}