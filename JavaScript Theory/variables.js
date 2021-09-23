// JavaScript is loosely typed language, any variable can have any data type

// let a = "abc";
// let b = 'a';
// let c = true;
// let d = 12;
// let e = 10.22;

// console.log(a,b,c,d,e); // Will be printed with spaces
// // will be printed in new lines
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// redefine and reassignation in different variable types

// no redefination in let
// let a = 10; 
// let a = 20; // wrong 

// reassignation is allowed

// let a = 10;
// a = 20;
// console.log(a);

//both reAssign and reDefine is allowed

// var a = 10;
// var a = 20;
// console.log(a);

// var a = 10;
// a = 20;
// console.log(a);

// No reAssign and reDefine

// const a = 10;
// const a = 20; // wrong
// console.log(a);


// const a = 120; // wrong
// a = 20; // wrong
// console.log(a);








/////////////////////////////////////////////////////////////////////////


// NOTE :-  Anything which is not inside the function is in global space 
// Example =
//    var a =10; // it is in global space 
//    function b(){ // it is in global space 
//        var x = 100; // it is not in global space 
//        console.log(x);

//    }
//    console.log(a);
//    b();
//    console.log(this.a);
   

// NOTE :- This shows how loosely type JavaScript is  
//    var a;
//    console.log(a);
//    a = 10; 
//    console.log(a);
//    a = 'hello';
//    console.log(a);

    //  const a = 100;

    //  console.log(a);

    // TYPE-ERROR
    //  a = 1000; // TypeError: Assignment to constant variable.

    // SYNTAX-ERROR
    //  const b; // SyntaxError: Missing initializer in const declaration

    // let c = 1000;
    // let c = 10; // SyntaxError: Identifier 'c' has already been declared

    // REFERENCE-ERROR
    // console.log(d);
    // let d = 1000; // ReferenceError: Cannot access 'd' before initialization

    // console.log(T); // ReferenceError: T is not defined


/////////////////////////////////////////////////////////////////////////

    // if(true) console.log("Hello Bro"); // this valid statement

    // this a block, and we use it with while,for loop or if else
    // if(true) {
    //     var a = 10;
    //     console.log(a); 
    // }


    // Block Scope

    // { 
    //     var a = 10;   // it is in global scope 
    //     let b = 20;   // it is in block scope
    //     const c = 30; // it is in block scope

    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);

    // NOTE :- "var" variable are accessable in and out of block because they are initialised
    //         in the global scope where as the "let" and "const" variable are accessable 
    //         inside the block area as they are initialised in the block scope. So b & c
    //         which called outside the block then error will occor 

    // Temporal Dead Zone is the term to describe the state where variables are
    // un-reachable. They are in scope, but they aren't declared.
    // var case 
    //     var a = 100; 
    // { 
    //     var a = 10;    
    //     let b = 20;   
    //     const c = 30; 

    //     console.log(a); // this a is refering to same space i.e global scope & it's o/p :- 10
    //     console.log(b);
    //     console.log(c);
    // }
    //     console.log(a); // this a is refering to same space i.e global scope & it's o/p :- 10

    // NOTE :- outside "a" was override by inside "a" as both "a" are refering to 
    //         same space i.e global scope

    //  let and const case 
    //     let b = 100; // this a is refering to different block i.e script 
    //     const c = 200;
    // { 
    //     var a = 10;    
    //     let b = 20;   // this a is refering to different block i.e block & this is shadowing outside b
    //     const c = 30; // this a is refering to different block i.e block & this is shadowing outside c

    //     console.log(a); 
    //     console.log(b); // so it's o/p :- 10
    //     console.log(c); // so it's o/p :- 30
    // }
    //     console.log(b); // so it's o/p :- 100
    //     console.log(c); // so it's o/p :- 200

    // NOTE :- this same thing happens in the case of function also

    // illegal shadowing
    //     let a = 100; 
    // { 
    //     var a = 10;    
    // }

    // legal shadowing
    //     var a = 100; 
    // { 
    //     let a = 10;    
    // }

    // this is fine 
    // let a = 20; 
    // function x(){
    //     var a = 10;    
    // }

    // const a = 10; 
    // { 
    //     const a = 100; 
    //     console.log(a); // so it's o/p :- 100
    //     { 
    //         const a = 1000; 
    //         console.log(a); // so it's o/p :- 1000
    //     }
    // }
    // console.log(a); // so it's o/p :- 10

/////////////////////////////////////////////////////////////////////////

    // Closures in JavaScript 

    // function x(){
    //     var a = 3;
    //      function y(){
    //         console.log(a);
    //     }
    //     a = 100;
    //     y();
    // }
    // var z = x();     
    // console.log(z);

    // x();

    // This is a valid function, in this also you can return a func 
    // function x(){
    //     var a = 3;
    //     return function y(){
    //         console.log(a);
    //     }
    // }

    // function z(){
    //     var b = 300;         
    //     function x(){
    //         var a = 7;
    //      function y(){
    //         console.log(a,b);
    //     }
    //     y();
    //   }
    //   x();
    // }
    // z();

    // NOTE :- Closure (x) = a:7
    //         Closure (z) = b:300

/////////////////////////////////////////////////////////////////////////

    // function x(){
    //   for(var i =1; i <= 5; i++) {
    //      setTimeout(function (){
    //          console.log(i);
    //      }, i * 1000);
    //   }
    //   console.log("Namaste Ji")
    // }
    // x();

    // NOTE :- This is going to be 6 five times because 

    // Now using let variable
    // function x(){
    //     for(let i =1; i <= 5; i++) {
    //        setTimeout(function (){
    //            console.log(i);
    //        }, i * 1000);
    //     }
    //     console.log("Namaste Ji")
    //   }
    //   x();

    //   function x(){
    //     for(var i =1; i <= 5; i++) {
    //         function close(x){
    //        setTimeout(function (){
    //            console.log(x);
    //        }, x * 1000);
    //     } 
    //     close(i);
    //   }
    //     console.log("Namaste Ji")
    // }
    //   x();

  /////////////////////////////////////////////////////////////////////////

  // Example of Closure
//   function z(){        
//         function x(b){
//         // var a = 7;  // both this 'a' and lower 'a'are same
//          function y(){
//             console.log(a,b);
//         }
//         var a = 7; //   both this 'a' and upper 'a'are same
//         return y;
//       }
//       return x;
//     }

//    var pre=  (z())("hello ji ");

//    pre();


  // Example of Data hiding or encapsulation

//   function counter(){
//       var cnt = 0;
//       function incrementCounter(){
//           cnt++;
//       }
//   }

//   console.log(count);

// NOTE :- Here it will not allow us to use the cnt because we are hiding the data



//   function counter(){
//     var cnt = 0;
//     return function incrementCounter(){
//         cnt++;
//         console.log(cnt);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();// this is a new counter & it is different from counter1
// counter2();
// counter2();
// counter2();
// counter2();

// NOTE :- This is how we can access the  hidden data 


// function Counter(){
//     var cnt = 0;
//      this.incrementCounter = function (){
//         cnt++;
//         console.log(cnt);
//     }
//     this.decrementCounter = function (){
//         cnt--;
//         console.log(cnt);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// NOTE :- This is the way how we can make our counter fnc scalable so 
// it can do both decrement & increment 


// Example of garbage collector
             
    //     function x(){
    //         var a = 7, z = 10;
    //      function y(){
    //         console.log(a);
    //     }
    //   }
    //    var y =x();
    //    y();

// NOTE :- here it will throw z in garbage collector as it is not longer in use


/////////////////////////////////////////////////////////////////////////
// a();
// b();// here it will show TypeError: b is not a function

// (*) Function Statement (or u can also say Function Declaration)
//     function a(){
//         console.log("hello ji a");
//     }
// // (*) Function Expression
//     var b = function (){
//     console.log("hello ji b");
//     }

//     a();
//     b(); // here it will not show any error 

// NOTE :- a() can be called anywhere in the program as it is function
//  whereas b is variable which is calling function


// (*) Anonymous Function 
//    function () {
//    }

// NOTE :- The anonymous function can be used like this only 
//     var x = function (){
//     console.log("hello ji x");
//     }

// (*) Named Function Expression
        // var t = function xyz (){
        // console.log("hello ji t");
        // console.log(xyz); // it will show [Function: xyz], u can access this like in this way
        // }

        // t();
        // xyz(); // it will show ReferenceError, as xyz is not defined

// (*) Difference between Parameters & Arguments
//     var x = function (Param1,Param2){ // these are:- function (Parameters,Parameters){ 
//     console.log("hello ji x");
//  }
// x(1,2); // these are:- x(Arguments,Arguments); 

// (*) First Class Function 

// var x = function (param1){ 
//     console.log(param1);
//  }
// x( function (){ 

//  });

// This how we are going to access the  Anonymous Function
//  var x = function (param1){ 
//     console.log(param1);
//  }
// x( function (){ 

//  });

////////
//  this how we can pass pass a Function in another Function
//  function xyz(){ 
//  };
//  x(xyz); // its o/p:- [Function: xyz]

////////
// Returning a function(Named or  Anonymous Function) through a another Function
    var b = function (param1){ 
        return function xyz(){

        }
    }

    console.log(b());

// First Class Function :- the ablility of functions to used as values & can be passed as argument to 
// another functions and can be returned from the another functions is known as 
// first class function. Functions are also called First Class citizen
