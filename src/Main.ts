
import { Employee } from "./Person/Employee";

let name = "thona";
let lastName = "nogn";
let email = "thona@gmail.com";
let age = 12;
let gender = "male";
// let salary=500

let employee = new Employee(name, lastName, email, age, gender,500);
console.log(employee);
console.log(employee.getSalary());
 
