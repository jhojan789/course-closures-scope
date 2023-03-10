//variables
var a; //declaration
var b = 'b'; //declaration and assignation.
b='bb'; //re-assignation.

//Global scope
var fruit = 'Apple'; //This variable can be accessed from any function
console.log(bestFruit);//'Apple'
function bestFruit(){
    bestFruit = 'Apple';//If the variable is not declared, then will be global by default.ZZ
    console.log(fruit);
}
console.log(fruit); //'Apple'