// 5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
// 6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// 7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// 10 створити функцію яка повертає найменьше число з масиву
// 11 створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// 12 створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// 13 Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

//функція для п'ятого завдання
function paragraph(text){
    document.write(`<p>${text}</p>`)
}
//функція для шостого завдання
function list_1(text){
    document.write(`
    <p>Завдання 6: створення списку через функцію (три елемента li з однаковим текстом, що задається через аргумент)</p>
    <ul> 
    <li>${text}</li>   
    <li>${text}</li>   
    <li>${text}</li>   
</ul>
`)
}
//функція для сьомого завдання
function list_2 (text, number){
    document.write(`
    <p>Завдання 7: створення списку через функцію (кількість елементів li задається через другий числовий аргумент)</p>
    <ul>`)
    for (let i = 0; i <= number; i++) {
       document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
//функція для восьмого завдання
function convert_mas (data){
    document.write(`
     <p>Завдання 8: створення списку через функцію на основі масиву</p>
     <ul>`)
    for (const datum of data) {
        document.write(`<li>${datum}</li>`)
    }
    document.write(`</ul>`)
}
//функція для дев'ятого завдання
function convert_mas_with_objects(data){
    document.write(`<p>Завдання 9: створення списку через функцію на основі масиву з об'єктами</p>`)
    for (const datum of data) {
        document.write(`<p>Object's id:${datum.id}; Object's name: ${datum.name}; Object's age: ${datum.age} </p>`)
    }
}
//функція для десятого завдання
function minimum_from_mas(data){
    document.write(`<p>Завдання 10: виведення найменшого елементу з масиву</p>`)
    let temp = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] < temp) {
            temp = data[i];
        }
    }
    return temp;
}
//функція для одинадцятого завдання
function sum(arr){
    document.write(`<p>Завдання 11: виведення суми елементів масиву</p>`)
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; //сумування всіх елементів масиву
    }
    return sum;
}
//функція для дванадцятого завдання
function swap_indexes(arr, index1, index2){
    document.write(`<p>Завдання 12: Заміна елементів масиву за індексами</p>`)
    let temp = arr[index1]
    arr[index1]=arr[index2];
    arr[index2]=temp;
    return arr;
}
//функція для тринадцятого завдання
function exchange(sumUAH,currencyValues,exchangeCurrency){
    document.write(`<p>Завдання 13: Функція для обміну валют</p>`)
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            return sumUAH / currencyValues[i].value;
        }
    }

}

//виведення результату виконання усіх функцій
paragraph('Завдання 5: створення абзацу тексту через функцію')
list_1('lorem ipsum')
list_2('lorem ipsum', 12)
//масив для восьмого завдання
const mas_2 = [1, 2, 3, 4, 'стрінговий тип 1', 'стрінговий тип 2']
convert_mas(mas_2)
//масив для дев'ятого завдання
const mas_3 = [
    {id:1, name:'User1',age: 30},
    {id:2, name:'User2',age: 23},
    {id:3, name:'User3',age: 70},
]
convert_mas_with_objects(mas_3)
//масив для десятого, одинадцятого та дванадцятого завдання
const mas4 = [0, -100, -200, 12, 1234];
document.write(`
<p>Мінімальний елемент масиву: ${minimum_from_mas(mas4)}</p>
`)
document.write(`<p>Сума елементів масиву: ${sum(mas4)}</p>`)
document.write(`<p>Масив після заміни: ${swap_indexes(mas4, 0,4)}</p>`)
document.write(`<p>10000 UAH = ${ exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')} USD</p>`)




