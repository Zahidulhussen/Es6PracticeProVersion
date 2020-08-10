// 	23.7 CLASS, CONSTRUCTOR, CREATE OBJECT FROM CLASS
// Example_01:(Class and Object)
//Class Deceleration

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa school";
    }
}
const student1 = new Student(224, "Sahriar");
const student2 = new Student(210, "Faisal");
console.log(student1, student2);


// Example_02 ()

//Class Deceleration

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa school";
    }
}
const student1 = new Student(224, "Sahriar");
const student2 = new Student(210, "Faisal");
const student3 = new Student(225, "Lipon");
//access separate property.
console.log(student1.name, student2.name);
//access default all property
console.log(student3);


