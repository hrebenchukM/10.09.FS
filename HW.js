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

//Запись 1 обьекта в файл
console.log('File writing...1 object');
fs.writeFile('text.txt', utils.format('%j', teacher), function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('File was wrote!');
});




////Запись обьектов в файл
var data =
[
    teacher.ToString(), 
    student.ToString(), 
    driver.ToString()
]
console.log('File writing...all objects');
fs.writeFile('text2.txt', utils.format('%j', data), function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('File was wrote!');
});



//Дозапись
    var teacher2 = new Teacher('Oleg', 21, 'Programming');
    var student2 = new Student('Victor', 19, 'P-222');
    var driver2 = new Driver('Ivan', 33, 'Car');
    var data2 =
    [
        teacher2.ToString(), 
        student2.ToString(), 
        driver2.ToString()
    ]
   
console.log("Going to open file for dowrite!");
fs.open('text2.txt', 'a+', function (err, fd) {
    console.log('opening file!'); 
    if (err) {
        console.log(err);
    }
    else {

        fs.write(fd, utils.format('\n%j', data2), function (err) {

            console.log('dowriting to file!'); 
            if (err) {
                console.log(err);
            }
            
        });

        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log('file closed!');
        })
    }
}); 





//Чтение
if(fs.existsSync(__dirname))
    {
        fs.readFile('text2.txt', {encoding : 'utf-8'}, function(err, data){
            if(err){
                console.log(err);
                return;
            }
        console.log(data);


        });
    
    }
    else
    {
        console.log("No file");
    }





