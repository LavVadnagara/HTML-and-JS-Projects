// Run this code in the source section in the inspect and make a snippet of this code
var names = [];
var input;

while (input !== "exit") {
     input = prompt("Enter a name or type \"exit\" to finish:");
     names.push(input);
}
var randomIndex = Math.floor(Math.random() * names.length);
alert(names[randomIndex] + " is chosen.");