
function myFunction(object){
    const obj = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

    const value = object.split('');
    let initial = 0
    const k = value.forEach((element) => {
         initial += obj[element]
    });
    return initial;
}



console.log(myFunction('VI'));
console.log(myFunction('IIIx'));

