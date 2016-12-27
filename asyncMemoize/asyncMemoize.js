/* jshint esversion: 6 */

/* Implement the function asyncMemoize:
 *
 * asyncMemoize takes an asynchronous function and returns a memoized version of it.  When the
 * memoized async function is invoked with new arguments, it performs asynchronous work on the
 * arguments, caches the result, and then invokes the given callback on the cached value.  When the
 * memoized function receives previously evaluated arguments, it invokes the given callback on the
 * cached value instead of making another asynchronous call.
 *
 * If the same arguments are passed to the function with a different callback, the callback should
 * be invoked on the cached value instead of performing an additional asynchronous call.
 *
 * fakeAsyncFunc( 10, result => result + 20 ); // makes asynchronous call on new argument
 * fakeAsyncFunc( 10, result => result + 30 ); // invokes callback on previously cached value
 *
 */

const asyncMemoize = asyncFunc => {
  // Your crappy code here
  let cache = {};
  let queue = {};
  return function (...args){
    if (queue[args[0]]) {
      if (cache[args[0]]) {
        args[1](cache[args[0]])
      }
      queue[args[0]].push(args[1]);
    }else{
      queue[args[0]] = [args[1]];
      asyncFunc(args[0], val => {
        cache[args[0]] = val;
        queue[args[0]].forEach(func => { func( cache[args[0]] ) })
      });
    }
  }
};



// const asyncMemoize = asyncFunc => {
//   const cache = {};
//   const pending = {};
//   return (arg, callback) => {
//     const key = JSON.stringify( arg );
//     if ( cache.hasOwnProperty(key) ) {
//       callback( cache[key] );
//     } else if ( pending.hasOwnProperty(key) ) {
//       pending[key].push(callback);
//     } else {
//       pending[key] = [callback];
//       asyncFunc(arg, result => {
//         cache[key] = result;
//         pending[key].forEach(cb => {
//           cb(cache[key]);
//         });
//         delete pending[key];
//       });
//     }
//   };
// };


/*  --=*=--  Tests below.  Do not modify.  --=*=--  */

// These aren't actual asynchronous functions, but they serve our testing purposes.
function upper(value, callback) {
  setTimeout( () => callback(value.toUpperCase()), 1000);
}

function doubler(num, callback) {
  setTimeout( () => callback(num * 2), 500);
}

const expect = require('chai').expect;
const sinon = require('sinon');
const spyUpper = sinon.spy(upper);
const spyDoubler = sinon.spy(doubler);
const memoUpper = asyncMemoize(spyUpper);
const memoDoubler = asyncMemoize(spyDoubler);
const dogs = [];
const cats = [];
const nums = [];

expect( asyncMemoize ).to.exist;
expect( asyncMemoize ).to.be.a( 'function' );
expect( memoUpper ).to.be.a( 'function' );
expect( spyUpper.callCount ).to.eql( 0 );

memoDoubler( 0, result => {
  nums.push( 'First: ' + result );
  expect( nums ).to.eql( ['First: 0'] );
});
 expect( spyDoubler.callCount ).to.eql( 1 );

memoDoubler( 5, result => {
  nums.push( 'Second: ' + result );
  expect( nums ).to.eql( ['First: 0', 'Second: 10'] );
});
expect( spyDoubler.callCount ).to.eql( 2 );

memoUpper( 'dog', (result) => {
  dogs.push( 'First: ' + result );
  expect( dogs ).to.eql( ['First: DOG'] );
});
 expect( spyUpper.callCount ).to.eql( 1 );

memoUpper( 'dog', result => {
  dogs.push( 'Second: ' + result );
  expect( dogs ).to.eql( ['First: DOG', 'Second: DOG'] );
});
expect( spyUpper.callCount ).to.eql( 1 );

memoUpper( 'cat', result => {
  cats.push( 'First: ' + result );
  expect( cats ).to.eql( ['First: CAT'] );
});
expect( spyUpper.callCount ).to.eql( 2 );

memoUpper( 'cat', result => {
  cats.push( 'Second: ' + result );
  expect( cats ).to.eql( ['First: CAT', 'Second: CAT'] );
});
expect( spyUpper.callCount ).to.eql( 2 );

memoUpper( 'dog', result => {
  dogs.push( 'Third: ' + result );
  expect( dogs ).to.eql( ['First: DOG', 'Second: DOG', 'Third: DOG'] );
  console.log( 'All dog tests passed.' );
});
expect( spyUpper.callCount ).to.eql( 2 );

memoUpper( 'cat', result => {
  cats.push( 'Third: ' + result );
  expect( cats ).to.eql( ['First: CAT', 'Second: CAT', 'Third: CAT'] );
  console.log( 'All cat tests passed.' );

  memoDoubler( 0, result => {
    nums.push( 'Third: ' + result );
    expect( nums ).to.eql( ['First: 0', 'Second: 10', 'Third: 0'] );
    expect( spyDoubler.callCount ).to.eql( 2 );
    console.log( 'All num tests passed.');
  });
});
expect( spyUpper.callCount ).to.eql( 2 );
