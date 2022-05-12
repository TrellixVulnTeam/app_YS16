-A Map object is a simple key/value map and can iterate its elements in insertion order.

var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; 
sayings.get('fox'); 
sayings.has('bird'); 
sayings.delete('dog');
sayings.has('dog'); 

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}

sayings.clear();
sayings.size; 

-Object and Map compared
 Traditionally, objects have been used to map strings to values. Objects allow you to set keys to values, retrieve those
  values, delete keys, and detect whether something is stored at a key. Map objects, however, have a few more advantages 
  that make them better maps.

The keys of an Object are Strings, where they can be of any value for a Map.
You can get the size of a Map easily while you have to manually keep track of size for an Object.
The iteration of maps is in insertion order of the elements.
An Object has a prototype, so there are default keys in the map. (this can be bypassed using map = Object.create(null)).
These three tips can help you to decide whether to use a Map or an Object:

Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the 
same type.
Use maps in case if there is a need to store primitive values as keys because object treats each key as a string whether
 it's a number value, boolean value or any other primitive value.
Use objects when there is logic that operates on individual elements.

-WeakMap object
 The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary
 values. The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if
  there is no other reference to the object anymore. The WeakMap API is the same as the Map API.

One difference to Map objects is that WeakMap keys are not enumerable (i.e., there is no method giving you a list of the
 keys). If they were, the list would depend on the state of garbage collection, introducing non-determinism.

For more information and example code, see also "Why WeakMap?" on the WeakMap reference page.

One use case of WeakMap objects is to store private data for an object or to hide implementation details. The following
example is from Nick Fitzgerald's blog post "Hiding Implementation Details with ECMAScript 6 WeakMaps". The private data
and methods belong inside the object and are stored in the privates WeakMap object. Everything exposed on the instance 
and prototype is public; everything else is inaccessible from the outside world because privates is not exported from 
the module

  const privates = new WeakMap();

function Public() {
  const me = {
  };
  privates.set(this, me);
}

Public.prototype.method = function() {
  const me = privates.get(this);
};

module.exports = Public;


-Sets
  Set objects are collections of values. You can iterate its elements in insertion order. A value in a Set may only occur
  once; it is unique in the Set collection.
 var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); 
mySet.delete('foo');
mySet.size; 

for (let item of mySet) console.log(item);

-Converting between Array and Set
  You can create an Array from a Set using Array.from or the spread operator. Also, the Set constructor accepts an Array
   to convert in the other direction. Note again that Set objects store unique values, so any duplicate elements from an 
   Array are deleted when converting.

  Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);

-