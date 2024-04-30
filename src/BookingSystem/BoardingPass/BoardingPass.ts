export class BoardingPass {
    constructor(
        private barCode: string
    ) {
        this.barCode = barCode;        
    }
    public generateBarcode(): string {
        return this.barCode;
    }
}