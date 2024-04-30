export class Address{
    constructor
    (
    public street: string,
    public city: string,
    public zipcode: string,
    public country: string,
    ){
        this.street = street
        this.city =city
        this.zipcode =zipcode
        this.country = country

    }
}