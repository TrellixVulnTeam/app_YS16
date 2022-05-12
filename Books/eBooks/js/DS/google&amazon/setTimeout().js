The setTimeout() method of the WindowOrWorkerGlobalScope mixin (and successor to window.setTimeout) sets a timer which
executes a function or specified piece of code once after the timer expires.

-The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(); 
this value can be passed to clearTimeout() to cancel the timeout.

-It may be helpful to be aware that setTimeout() and setInterval() share the same pool of IDs, and that clearTimeout() 
and clearInterval() can technically be used interchangeably. For clarity, however, you should try to always match them 
to avoid confusion when maintaining your code.

-It is guaranteed that a timeout ID will never be reused by a subsequent call to setTimeout() or setInterval() on the 
same object (a window or a worker). However, different objects use separate pools of IDs.

var timeoutID;
function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert('That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}


-Polyfill
 If you need to pass one or more arguments to your callback function, but need it to work in browsers which dont support
 sending additional parameters using either setTimeout() or setInterval() you can include this polyfill which enables
 the HTML5 standard parameter-passing functionality. Just add this code to the top of your script:

  (function() {
  setTimeout(function(arg1) {
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeST__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');

  var interval = setInterval(function(arg1) {
    clearInterval(interval);
    if (arg1 === 'test') {
      // feature test is passed, no need for polyfill
      return;
    }
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeSI__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');
}())