// // return the longest element in the array
// const arr = ['koko', 'marieClair', 'rugerero', 'muramutsa', 'arbeltumn'];

// const large = arr.reduce((current, ele)=>{
//     return current.length > ele.length ? current: ele
// })
// console.log(large)

// // find the first element that match the condition. once it found it will sotp outomatically
// const number = [1,29,5,50,23, 55,70];
// const num = number.find((element)=>{
//     console.log(element);
//     return element > 50;
// })
// console.log('////', num)

// // findIndex it return the index of first element that match the codition.
// const number = [1,29,5,50,23, 55,70];
// const num = number.findIndex((element)=>{
//     console.log(element);
//     return element > 50;
// })
// console.log('////', num)

const str= 'this it the string that is going to be working on to check the movement in string';
const substr = str.substring(0,20) + '....';
console.log(substr)