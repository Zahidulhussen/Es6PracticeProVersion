// 23.3 FUNCTION DEFAULT PARAMETER FOR NOT PROVIDED VALUES

// code_01:First Way.

function add(num1, num2) {
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(15, 17);
console.log(total);


// Code_02: Second Way:

function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15);
console.log(total);

// Code_03: Third Way: ES6(Update)

//After ES6 we write.

function add(num1, num2 = 0) {
    return num1 + num2;
}
const total = add(15);
console.log(total);

