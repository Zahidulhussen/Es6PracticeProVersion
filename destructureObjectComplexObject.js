// 	23.9 DESTRUCTURE, OBJECT, ARRAY, DESTRUCTURE COMPLEX OBJECT
// Example_01(No using a variable).

//Destructor creates an object property and access selected property.
const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochu khet', phone: '017621170600', friends:['Tom Hancks', 'Tom crise', 'Tom yearn']};
console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);

// Example_02(Access object property using a variable)

//Destructor creates an object property and access selected property using a variable.
const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochu khet', phone: '017621170600', friends:['Tom Hancks', 'Tom crise', 'Tom yearn']};
const gfName = person.gfName;
const phoneNum = person.phone;
console.log(gfName, phoneNum);
console.log(gfName, phoneNum);
console.log(gfName, phoneNum);

// Example_03()

//Destructor creates an object property and aces selected property.
const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochu khet', phone: '017621170600', friends:['Tom Hancks', 'Tom crise', 'Tom yearn']};
const { phone } = person; //{ name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochu khet', phone: '017621170600', friends:['Tom Hancks', 'Tom crise', 'Tom yearn']};
const gfName = person.gfName;
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);

// Example_04(Access Object Property using destructure)

//Destructor create an object property and aces selected property using De structure.
const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochu khet', phone: '017621170600', friends:['Tom Hancks', 'Tom crise', 'Tom yearn']};
const { phone, gfName, address, salary } = person; //{ 
console.log(gfName, phone, address, salary);

// Example_05(Access Array property using destructure)
//Create an array and access her property using Destructure.
const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriends, nextFriends] = friends;
console.log(chotoFriends, nextFriends);

// Example_06(When other all property access an array using destructure)

//Create an array and access her property using Destructure.
const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriends, nextFriends, ...restFriends] = friends;
console.log(chotoFriends, nextFriends, restFriends);

// Example_07()
const complexObject = {
    name : 'abc',
    info: {
        address : 'Kola Bagan',
        leader : 'Tiger Leader'
    }
}
const {leader} = complexObject.info;



