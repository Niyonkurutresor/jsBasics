// function myFunction(n){

//     if(n < 0) 
//       return -1;
    
//     let count = 0;
 
//     // Keep dividing n by powers of
//     // 5 and update count
//     for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
//         count += Math.floor(n / i);
 
//     return count;
// }

// console.log(myFunction(30))


// // const a = [1,2,3,4,5,8]
// // function myFunction(arr){
// //    const value = arr.reduce((element,prev)=>{
// //         return prev + element;
// //     })
// //     return value
// // }

// // console.log(myFunction(a))


function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      {return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     {return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };

console.log(two(times(nine())))

/**
 * two(func(2)){
 * fucn(a)
 * }
 * 
 * 
 */