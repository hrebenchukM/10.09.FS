var fs = require('fs');
var utils = require('util');



class Person 
{
    constructor(name,age)
    {
    this.name=name;
    this.age=age;
    }

   ToString()
   {
    return `Name: ${this.name}, Age: ${this.age}`;
   }
}


class Teacher extends Person 
{
    constructor(name, age, subject) 
    {
        super(name, age);
        this.subject = subject;
    }

    ToString() 
    {
        return `Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
    }
}



class Student extends Person
{
    constructor(name, age, group) 
    {
        super(name, age);
        this.group = group;
    }

    ToString() 
    {
        return `Name: ${this.name}, Age: ${this.age}, Group: ${this.group}`;
    }
}

class Driver extends Person
{
    constructor(name, age, transportType) 
    {
        super(name, age);
        this.transportType = transportType;
    }

    ToString() 
    {
        return `Name: ${this.name}, Age: ${this.age}, Type of transport: ${this.transportType}`;
    }
}

var teacher = new Teacher('Kristina', 28, 'Programming');
var student = new Student('Mary', 20, 'P-222');
var driver = new Driver('Ivanov', 40, 'Car');

console.log('File writing...1 object');
fs.writeFile('text.txt', utils.format('%j', teacher), function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('File was wrote!');
});


console.log('File writing... all objects');
fs.writeFile('text2.txt', utils.format('%j', teacher), function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('File was wrote!');
});