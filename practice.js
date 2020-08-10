// ●	23.2 LET, CONST, ARRAY DECLARED WITH CONST, OBJECT DECLARED WITH CONST


const hubby = "Piya";
// hubby = "Shela";
console.log(hubby);



let numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
// numbers = ["Sunny", "Shakib", "Kamal"];
const nayok = {name: "Sakib Khan", phone: 4584};//const not changeable.
console.log(nayok);
 




let patientName = "Rohim Chacha";
patientName = "Fatema Khala";
console.log(patientName);


let sum = 0;
for (var i = 0; i < 10; i++) {//let is a changeable and lik proved. 
     sum = sum + 1;  
}
console.log(i);
