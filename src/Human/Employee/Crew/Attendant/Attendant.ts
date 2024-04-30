import { PilotRole } from "../../../../Constant/Role";
import { Customer } from "../../../Customer/Customer";
import { Crew } from "../Crew";

class Attendant extends Crew {
    constructor(passenger:Customer[],private role: PilotRole) {
      super(passenger);
      this.role = role;
    }
  }