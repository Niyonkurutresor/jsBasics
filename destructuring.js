const arr = [2,3,4,5,8];
const obj = [{
        name:'mugabo',
        height:23,
        acount:{
            equity:'$527600',
            unguka:'$23300',
            ecoganke:'$3239',
        }
    },
    {
        name:'morgan',
        height:54,
        acount:{
            equity:'$5000',
            unguka:'$600',
            ecoganke:'$2239',
        }
    }

]
// function myFunction(arr){
//     const [a,b,c,d,e] = arr;
//     console.log(a)
// }

function myFunction(obj){
    const [firstuser, seconduser] = obj;
    const {name, height, acount:acounters} = firstuser;
    console.log(name)
    console.log(acounters)
}

myFunction(obj)