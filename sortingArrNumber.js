function sortArr(arr){
    return arr == null ? [] : arr.sort((a,b)=> a-b);
}
let arr = [2,5,2,1,70,3.2,3,57]
console.log(sortArr(arr));

// you should ever sort it in random alder
// imagine if you take the a and fix it to 0.2
// then the reste of the number will be greater than that will be sorted in any older
// becouse in the first case a-b <0 a is sorted firt


function sortArr(arr){
    return arr == null ? [] : arr.sort(()=> 0.1- Math.random());
}

console.log(sortArr(arr));