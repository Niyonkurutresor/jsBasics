// you are supposted to reverse each word without to reverse the older of the in the sentence
const word = 'this it the wrod that is boing to be reversed';


function myFunction(word){
const wordArray = word.split(' ');
const result = wordArray.map((Element)=>{
    return Element.split('').reverse().join('');
})
const output = result.join().replaceAll(',', ' ');
return output;
}

console.log(myFunction(word));