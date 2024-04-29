import { Customer } from "../../Customer/Customer";

export abstract class Crew {
    constructor(public passenger:Customer[]) {}
  
    getPassenger(): Customer[] {
      return []; // Placeholder implementation
    }
  }