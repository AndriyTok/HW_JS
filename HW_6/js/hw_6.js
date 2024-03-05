// 1 Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// 2 Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// 3 Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// 5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let string_mas_1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
let string_mas_2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//завдання 1
console.log('-------TASK 1--------')
for (const item of string_mas_1) {
    console.log(item.length)
}

//Завдання 2
console.log('-------TASK 2--------')
for (const item of string_mas_1) {
    console.log(item.toUpperCase())
}
//Завдання 3
console.log('-------TASK 3--------')
for (const item of string_mas_2) {
    console.log(item.toLowerCase())
}
//Завдання 4
console.log('-------TASK 4--------')
let dirty_str = ' dirty string   '
console.log('dirty:', dirty_str)
console.log('clean:', dirty_str.substring(dirty_str.indexOf(' ')+1, dirty_str.lastIndexOf(' ')-2))
//Завдання 5
console.log('-------TASK 5--------')
let str5 = 'Ревуть воли як ясла повні';
let string_to_array = str => {
    console.log(str.split(' '))
}
string_to_array(str5)