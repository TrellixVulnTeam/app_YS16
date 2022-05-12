-JavaScript provides a number of ways of iterating over a collection, from simple for loops to map() and filter().
 Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for 
 customizing the behavior of for...of loops.

-An object is an iterator when it knows how to access items from a collection one at a time, while keeping track of its
 current position within that sequence. In JavaScript an iterator is an object that provides a next() method which
  returns the next item in the sequence. This method returns an object with two properties: done and value.

An iterator is considered to be finished/terminated when next() calls return an object with the done property set to 
true.

  function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

 Once initialized, the next() method can be called to access key-value pairs from the object in turn:
  var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); 
console.log(it.next().value); 
console.log(it.next().done);

-Generators
 While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly
 maintain their internal state. Generators provide a powerful alternative: they allow you to define an iterative 
 algorithm by writing a single function which can maintain its own state.

A GeneratorFunction is a special type of function that works as a factory for iterators. When it is executed it returns
a new Generator object. A function becomes a GeneratorFunction if it uses the function* syntax.

function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);

-Iterables
  An object is iterable if it defines its iteration behavior, such as what values are looped over in a for...of
  construct. Some built-in types, such as Array or Map, have a default iteration behavior, while other types 
  (such as Object) do not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects
up its prototype chain) must have a property with a Symbol.iterator key. This function should return a new iterator for 
each call, however, this is not a requirement.

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for (let value of myIterable) { 
    console.log(value); 
}

  or
[...myIterable];

-