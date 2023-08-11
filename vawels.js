const word = 'Good morning to all users of the app. \n We would likE to announce every one is able to access the accoutn of .'

function myFunction(word){
    const wordArray = word.split('');
    let i;
    const vowles = {
        a:0,
        i:0,
        u:0,
        e:0,
        o:0,
    }
    for ( i =0; i<wordArray.length; i++){
        if('a'==wordArray[i] || 'A'==wordArray[i]){
            vowles.a = Object.values(vowles)[0]+1
        }else if('i'==wordArray[i] || 'I'==wordArray[i]){
            vowles.i = Object.values(vowles)[1]+1
        }
        else if('u'==wordArray[i] || 'U'==wordArray[i]){
            vowles.u = Object.values(vowles)[2]+1
        }
        else if('e'==wordArray[i] || 'E'==wordArray[i]){
            vowles.e = Object.values(vowles)[3]+1
        }
        else if('o'==wordArray[i] || 'O'==wordArray[i]){
            vowles.o = Object.values(vowles)[4]+1
        }
    }
    return vowles
}

console.log(myFunction(word));