-Global Scope
  If we declare a variable, it’s defined globally:
    var name = 'Todd';

-Local scope
  A local scope refers to any scope defined past the global scope. There is typically one global scope, and each 
function defined has its own (nested) local scope. Any function defined within another function has a local scope which 
is linked to the outer function.

 var myFunction = function () {
		};

-Any locally scoped items are not visible in the global scope - unless exposed
 var myFunction = function () {
  var name = 'Todd';
  console.log(name); 
};
console.log(name);

-Function Scope
 All scopes in JavaScript are created with Function Scope only, they aren’t created by for or while loops or expression
 statements like if or switch. New functions = new scope - that’s the rule.

  var myFunction = function () {
  // Scope B
  var myOtherFunction = function () {
    // Scope C
  };
};

-Lexical Scope or Closure
 Whenever you see a function within another function, the inner function has access to the scope in the outer function,
  this is called Lexical Scope or Closure - also referred to as Static Scope.

 var myFunction = function () {
  var name = 'Todd'; 
  var myOtherFunction = function () {
  };
};

-function init() {
  var name = 'Mozilla'; 
  function displayName() { 
    alert(name);  
  }
  displayName();    
}
init();

-Closure
 function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

-A closure is the combination of a function and the lexical environment within which that function was declared. 
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  
console.log(add10(2));

-Practical closures
 Closures are useful because they let you associate some data (the lexical environment) with a function that operates on 
 that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data 
 with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Situations where you might want to do this are particularly common on the web. Much of the code we write in front-end 
JavaScript is event-based — we define some behavior, then attach it to an event that is triggered by the user 
(such as a click or a keypress). Our code is generally attached as a callback: a single function which is executed in 
response to the event.

	function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

-Emulating private methods with closures
  Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same
   class.
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); 
counter.increment();
counter.increment();
console.log(counter.value()); 
counter.decrement();
console.log(counter.value()); 

-Closure Scope Chain
 var e = 10;
function sum(a){
  return function(b){
    return function(c){
      return function(d){
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      return function sum4(d){
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) 

-closures in loops
  function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();


