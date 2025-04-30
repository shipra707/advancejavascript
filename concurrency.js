//callbacks:function as an argument
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("HI!");
// }
// doSomething(sayHi);
// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("Excellent!");
//             break;
//         case grade == "B":
//             console.log("Good!");
//             break;
//         case grade == "C":
//             console.log("Average!");
//             break;
//         case grade == "D":
//             console.log("Poor!");
//             break;
//         default:
//             console.log("Fail!");
//     }
// }
// function getGrade(score, callback){
//     let grade;
//     switch(true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
//Promises:this function needs two parameters and both the parameters are callbacks.
//when resolve()is called,the promise is successful and reject()is called when the promise fails
// let promise=new promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then((value) => {
//     console.log("Success! x is " + value);
// }).catch((error) => {
//     console.log("Error:"+error);
// });
// async and wait
