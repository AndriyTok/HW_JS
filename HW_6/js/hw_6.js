// 1) Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 2) Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 3) Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// 4) Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// 5) Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// 6) є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// 7) створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// 8) є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
// 9)    описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// 10)   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// 11)    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

//------------------------Виконання---------------------------
//завдання 1
console.log('-------TASK 1--------')
let string_mas_1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
string_mas_1.forEach((item) => console.log(item.length))     //реалізація функцією forEach
// for (const item of string_mas_1) {    //(реалізація простим циклом)
//     console.log(item.length)
// }
//Завдання 2
console.log('-------TASK 2--------')
string_mas_1.forEach((item) =>console.log(item.toUpperCase()))
//Завдання 3
console.log('-------TASK 3--------')
let string_mas_2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
string_mas_2.forEach((item)=> console.log(item.toLowerCase()))
//Завдання 4
console.log('-------TASK 4--------')
let dirty_str = ' dirty string   '
console.log('dirty:', dirty_str)
console.log('clean:', dirty_str.substring(dirty_str.indexOf(' ')+1, dirty_str.lastIndexOf(' ')-2))
//Завдання 5
console.log('-------TASK 5--------')
let str5 = 'Ревуть воли як ясла повні';
let string_to_array = str => {console.log(str.split(' '))}
string_to_array(str5)
//Завдання 6
console.log('-------TASK 6--------')
let mas_3 = [10,8,-7,55,987,-1011,0,1050,0]
let mas_4 = mas_3.map(number => number.toString()) //toString - переведення у String
console.log(mas_4)
//Завдання 7
console.log('-------TASK 7--------')
let mas_5 = [11,21,3];
let sortNums = (nums, direction) => {
    if (direction === 'ascending'){
        nums.sort((first, second) => {return first - second})
        console.log('ascending:',mas_5)
    }
    if (direction === 'descending'){
        nums.sort((first, second) => {return second - first})
        console.log('descending:',mas_5)
    }
}
sortNums(mas_5,'ascending')
sortNums(mas_5,'descending')
//Завдання 8
console.log('-------TASK 8--------')
let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log('Sorted',courses.sort(
    (first, second) =>
    {return second.monthDuration-first.monthDuration}))

console.log('Filtered',courses.filter((course) => course.monthDuration > 5))
console.log('Mapped',courses.map(
 (course, index)=>({id:index+1, title:course.title, duration:course.monthDuration})))
//Завдання 9
console.log('-------TASK 9--------')
let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//масив, в який буде пушитися колода ⬇
let deck = [];
//цикл для створення колоди
for (let suit of suits) {
    for (let value of values) {
        let color;
        if (suit === 'heart' || suit === 'diamond') {
            color = 'red';
        } else {
            color = 'black';
        }
        deck.push({ suit: suit, value: value, color: color });
    }
}
console.log('Колода:',deck);
console.log('Піковий туз:', deck.find(card => card.suit === 'spade' && card.value === 'ace'));
console.log('Всі шістки:', deck.filter((card) => (parseInt(card.value) === 6)));
console.log('Всі червоні карти:', deck.filter((card) => (card.color === 'red')));
console.log('Всі буби:', deck.filter((card) => (card.suit === 'diamond')));
console.log('Всі трефи 9+:', deck.filter(card => card.suit === 'clubs' && (parseInt(card.value)) >= 9));
//Завдання 10
console.log('-------TASK 10--------')
let packedDeck = deck.reduce((acc, card) => {
    acc[card.suit].push([card.value, card.color]);
    return acc;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log("Об'єкт, що містить карти по мастях:",packedDeck);
//Завдання 11
console.log('-------TASK 11--------')
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log("Всі об'єкти, в яких в modules є sass:",
    coursesArray.filter(course => course.modules.includes('sass')),
    "Всі об'єкти, в яких в modules є docker:",
    coursesArray.filter(course => course.modules.includes('docker'))
)