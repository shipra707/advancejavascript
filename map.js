// const fruits=new Map([
//     ["Apple",500],
//     ["Bananas",300],
//     ["Oranges",200]
// ]);
// // console.log(fruits);
//  fruits.get("Apple");
// const fruits=new Map();
// fruits.set("Apple",500);
// fruits.set("Bananas",300);
// fruits.set("Oranges",200);
// console.log(Map.has(Apple));
// const Apples={name:'Apples'};
// const Bananas={name:'Bananas'};
// const Oranges={name:'Oranges'};
// const fruits=new Map();
// fruits.set(Apples,500);
// fruits.set(Bananas,600);
// fruits.get(Apples);
// // const apples = {name: 'apples'}
// const bananas = {name: 'bananas'}
// const oranges = {name: 'oranges'}
// const fruits = new Map();
// fruits.set(apples, 500);
// fruits.set(bananas, 200);

// const fruits = [
//     {name: 'apples', quantity: 500},
//     {name: 'bananas', quantity: 200},
//     {name: 'oranges', quantity: 700},
//     {name: 'grapes', quantity: 1000}
// ];

// function myFunction({quantity}) {
//     return quantity > 200 ? 'Ok' : 'Not Ok';
// }

// const result = Map.groupBy(fruits, myFunction);
// console.log(result);
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let {}
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// let {firstName, lastName,country="US"} = person;

// console.log(firstName); // John
// console.log(lastName); // Doe
//destructing is not destructive
//Object Propery Alias
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// let {lastName:name} = person;

// // console.log(firstName); // John
// console.log(lastName); // Doe

//String Destructuring 
// let name="GurkulTheSchools";
// let [a1,a2,a3,a4,a5]=name;
// console.log(name);
// const fruits=["Bananas","Apples","Oranges","Mangoes"];
// // let [fruit1,,,fruit2]=fruits;
// let{[0]:fruit1,[1]:fruit2,[2]:fruit3}=fruits;
// console.log(fruit1);
// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(numbers);
// const fruits=new Map([
//        ["Apple",500],
//        ["Bananas",300],
//        ["Oranges",200]
//      ]);
//      let text="";
//      for(const[key,value]of fruits){
//         text+= key+ "is"+ value;
//      };
//      console.log(text);
// let firstName="John";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];
// //javascript exponential operator
// let x=5;
// let z=Math.pow(x,2);
// letz=x**2;
// x**=2;
// console.log(x);
// //javascript array includes
// const fruits=["Bananas","Apples","Oranges","Mangoes"];
// fruits.includes("Mangoes");
// console.log()
//includes method is case sensitive
//TRAILING COMMA:the trailing commas hav been legal in array literals.
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray.length);
//  const person = {
//          firstName: "John",
//     //    lastName: "Dovis",
//          age: 30,
//     };
//     console.log(person);
// function createRectangle(
//     w,
//     h,
//     d,
// ){/*...*/}




