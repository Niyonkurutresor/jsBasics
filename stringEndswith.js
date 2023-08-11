// solution('abc', 'bc')  returns true
const word = 'abc'
const end = 'd'

function myFunction(word,end){
    return word.endsWith(end)
}
console.log(myFunction(word,end))