export abstract class Person{
    /**
     * @param parameters
     * *
       -firstName: string
       -lastName: string
       -email: string
       -age: number
       -gender: string
     */
    constructor(private firstName: string, private lastName: string,private email: string,private age: number,private gender: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.gender = gender;
    }
    
}