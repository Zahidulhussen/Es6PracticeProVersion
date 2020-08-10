// 	23.6 SPREAD OPERATOR, CONCATENATE MULTIPLE ARRAYS, ARRAY MAX

// Example_01:(Simply concatenate multiple arrays not using ...three dots).
//Simple Array concat. Not Using threeDots.

const ages = [12, 14, 16, 19, 17];
const ages2 =[15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([10]).concat(ages3);
// const allAges = 
console.log(allAges);

// const firstNames = "Zahidul"
// const lastNames = " Hussen"
// const fullNames = firstNames.concat(lastNames);
console.log(fullNames)




// Example_02:(Multiple array concatenate using (...threeDots) spread operator )

//Multiple Array concatenate.Using spread operator (threeDots).
const ages = [12, 14, 16, 19, 17];
const ages2 =[15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([10]).concat(ages3);
// const allAges2 = [ages, ages2, 5, ages3];
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);
console.log(allAges2);

// Example_03: (Store all value separately variable then find maximum value using this way.)

//When store all value variable separate variable. then fiend max value using this way.

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);



// Example_04: (When store all value an array then find max value using this way)
// When store all value an array then find max value using this way.
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);


