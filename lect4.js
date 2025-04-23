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
    // class Vehicle {
    //     constructor(make, model, year, color) {
    //         this.make = make;
    //         this.model = model;
    //         this.year = year;
    //         this.color = color;
    //     }
    //     start() {
    //         console.log("Starting vehicle...");
    //     }
    //     stop() {
    //         console.log("Stopping vehicle...");
    //     }
    // }
    // class Motorcycle extends Vehicle {
    //     constructor(make, model, year, color) {
    //         super(make, model, year, color);
    //         this.type = "Motorcycle";
    //     }
    //     start() {
    //         console.log("Starting motorcycle...");
    //     }
    //     stop() {
    //         console.log("Stopping motorcycle...");
    //     }
    // }
    
    // let motorcycle1 = new Motorcycle("Harley Davidson", "Street 750", 2020, "Black");
    // console.log(motorcycle1.color);
    // class Person{
    //         #firstname;
    //         #lastname;
    //         constructor(firstname,lastname){
    //                this.#firstname=firstname;
               
    //             this.#lastname=lastname;
        
    //         }
    //         get firstname(){
    //             return this.#firstname;
    //         }
    //         set firstname(firstname){
    //     this.#firstname=firstname;
    //         }
    //         get lastname(){
    //             return this.#lastname;
    //         }
    //         set lastname(lastname){
    //     this.#lastname=lastname;
    //         }
    //     }
    //     let q=new Person("Harry","hat");
    //      console.log(q.firstname);
    // class Person{
    //     constructor(firstName, lastName){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    //     greet() {
    //         console.log("Hello " + this.firstName + " " + this.lastName);
    //     }
    // }
    // Person.prototype.introduce = function() {
    //     console.log("I am " + this.firstName + " " + this.lastName);
    // }
    // Person.prototype.favoriteColor="green";
    // let p =new Person("maria","sega");
    // console.log("favoritecolor");
    // class Person{
    //         constructor(firstName, lastName){
    //             this.firstName = firstName;
    //             this.lastName = lastName;
    //         }
    //         greet(){
    //             console.log("Hello " + this.firstName + " " + this.lastName);

    //         }
    //         Person.prototype.introduce=function(){
    //             console.log("Hi,I'm,"this.firstName);
    //         };
    //         Person.prototype.favoriteColor="Green";
    //         let p=new Person ("Maria","Saga");
    //         console.log(p.favoriteColor);
    //         p.introduce();
    //     }
    class Person {
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }
    greet(){
        console.log("Hello");
    }
    Person.prototype.introduce = function(){
        console.log(" Hi, I,m", this.firstname);
    };
    Person.prototype.favouriteColor = "Green";
    let p = new Person("Maria", "Saga");
    console.log(p.favouriteColor);
    p.introduce();