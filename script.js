// function sayHello(){
//     let you=prompt("what is your name?");
//     console.log("Hello",you+"!");
    
// }
// sayHello()



// let varContainingFunction=function(){
//     let varInFunction="I am in a function";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction()



// function tester(para1,para2){
//     return para1+" "+para2;

// }
// const arg1="argument 1";
// const arg2="argument 2";
// console.log(tester)
// console.log(tester(arg1,arg2));



// function addTwoNumbers(x,y){
//     x=prompt("Enter the value of X");
    
//     y=prompt("Enter the value of Y");
   

//     console.log(parseInt(x)+parseInt(y));
// }
// addTwoNumbers()


// let arr=[];
// arr.push("arguments")
// console.log(arr)



// function addTwoNumbers(x=2,y=3){  //last arguments are always the traily arguments assume always y
//     console.log(x+y);
// }
// addTwoNumbers(10);
// addTwoNumbers(6,6);
// addTwoNumbers();
// addTwoNumbers(1,2,3,4);  //ignore last two only take x=1,y=2


//ARROW FUNCTION:-
//SPECIAL FUNCTIONS-
//(para1,para2)=>body of the function
// function doingStuff(x){
//     console.log(x);
// }
// const doingStuff=(x)=>{  //arrow function
//     console.log(x);
// };
// doingStuff("All the Best!");


//addition of two numbers
// let addTwoNumbers=(x,y)=>{
//     console.log(x+y);
// }
// addTwoNumbers(10,3);


// const arr=["Squirrel","alpca","buddy"];
// arr.forEach(e=>console.log(e));


//SPREAD OPERATOR
// let spread=["so","much"];
// let message=["javascript","is",...spread,"easy"];
// let numpy=["javascript","is",spread,"easy"];
// console.log(message)
// console.log(numpy)


// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);  


// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);

// }
// let arr1=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr1,...arr2); //addfournumbers(5,9,6,7)


//REST PARAMETER
//Extra parameter also used in this using ...
// function someFunction(para1,para2){
//     function someFunction(para1,...para2){  //para 2 made an array for this so that it is called rest operator
//     console.log(para1,para2);

// }
// someFunction("hi","there","how are you");


//RETURNING FUNCTION VALUES
// function addTwoNumbers(x, y) {
//     return x + y;
// }
// let resultArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultArr.push(result);
// }

// console.log(resultArr);

// addTwoNumbers(x, y);

//Returning with arrow function
// let addTwoNumbers=(x,y)=>x+y;  //return no need for single statement
// let result=addTwoNumbers(12,13); 
// console.log(result);

// let addFourNumbers=(x,y)=>{
//     console.log("Adding...");
//     return x+y;
// }

//Variable Scope in functions
// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("Hi!");
// console.log("Not Available here:");


//LET TYPE VARIABLE 
// function testAvailability(){
//     let y="Local Variable";
//     console.log("Available here",y);
// }
// testAvailability();
// //console.log("Not Available here:",y); //find error y is not defined
// console.log("Not Available here:");


// function testAvailability(){
//     let y="I'll return";
//     console.log("Available here:",y);
//     return y;

// }


//VAR VARIABLE
// function doingStuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);

// }//Block scope is better
// doingStuff();



// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x="local"; //let variable hai to x is not initialized hoga so that we say this like this.Var undefined
//     }
// }
// doingStuff();


// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x="local"; //let variable hai to x is before initialized hoga so that we say this like this.Var undefined
//     }
// }
// doingStuff();


//CONST VARIABLE
// function doingStuff(){
//     if(true){
//         const x="local"; //x is not defined in this also

//     }
//     console.log(x);
// }
// doingStuff();


//Global Variable
// let globalVar="Accessible Everywhere!";
// console.log("outside:",globalVar);
// function creatingNewScope(x){
//     console.log("Accessible to global var inside the function",globalVar);
// }
// creatingNewScope("some parameter");
// console.log("still available:",globalVar); //global variable can hide


// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
//IIFE(Immediately invoked function expression)
// (function(){
//     console.log("IIFE!");
// })();
// (()=>{
//     console.log("RUN RIGHT AWAY");
// })();
//Recursive Functions
// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);
// function getRecursive(nr){
//     // console.log(nr);
//     if(nr>0){
//         getRecursive(--nr);
//     }
//     console.log(nr);
// }
// getRecursive(3);
        //  function logRecursive(nr){
        //     console.log("Started function:",nr);
        //     if (nr>0){
        //         logRecursive(nr-1);
        //     }else{
        //         console.log("done with recursion");
        //     }
        //     console.log ("Ended function",nr);
        //  }
        //  logRecursive(3);
        //the perfomance of recursion is slightly worse than the perfomance of regular iteration using a loop.So,if
        //this causes a bottleneck situation that would really slow down your appreciation;
        //NESTED FUNCTIONS
        // function doOuterFunctionStuff(nr){
        //     console.log("Outer Function");
        //     doInnerFunctionStuff(nr);
        //     function doInnerFunctionStuff(x){
        //         // console.log(x+7);
        //         let z =10;
        //         // 
        //     }
        //     console.log("Not accesible",z);
        // }
        // doOuterFunctionStuff(2);
    // git init git add . git commit-n 

// console.log("I can acess outer variables:",nr);
//ANONYMOUS FUNCTION
// function doingStuffAnonymously(){
//     console.log("Not so secret though.");
// };
//FUNCTION CALLBACKS
// let functionVariable=function(){
//     console.log("Not so secret though");
// };
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside Doflexible function");
// }
// doFlexibleStuff(functionVariable);
// //In javascript, there are many built-in function ,as you may know by now.One of them is setTimeout()functions.
// let youGotThis =function(){
//     console.log("You're doing really well,keep coding!");
// };
// setInterval(youGotThis,4000);
// let val =10;
// function tester(val){
//     val+=10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);//output:10
// let testFunction=function(){
//     console.log("Hello");
// }();
// (function(){
//     console.log("Welcome");
// })();
// (function(){
//     let firstName="Laurence";
//     return firstName;
// })();
// let result=(function(){
//     let firstName="Laurence";
//     return firstName;
// })();
// console.log(result);
// (function(firstName){
//     console.log("My name is"+firstName);
// })("Laurence");
// let test2=(num)=>num+5;
// console.log(test2(14));
var addFive1=function addFive1(num){
    return num+2;
};
let addFive2=(num)=>num+2;
console.log(addFive1(14));