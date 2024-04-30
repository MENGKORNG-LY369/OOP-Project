import { Gate } from "./Gate/Gate";

export class Airport{
    constructor
    (
        private code:string,
<<<<<<< HEAD
        private gate:Gate
=======
        private gate:Gate[]=[]

>>>>>>> AIRLINE
    ){
        this.code = code;
        this.gate = gate;

    }
    
    method(type): type{

    }

}