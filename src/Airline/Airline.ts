import { Airplane } from "./Airplane";

export class Airline {
    /**
     * 
     * @param  Parameters
     **
      - name: string
      - code: string
      - airplane:  Airplane[] = []
      - employee: Employee[] 
      
     */
    
    constructor(private name: string, private code:string,private airplane: Airplane[]=[],private employee: Employee[] = []) {
        this.name = name;
        this.code = code;
        this.airplane = airplane;
        this.employee = employee;

    }
}