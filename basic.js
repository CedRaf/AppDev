const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Testing!");

function introduction(age,name) {
    console.log(`Hello ${name}!`);
    console.log(`You are ${age} years old!`);
}

rl.question("Enter your name: ", (inputtedName) => {
    introduction(inputtedName);
    rl.close(); 
})

rl.question("Enter your name: ", (inputtedName) => {
    rl.question("Enter your age: ", (inputtedAge) => {       
        introduction(inputtedName, inputtedAge);
        rl.close(); 
    });
});