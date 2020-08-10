// 	23.5 ARROW FUNCTION, MULTIPLE PARAMETER, FUNCTION BODY

// Example_01(Simple We Write a function this way).

function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(10);
console.log(result);


// Example_02(Second Way we write a function using a variable)
//Another way to declare a function. Hear function name is optional because the function store in another variable.

const doubleIt = function myFunction(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);


// Example_03(Arrow Function one parameter)
// After es6 we can write:

//Syntax hello = () => "Hello World!";

const doubleIt = (num) => num * 2;
const result = doubleIt(50);
console.log(result);


// Example_04(Arrow Function more than one parameter)

const add = (x,y) => x + y;
const result = add(50, 70);
console.log(result);

// Example_05(Arrow Function with NO parameter)
//No parameter arrow function

const giveMe5 = () => 5;

const result = giveMe5();
console.log(result);



// Example_06(Write more statement after arrow)
//When you write More statements after the arrow(=>) then use {}.

const dMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = dMath(7, 5);
console.log(result);



