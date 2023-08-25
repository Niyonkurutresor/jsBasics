const users = {
    Fname: 'tresor',
    Lname: 'NIYONKURU',
    age: 30,
    height: 34.5,
    location: 'kigali'
}

function passObj(obj){
    // we ignore declaration like let or const at the beggining
    ({ Fname , Lname, age, Name = `${Fname} ${Lname}` } = obj)// Fname and Lname must to be called first in older to crete Name
    return {Fname, Lname, age, Name}
}

console.log(passObj(users))

// aliasing



