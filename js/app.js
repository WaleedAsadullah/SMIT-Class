// // console.log("hello world");


// // let sym1 = Symbol("JavaScript is fun!");
// // let sym2 = Symbol("JavaScript is fun!");
// // console.log("Value =>",sym1)
// // console.log("These two Symbols are the same:", sym1 === sym2);

// // let a = "Hello";
// // a = prompt("world");
// // console.log(a);


// // let firstNum = 5;
// // let secondNum = 10;
// // firstNum++;

// // secondNum--;
// // let total = ++firstNum + secondNum;
// // console.log(total);
// // let total2 = 500 + 100 / 5 + total--;
// // console.log(total2);

// // let miles = prompt('Enter miles');
// // let kilometer = miles/1.60934;

// // alert(`The distance of ${parseFloat(kilometer).toFixed(2)} kms is equal to ${miles} miles`);
// // [1,2,3,4]
// // {
// //     'a' : 1,
// //     'b' : 2 
// // }

// // let cm = prompt('Enter cm');
// // let kg =  prompt('Enter kg')
// // alert(kg/(cm)**2)
// // alert(`The distance of ${parseFloat(kilometer).toFixed(2)} kms is equal to ${miles} miles`);

// // let rain = true;
// // if(rain){
// //  console.log("** Taking my umbrella when I need to go outside **")
// // } else {
// //  console.log("** I can leave my umbrella at home **");
// // }
// // let myVariable = true 
// // if(myVariable){
// //     console.log("working")
// // } 

// // if(!myVariable){
// //     console.log("not working")
// // } 



// // let result = Number(prompt("enter your numbers"))
// // if (result >90) {
// // console.log ( "you are a toper") }
// // else if ( result >80 ) {
// //     console.log(" you are a Aplus")
// // }
// // else if ( result >=70){
// //     console.log ("your great is A")
// // }
// // else if ( result >=60){
// //     console.log ("your great is b")
// // }
// // else if ( result >=50){
// //     console.log ("your great is c")
// // }
// // else if ( result >=33){
// //     console.log ("your are just pass")
// // }
// // else {
    
// //     console.log("you are fail")
// // }



// // let result = Number(prompt("enter your numbers"))
// // if (result <=33 && result >=0 ) {
// // console.log ( "you are a fail") }
// // else if ( result <=50 && result >=33 ) {
// //     console.log(" you are a pass")
// // }
// // else if ( result <=60 && result >=50){
// //     console.log ("your great is b")
// // }
// // else if ( result <=50 && result >=40){
// //     console.log ("your great is c")
// // }
// // else if ( result >=50){
// //     console.log ("your great is c")
// // }
// // else if ( result >=33){
// //     console.log ("your are just pass")
// // }
// // else {
    
// //     console.log("you are fail")
// // }

// const age = Number(prompt("Age"))
// console.log( age == 16 ? "Yes 16" : age > 16 ? "Greater Than 16" : "Its smaller")

// // condtion ? true_code : false_code
// // if(condtion){
// //     true_code
// // }else{
// //     false_code
// // }

// Step 1: Generate a random number between 0 and 5
const randomNumber = Math.floor(Math.random() * 6);

// Step 2: Get user input
const userInput = prompt("Enter a question: ");

// Step 3: Create responses using a switch statement
let response;
switch (randomNumber,userInput) {
  case randomNumber == userInput:
    response = "Good";
    break;
//   case 1:
//     response = "I'm not sure how to answer that.";
//     break;
//   case 2:
//     response = "Great question! Let me think...";
//     break;
//   case 3:
//     response = "I think you might find the answer by researching online.";
//     break;
//   case 4:
//     response = "I have a feeling that's a common concern.";
//     break;
//   case 5:
//     response = "I'd recommend discussing this with an expert.";
//     break;
  default:
    response = "Better Luck ";
}

// Step 4: Create the end response
const endResponse = `You asked: "${userInput}"\nI respond: ${response}`;

// Step 5: Output the user's question and the response
console.log(endResponse);

let studnt = [
  ['name1' , 34],
  ['name2' , 45],
]
