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
    return arr == null ? [] : arr.sort(()=> 4 - Math.random());
}

console.log(sortArr(arr));

// maxmum and minmum
console.log(Math.max(...arr));
        //Alternative
        let x = Math.max.apply(null, arr);// apply(null,[1,3,4,5]) === max(1,3,4,5)
        console.log(x)
// minmun
console.log(Math.min(...arr));
        //aleternative
        x = Math.min.apply(null,arr)
    




// sorting array with object based
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010},
    {type:"tiger", year:2010}
  ];


 x = cars.sort((a,b)=> a.year - b.year);
 console.log(x)

 
function myFunciton(arr){
    return arr.sort((a,b)=>{
        let k = a.type.toLowerCase();
        let j = b.type.toLowerCase()
        console.log(k, j)
        if(k < j){ return -1};
        if(k > j){ return 1};
        return 0;
    })
}
console.log(myFunciton(cars))
