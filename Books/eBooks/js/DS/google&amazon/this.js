A function this keyword behaves a little differently in JavaScript compared to other languages. It also has some 
differences between strict mode and non-strict mode.

	var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());


-In the global execution context (outside of any function), this refers to the global object whether in strict mode or
 not.

 console.log(this === window); 

a = 37;
console.log(window.a); 

this.b = "MDN";
console.log(window.b)  
console.log(b)         


-Inside a function, the value of this depends on how the function is called.
	Since the following code is not in strict mode, and because the value of this is not set by the call, this will 
default to the global object, which is window in a browser. 
   function f1() {
  return this;
}

f1() === window; 
f1() === global; 

In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case, this will default to undefined:
	function f2() {
   'use strict'; 
  return this;
}

f2() === undefined; 

So, in strict mode, if this was not defined by the execution context, it remains undefined.

-To pass the value of this from one context to another, use call, or apply:
	var obj = {a: 'Custom'};
	var a = 'Global';

function whatsThis() {
  return this.a;  
}

whatsThis();          
whatsThis.call(obj);  
whatsThis.apply(obj);

Where a function uses the this keyword in its body, its value can be bound to a particular object in the call using the
call or apply methods which all functions inherit from Function.prototype.
 
 function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

add.call(o, 5, 7); 
add.apply(o, [10, 20]); 

-Note that with call and apply, if the value passed as this is not an object, an attempt will be made to convert it to 
an object using the internal ToObject operation. So if the value passed is a primitive like 7 or 'foo', it will be 
converted to an Object using the related constructor, so the primitive number 7 is converted to an object as if by new 
Number(7) and the string 'foo' to an object as if by new String('foo'), e.g.

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     
bar.call('foo');

-The bind method
 Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the 
original function, in the new function it is permanently bound to the first argument of bind, regardless of how the 
function is being used.

 function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); 

var h = g.bind({a: 'yoo'}); 
console.log(h()); 

var o = {a: 37, f: f, g: g, h: h};
console.log(o.f(),o.f(), o.g(), o.h());

-Arrow functions
 In arrow functions, this retains the value of the enclosing lexical context this. In global code, it will be set to 
the global object:
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject);

-var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f());

-var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f());


-As a constructor
 When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); 


function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a);

-As a DOM event handler
 function bluify(e) {
  // Always true
  console.log(this === e.currentTarget); 
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}