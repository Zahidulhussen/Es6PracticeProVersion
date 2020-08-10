// ●	23.8 INHERITANCE, EXTENDS CLASS, SUPER, CLASS METHOD

// Example_01(Inheritance and Extends Class, Supper)
//Class Declaration.

class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
        this.motherName = "Alex";
    }
}
//class Declaration.
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);



// Example_02(Class Method)
//Class Declaration.
class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
        this.motherName = "Alex";
    }
}
//class Declaration.
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " +this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());
