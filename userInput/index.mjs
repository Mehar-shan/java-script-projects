import PromptSync from "prompt-sync";
const prompt = PromptSync();
var name = prompt("enter your name: ");
console.log ("your name is "+ name);
const number = prompt('enter your number: ')
console.log ('your number is: ' + Number(number)+4);