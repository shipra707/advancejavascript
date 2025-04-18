//clsses are a blueprint or template for object creation
//classes and objects.Objects are a collection of properties and method
// let dog={
//     dogName:"JavaScript",
//     weight:2.4,
//     color:"brown",
//     breed:"chihuahua"
// };
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);
//the this keyword refers to the object it belongs to,so it is the first property of instance of class name.
// class Dog {
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
    
//         this.weight=weight;
//         this.color=color;
//        this.breed=breed;
//      }}
//      let dog=new Dog("Javascript",2.4,"brown","chihuahua");
//      console.log(dog.dogName);
//      console.log(dog.weight);
//      console.log(dog.color);
//      console.log(dog.breed);
//There can only be a one constructor in class
//it is convention to start class name with captial letter
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Maliaka","Arora");
// console.log("hi",p.firstname);
// function in a class are methods.methods:when defining these methods,we don't use the function keyword
// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//         greet(){
//             console.log("Hi there!I'm",this.firstname);
//         }
//         compliment(name,object){
//             return "That's a wonderful"+object+","+name;
//         }
//     }
//     let p=new Person("mailaka","Arora");
//     p.greet();
//     let compliment=p.compliment("Harry","hat");
//     console.log(compliment);
// //method is a user defined .
// //properties:they are sometimes called the field,hold the data of the class.
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     // greet(){
//     //     console.log("Hi there!I'm",this.firstname);
//     // }
//     // compliment(name,object){
//     //     return "That's a wonderful"+object+","+name;
//     // }
// }
// let q=new Person("mailaka","Arora");
// // p.greet();
// // let compliment=p.compliment("Harry","hat");
// console.log("HI",q.firstname);
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;

//     }
// }
// let p=new Person("Harry","hat");
// console.log(p.firstname);
//class Person{
    // #firstname;
    // #lastname;
    // constructor(firstname,lastname){
    //     if (firstname.startsWith("M")){
    //         this.firstname=firstname;
    //     }
    //     else{
    //         this.#firstname="M"+firstname;
    //     }
    //     this.#lastname=lastname;

    // }
// }
// let q=new Person("Harry","hat");
// console.log(q.firstname);
//encapsulation:it refers to the bundling of data (properties) and the methods that operate on that data into a single unit or class, and restricting access to some of the object's components.
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//            this.#firstname=firstname;
       
//         this.#lastname=lastname;

//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
// this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
// this.#lastname=lastname;
//     }
// }
// let q=new Person("Harry","hat");
//  console.log(q.firstname);
 //inheritance:Inheritance enables code reuse and logical organization of classes.
// class Vechile{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;

//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }
// class Motorcycle extends Vechile{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;
    

//     }
    
// }
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    start() {
        console.log("Starting vehicle...");
    }
    stop() {
        console.log("Stopping vehicle...");
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year, color);
        this.type = "Motorcycle";
    }
    start() {
        console.log("Starting motorcycle...");
    }
    stop() {
        console.log("Stopping motorcycle...");
    }
}

let motorcycle1 = new Motorcycle("Harley Davidson", "Street 750", 2020, "Black");
console.log(motorcycle1.color);