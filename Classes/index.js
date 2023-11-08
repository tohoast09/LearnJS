
//constructor function
function Course(name,price){
    this.name = name;
    this.price = price;
}

const phpCourse = new Course('PHP Course', 1000);
const jsCourse = new Course('JS Course', 2000);

console.log(phpCourse);
console.log(jsCourse);

class Courses{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    
    getName(){
        return this.name;
    }
}