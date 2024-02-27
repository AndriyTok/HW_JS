// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

//--------------MADE--FOR--CONSOLE----------------
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log('-----------PART_4.1------------')
console.log("Users with 'true' status:")
for (let user of users) {
    //if(user.status) = if(user.status==true)
    if (user.status){
        console.log(user.name);
    }
}
console.log('-----------PART_4.2------------')
console.log("Users with 'false' status:")
for (let user of users) {
    //if(!user.status) = if(user.status==true)
    if (!user.status){
        console.log(user.name);
    }
}
console.log('-----------PART_4.3------------')
console.log("Users with 'false' status:")
for (let user of users) {
    if (user.age > 30){
        console.log(user.name);
    }
}