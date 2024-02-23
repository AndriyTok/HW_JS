//Логічні розгалуження:
// 2.1 Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3
// 2.2 Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
// 2.3 У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
// 2.4 Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// 2.5 Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
console.log('\n')
console.log('-----------PART_2.1------------')
let x;
let a=1;
// let a=0;
// let a=-3;
x=a;
console.log("x =",x, )
if (x !== 0) {
    console.log("Вірно!")
}
else {console.log("Невірно!")}
console.log('\n')
console.log('-----------PART_2.2------------')
let time = prompt("(Завдання 2.2) Введіть число (від 0 до 59):");
console.log("Ваше число:", time)
// 'if' realization:
if (0 <= time && time <= 15) {
    console.log("Число попадає до ПЕРШОЇ частини години!")
}
else if (15 <= time && time <= 30) {
    console.log("Число попадає до ДРУГОЇ частини години!")
}
else if (30 <= time && time <= 45) {
    console.log("Число попадає до ТРЕТЬОЇ частини години!")
}
else if (45 <= time && time <= 60) {
    console.log("Число попадає до ЧЕТВЕРТОЇ частини години!")
}
//'switch' realization:
// switch(true){
//     case (0 <= time && time <= 15):
//         console.log("Число попадає до ПЕРШОЇ частини години!");
//         break;
//     case (15 <= time && time <= 30):
//         console.log("Число попадає до ДРУГОЇ частини години!");
//         break;
//     case (30 <= time && time <= 45) :
//         console.log("Число попадає до ТРЕТЬОЇ частини години!");
//         break;
//     case (45 <= time && time <= 60):
//         console.log("Число попадає до ЧЕТВЕРТОЇ частини години!");
//         break;
//     default:
//         console.log("Введіть правильне число!")
//         break;
// }
console.log('\n')
console.log('-----------PART_2.3------------')
let day = prompt("(Завдання 2.3) Введіть число (від 1 до 31):");
console.log("Ваше число:", day)
switch(true){
    case (1 <= day && day <= 10):
        console.log("Число попадає до ПЕРШОЇ декади місяця!");
        break;
    case (10 <= day && day <= 20):
        console.log("Число попадає до ДРУГОЇ декади місяця!");
        break;
    case (20 <= day && day <= 31) :
        console.log("Число попадає до ТРЕТЬОЇ декади місяця!");
        break;
    default:
        console.log("Введіть правильне число!")
        break;
}
console.log('\n')
console.log('-----------PART_2.4------------')
let week_day = prompt("(Завдання 2.4) Введіть число (від 1 до 7):");
console.log("Ваше число:", week_day)
//conversion week_day from string to int
week_day = parseInt(week_day);
switch(week_day){
    case 1: {
        console.log("Понеділок")
        break;
    }
    case 2: {
        console.log("Вівторок")
        break;
    }
    case 3: {
        console.log("Середа")
        break;
    }
    case 4: {
        console.log("Четвер")
        break;
    }
    case 5: {
        console.log("П'ятниця")
        break;
    }
    case 6: {
        console.log("Субота")
        break;
    }
    case 7: {
        console.log("Неділя")
        break;
    }
    default:{
        console.log("Введіть правильне число!")
        break;
    }
}
console.log('\n')
console.log('-----------PART_2.5------------')
let number_1 = prompt("(Завдання 2.5) Введіть перше число:");
let number_2 = prompt("(Завдання 2.5) Введіть друге число:");
console.log("Перше число:", number_1)
console.log("Друге число:", number_2)
if (number_1 < number_2) {
    let sent_1=`Максимальне число:${number_2}`
    console.log(sent_1)
}
else if (number_2 < number_1) {
    let sent_1=`Максимальне число:${number_1}`
    console.log(sent_1)
}
else {
    console.log('Числа рівні!')
}