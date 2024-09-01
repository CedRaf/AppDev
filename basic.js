const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function introduction(name) {
    console.log(`Hello ${name}!`);
}

rl.question("Enter your name: ", (inputtedName) => {
    introduction(inputtedName);
    rl.close(); 
})

 