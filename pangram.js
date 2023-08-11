// a word sentance that  cointain each letter.

const str = "Pack my box with five dozen liquor jugs."

function myFunction(x){
const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let  word = x.toLowerCase()
const res = arr.find((element)=>{
    return word.indexOf(element) === -1;
})

if(res === undefined){
    return true
}else{
    return false
}};

console.log(myFunction(str));