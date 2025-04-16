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
//methods:when defining these methods,we don't use the function keyword
class Person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        greet(){
            console.log("Hi there!I'm",this.firstname);
        }
        compliment(name,object){
            return "That's a wonderful"+object+","+name;
        }
    }
    let p=new Person("mailaka","Arora");
    p.greet();
    let compliment=p.compliment("Harry","hat");
    console.log(compliment);