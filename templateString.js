// ●	23.4 TEMPLATE STRING, MULTIPLE LINE STRING

// Example_01:

const firstName = "Justin";
const lastName = "TimberLake";

//Before es6 we write.
const fullName = firstName + " " + lastName + " " +"is a good boy ";

//After es6 we can write.
//Using Template. `` create ES6
const fullName2 = `${firstName} ${lastName} is a good boy`;//ES6 // Using Create ``;
const fullName3 = `${firstName} ${10+20+30} is a good boy`;//ES6 // Using Create ``;

console.log(fullName);
console.log(fullName2);
console.log(fullName3);


// Example_02:

//Before es6 we write

const multiLine = "I love you\n"
    + "I miss you\n"
    + "I need You"
    console.log(multiLine);
    
//After es6 we can write

const multiLine2 = `I miss you
no. I don't need you
Baily road e dorkar nai`
    console.log(multiLine2);
