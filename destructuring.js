// const k = [2,3]
// function turn (arr){
//     let [a,b] = arr
//     return [b,a]
// }
// console.log(turn(k));


const users = {
    Fname: 'tresor',
    Lname: 'NIYONKURU',
    age: 30,
    height: 34.5,
    location: 'kigali',
    account:{
        equity:{
            first: '$2343',
            second: '$220'
        }}
}

function functio(obj){
    let value = {...obj}
    return value
}
// console.log(functio(users))


function function0(users){
    // we ignore declaration like let or const at the beggining with putting the exprssion in the branket
    ({ Fname , Lname, age, Name = `${Fname} ${Lname}` } = obj)// Fname and Lname must to be called first in older to crete Name
    return {Fname, Lname, age, Name}
}
// console.log(function0(users))


const arr = [2,3,4,5,8];
const obj = [{
        name:'mugabo',
        height:23,
        account:{
            equity:{
                first: '$2343',
                second: '$220'
            },
            unguka:'$23300',
            ecoganke:'$3239',
        }
    },
    {
        name:'morgan',
        height:54,
        account:{
            equity:{
                first: '$0',
                second: '$12'
            },
            unguka:'$600',
            ecoganke:'$2239',
        }
    }

]
function myFunction1(arr){
 const [a,b,c,d,e] = arr;
 return a;
}
// console.log('function 1: ',myFunction1(arr))


function myFunction2(obj){
    const [firstuser, seconduser] = obj;
    const {name, height, account:accounts} = firstuser; // then we have renamed account to accounts; then know you can access accounts;   
    return accounts;
}
// console.log(('function 2:',myFunction2(obj)));


// turther destructuring
function function3(obj){
    for( let {name, height} of obj){
        console.log(`hello ${name} you are ${ height}`)
    }
    
}
// console.log(function3(obj))

function function4(obj){
    const {Fname: firstName} = obj
    return firstName;
}

// console.log(function4(users));




// spread synthax;
function function5(obj){
    const newObje = {... obj, color: 'red', height: 50};
    return newObje;
}
console.log(function5(users))