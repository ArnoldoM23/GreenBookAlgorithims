// /* jshint esversion: 6 */

// /* Implement the function asyncMemoize:
//  *
//  * asyncMemoize takes an asynchronous function and returns a memoized version of it.  When the
//  * memoized async function is invoked with new arguments, it performs asynchronous work on the
//  * arguments, caches the result, and then invokes the given callback on the cached value.  When the
//  * memoized function receives previously evaluated arguments, it invokes the given callback on the
//  * cached value instead of making another asynchronous call.
//  *
//  * If the same arguments are passed to the function with a different callback, the callback should
//  * be invoked on the cached value instead of performing an additional asynchronous call.
//  *
//  * fakeAsyncFunc( 10, result => result + 20 ); // makes asynchronous call on new argument
//  * fakeAsyncFunc( 10, result => result + 30 ); // invokes callback on previously cached value
//  *
//  */

const asyncMemoize = asyncFunc => {
  let cache = {};
  let queue = {};
  return function (){
    const args = Array.prototype.slice.call(arguments);
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



// /*  --=*=--  Tests below.  Do not modify.  --=*=--  */

// // These aren't actual asynchronous functions, but they serve our testing purposes.
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

describe('asyncMemoize', function() {

  it('should exist', function() {
    expect( asyncMemoize ).to.exist;
  });

  it('should be a function', function() {
    expect( asyncMemoize ).to.be.a( 'function' );
  });

  it('should return a function', function() {
    expect( memoUpper ).to.be.a( 'function' );
  });

  it('should have made no asynchronous calls', function() {
    expect( spyUpper.callCount ).to.eql( 0 );
  });

  describe('working with nums', function() {
    it('should make an asynchronous call for new arguments', function(done) {
      memoDoubler( 0, result => {
        nums.push( 'First: ' + result );
        expect( nums ).to.eql( ['First: 0'] );
        done();
      });
    });

    it('should have made one asynchronous call', function() {
      expect( spyDoubler.callCount ).to.eql( 1 );
    });

    it('should make an asynchronous call for new arguments', function(done) {
      memoDoubler( 5, result => {
        nums.push( 'Second: ' + result );
        expect( nums ).to.eql( ['First: 0', 'Second: 10'] );
        done();
      });
    });

    it('should have made two asynchronous calls', function() {
      expect( spyDoubler.callCount ).to.eql( 2 );
    });
  });

  describe('working with dogs', function() {
    it('should make an asynchronous call for new arguments', function(done) {
      memoUpper( 'dog', result => {
        dogs.push( 'First: ' + result );
        expect( dogs ).to.eql( ['First: DOG'] );
        done();
      });
    });

    it('should have made one asynchronous call', function() {
      expect( spyUpper.callCount ).to.eql( 1 );
    });

    it('should invoke a callback on cached values', function(done) {
      memoUpper( 'dog', result => {
        dogs.push( 'Second: ' + result );
        expect( dogs ).to.eql( ['First: DOG', 'Second: DOG'] );
        done();
      });
    });

    it('should have made one asynchronous call', function() {
      expect( spyUpper.callCount ).to.eql( 1 );
    });
  });

  describe('working with cats', function() {
    it('should make an asynchronous call for new arguments', function(done) {
      memoUpper( 'cat', result => {
        cats.push( 'First: ' + result );
        expect( cats ).to.eql( ['First: CAT'] );
        done();
      });
    });

    it('should have made two asynchronous calls', function() {
      expect( spyUpper.callCount ).to.eql( 2 );
    });

    it('should invoke a callback on cached values', function(done) {
      memoUpper( 'cat', result => {
        cats.push( 'Second: ' + result );
        expect( cats ).to.eql( ['First: CAT', 'Second: CAT'] );
        done();
      });
    });

    it('should have made two asynchronous calls', function() {
      expect( spyUpper.callCount ).to.eql( 2 );
    });
  });

  describe('revisiting dogs', function() {
    it('should invoke a callback on cached values', function(done) {
      memoUpper( 'dog', result => {
        dogs.push( 'Third: ' + result );
        expect( dogs ).to.eql( ['First: DOG', 'Second: DOG', 'Third: DOG'] );
        done();
        // console.log( 'All dog tests passed.' );
      });
    });

    it('should have made two asynchronous calls', function() {
      expect( spyUpper.callCount ).to.eql( 2 );
    });
  });

  describe('revisiting cats', function() {
    it('should invoke a callback on cached values', function(done) {
      memoUpper( 'cat', result => {
        cats.push( 'Third: ' + result );
        expect( cats ).to.eql( ['First: CAT', 'Second: CAT', 'Third: CAT'] );
        done();
        // console.log( 'All cat tests passed.' );

        memoDoubler( 0, result => {
          nums.push( 'Third: ' + result );
          expect( nums ).to.eql( ['First: 0', 'Second: 10', 'Third: 0'] );
          expect( spyDoubler.callCount ).to.eql( 2 );
          // console.log( 'All num tests passed.');
        });
      });
    });

    it('should have made two asynchronous calls', function() {
      expect( spyUpper.callCount ).to.eql( 2 );
    });
  });

});

// // My solution
// // const asyncMemoize = asyncFunc => {
// //   // Your crappy code here
// //   let cache = {};
// //   let queue = {};
// //   return function (){
// //     const args = Array.prototype.slice.call(arguments);
// //     if (queue[args[0]]) {
// //       queue[args[0]].push(args[1]);
// //     }else{
// //       queue[args[0]] = [args[1]];
// //       asyncFunc(args[0], val => {
// //         cache[args[0]] = val;
// //         queue[args[0]].forEach(func => { func( cache[args[0]] ) })
// //       });
// //     }
// //   }
// // };

// // Nats solution

// // const asyncMemoize = func => {
// //   // Your crappy code here
// //   let cache = {};
// //   let identityCb = value => value;
// //   cache[func] = cache[func] || {};
// //   return function(...args) {
// //     if (!cache[func].hasOwnProperty(args[0])) {
// //     //call async function with identity callback
// //       cache[func][args[0]] = func(args[0], identityCb);
// //     } else if (cache[func][args[0]] === undefined) {
// //     //while the call hasn't been returned, push into the callback queue
// //       cache[func]['callbacks'] = cache[func]['callbacks'] || [];
// //       cache[func]['callbacks'].push(args[1]);
// //     } else {
// //     //once the value is there, invoke callbacks in turn
// //       return cache[func]['callbacks'].forEach(cb => cb(cache[func][args[0]]));
// //     }
// //   }

// // };

