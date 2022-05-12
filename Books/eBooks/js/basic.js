1.const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

2.const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

3.const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
   setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}

4.var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

- If condition statement evaluate using eval so eval(function f() {}) which return function 
f() {} which is true so 
inside if statement code execute. typeof f return undefined because if statement code execute
at run time, so 
statement inside if condition evaluated at run time.

5.What is the drawback of creating true private in JavaScript?
  very memory inefficient because a new copy of the method would be created for each instance.
  var Employee = function (name, company, salary) {
  this.name = name || "";       //Public attribute default value is null
  this.company = company || ""; //Public attribute default value is null
  this.salary = salary || 5000; //Public attribute default value is null

  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };

  this.dispalyIncreasedSalary = function() {
    increaseSalary();
    console.log(this.salary);
  };
};

var emp1 = new Employee("John","Pluto",3000);
var emp2 = new Employee("Merry","Pluto",2000);
var emp3 = new Employee("Ren","Pluto",2500);

-Here each instance variable emp1, emp2, emp3 has own copy of increaseSalary private method.

6.Write a mul function which will properly when invoked as below syntax.
 console.log(mul(2)(3)(4)); // output : 24
 console.log(mul(4)(3)(4)); // output : 48

-Below is code followed by an explanation how it works:
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}

-Here mul function accept the first argument and return anonymous function which take the 
second parameter and return 
anonymous function which take the third parameter and return multiplication of arguments which
is being passed in successive

In Javascript function defined inside has access to outer function variable and function is the
first class object so it can be returned by function as well and passed as argument in another
 function.

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
Function can be stored as variable
Function can be pass as a parameter to another function
Function can be returned from function

7.What will be the output of the following code?
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
Above code will output 0 as output. delete operator is used to delete a property from an 
object. Here x is not an 
object it's local variable. delete operator doesn't affect local variable.

8.What will be the output of the following code?
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
Above code will output 1 as output. delete operator is used to delete property from object.
 Here x is not an object 
it's global variable of type number.

9.var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);
Above code will output undefined as output. delete operator is used to delete a property from 
an object. Here x is an object which has foo as a property and from self-invoking function we 
are deleting foo property of object x and after deletion we are trying to reference deleted 
property foo which result undefined.

11.var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);

Above code will output xyz as output. Here emp1 object got company as prototype property. delete operator 
doesn delete prototype property.

emp1 object doesn't have company as its own property. you can test it console.log(emp1.hasOwnProperty('company')); 
//output : false However, we can delete company property directly from Employee object using delete Employee.company 
or we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.

12.What is the instanceof operator in JavaScript? what would be the output of the following code?
function foo() {
  return foo;
}
new foo() instanceof foo;
instanceof operator checks the current object and return true if the object is of the specified type.

For Example:

var dog = new Animal();
dog instanceof Animal; // Output : true


13.Difference between Function, Method and Constructor calls in JavaScript.
functions : The simplest usages of function call:
-function helloWorld(name) {
  return "hello world, " + name;
}

helloWorld("JS Geeks"); 

-Methods in JavaScript are nothing more than object properties that reference to a function.

var obj = {
  helloWorld : function() {
    return "hello world, " + this.name;
  },
  name: 'John Carter'
}
obj.helloWorld(); 
Notice how helloWorld refer to this properties of obj. Here it's clear or you might have already understood that this gets bound to obj. But the interesting point that we can copy a reference to the same function helloWorld in another object and get a difference answer. Let see:

var obj2 = {
  helloWorld : obj.helloWorld,
  name: 'John Doe'
}
obj2.helloWorld();

-constructors :function Employee(name, age) {
  this.name = name;
  this.age = age;
}

var emp1 = new Employee('John Doe', 28);
emp1.name; // "John Doe"
emp1.age; // 28
Unlike function calls and method calls, a constructor call new Employee('John Doe', 28) create a brand new object and
 passes it as the value of this, and implicitly returns the new object as its result.

The primary role of the constructor function is to initialize the object.

14.function User(name) {
  this.name = name || "JsGeeks";
}

var person = new User("xyz")["location"] = "USA";
console.log(person);

15.What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function.
A self-invoking anonymous function also called self-executing anonymous function runs immediately or automatically
 when we define it and self-invoking anonymous function doesn't have any name at all. Self-Invoking anonymous 
 function syntax:

(function() {
  console.log("Self-Invoking function code logic ");
})();
Output: Self-Invoking function code logic
We must have to know the fact that JavaScript functions run immediately when we put () after their names.

function display() {
  console.log("Display me");
}
display();  

Output: "Display me"

16. What are the way by which we can create object in JavaScript ?
 If we want to create several similar objects. In below code sample, Employee which is called constructor function.
  This is similar to classes in object oriented languages.

  function Employee(fName, lName, age, salary){
  	this.firstName = fName;
  	this.lastName = lName;
  	this.age = age;
  	this.salary = salary;
  }

  // Creating multiple object which have similar property but diff value assigned to object property.
  var employee1 = new Employee('John', 'Moto', 24, '5000$');
  var employee1 = new Employee('Ryan', 'Jor', 26, '3000$');
  var employee1 = new Employee('Andre', 'Salt', 26, '4000$');

  17.Write a function called deepClone which takes an object and creates a object copy of it.
var newObject = deepClone(obj);
Solution:

function deepClone(object){
	var newObject = {};
	for(var key in object){
		if(typeof object[key] === 'object'){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}
Explanation: We have been asked to do deep copy of object so What's basically it's mean ??. Let's understand in
 this way you have been given an object personalDetail this object contains some property which again a type of
  object here as you can see address is an object and phoneNumber in side an address is also an object. In simple
   term personalDetail is nested object(object inside object). So Here deep copy means we have to copy all the 
   property of personalDetail object including nested object.

var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
	}
}
So when we do deep clone then we should copy every property (including the nested object).

18.Write a function which will test string as a literal and as an object ?
For example: We can create string using string literal and using String constructor function.

 var ltrlStr = "Hi I am string literal";
 var objStr = new String("Hi I am string object");
We can use typeof operator to test string literal and instanceof operator to test String object.

 function isString(str) {
 	return typeof(str) == 'string' || str instanceof String;
 }
 
 var ltrlStr = "Hi I am string literal";
 var objStr = new String("Hi I am string object");
 console.log(isString(ltrlStr)); 
 console.log(isString(objStr));

 19.What is typical use case for anonymous function in JavaScript ?
  1.if function is only used in one place, then there is no need to add a name to function.
  2.Anonymous functions are declared inline and inline functions have advantages in the case that they can access
   variable in the parent scopes.
  3.Passing anonymous function as a parameter to calling function.
    function processCallback(callback){
	if(typeof callback === 'function'){
		callback();
	}
  }

  processCallback(function(){
	alert("Hi I am anonymous callback function");
  });

20.Write code for merge two JavaScript Object dynamically.
  var person = {
	name : 'John',
	age  : 24
}

var location = {
	addressLine1 : 'Some Location x',
	addressLine2 : 'Some Location y',
	city : 'NewYork'
} 

function merge(toObj,fromObj){
	return Object.assign(person,location);
}

21.What is non-enumerable property in JavaScript and how can create ?
Object can have properties that don't show up when you iterate through object using for...in loop or using 
Object.keys()
 to get an array of property names. This properties is know as non-enumerable properties.

22.null vs undefined
Question: What are the differences between null and undefined?

Answer: JavaScript has two distinct values for nothing, null and undefined.

undefined
undefined means, value of the variable is not defined. JavaScript has a global variable undefined whose value is 
"undefined" and typeof undefined is also "undefined". Remember, undefined is not a constant or a keyword. undefined is
 a type with exactly one value: undefined. Assigning a new value to it does not change the value of the type undefined.

8 Ways to get Undefined:
A declared variable without assigning any value to it.
Implicit returns of functions due to missing return statements.
return statements that do not explicitly return anything.
Lookups of non-existent properties in an object.
Function parameters that have not passed.
Anything that has been set to the value of undefined.
Any expression in the form of void(expression)
The value of the global variable undefined
null
null means empty or non-existent value which is used by programmers to indicate “no value”. null is a primitive value
 and you can assign null to any variable. null is not an object, it is a primitive value. For example, you cannot add
  properties to it. Sometimes people wrongly assume that it is an object, because typeof null returns "object".

Btw, null == undefined ref: history of typeof null



