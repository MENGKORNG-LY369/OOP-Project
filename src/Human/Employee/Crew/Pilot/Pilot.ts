import { PilotRole } from "../../../../Constant/Role";
import { Crew } from "../Crew";

class Pilot extends Crew {
    constructor(passenger:Customer[],private role: PilotRole) {
      super(passenger);
      this.role = role;
    }
  }