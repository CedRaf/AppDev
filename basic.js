const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Testing!");

function introduction(age,name) {
    console.log(`Hello ${name}!`);
    
}
function secondaryStatement(age) {
    console.log(`You are ${age} years old!`);
}

rl.question("Enter your name:", (inputtedName) => {
    introduction(inputtedName);  
    rl.question("Enter your age:", (inputtedAge) => {
        secondaryStatement(inputtedAge); 
        rl.close();
    });
});