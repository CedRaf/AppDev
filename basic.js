const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function introduction(name) {
    console.log(`Hello ${name}!`);
}

console.log("test");

rl.question("Enter your name: ", (inputtedName) => {
    introduction(inputtedName);
    rl.close(); 
})
