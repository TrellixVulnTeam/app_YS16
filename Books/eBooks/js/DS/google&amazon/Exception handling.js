You can throw exceptions using the throw statement and handle them using the try...catch statements.
-Use the throw statement to throw an exception. When you throw an exception, you specify the expression containing the 
 value to be thrown:
 throw expression;

-You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of
 varying types:
  throw 'Error2';   
  throw 42;         
  throw true;       
  throw {toString: function() { return "I'm an object!"; } };

Note: You can specify an object when you throw an exception. You can then reference the object's properties in the catch 
block.
	function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string 
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException('Value too high');
	
-The try...catch statement marks a block of statements to try, and specifies one or more responses should an exception 
 be thrown. If an exception is thrown, the try...catch statement catches it.

The try...catch statement consists of a try block, which contains one or more statements, and a catch block, containing 
statements that specify what to do if an exception is thrown in the try block. That is, you want the try block to succeed,
and if it does not succeed, you want control to pass to the catch block. If any statement within the try block 
(or in a function called from within the try block) throws an exception, control immediately shifts to the catch block. 
If no exception is thrown in the try block, the catch block is skipped. The finally block executes after the try and 
catch blocks execute but before the statements following the try...catch statement.
	function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; 
  } finally {
    return false; 
  }
}

try {
  f();
} catch(e) {
  console.log('caught outer "bogus"');
}


-Nesting try...catch statements
 You can nest one or more try...catch statements. If an inner try...catch statement does not have a catch block, it needs 
 to have a finally block and the enclosing try...catch statement's catch block is checked for a match.
 try {
  try {
    throw new Error('oops');
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

-try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

-try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

-Utilizing Error objects
 Depending on the type of error, you may be able to use the 'name' and 'message' properties to get a more refined 
 message. 'name' provides the general class of Error (e.g., 'DOMException' or 'Error'), while 'message' generally 
 provides a more succinct message than one would get by converting the error object to a string.

If you are throwing your own exceptions, in order to take advantage of these properties (such as if your catch block 
doesn't discriminate between your own exceptions and system ones), you can use the Error constructor.

 function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
} catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message);

  

