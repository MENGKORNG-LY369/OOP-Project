import { Gate } from "./Gate/Gate";

export class Airport{
    constructor
    (
        private code:string,
        private gate:Gate
    ){
        this.code = code;
        this.gate = gate;

    }
    
    method(type): type{

    }

}