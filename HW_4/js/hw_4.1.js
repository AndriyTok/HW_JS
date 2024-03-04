// 1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// 2 створити функцію яка обчислює та повертає площу кола з радіусом r
// 3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 4 створити функцію яка приймає масив та виводить кожен його елемент

//масив для четвертого завдання
const mas=['first element','second element', 'third element', 'fourth element' ];

//виведення результату виконання усіх функцій на html сторінці
document.write(`
<h2>Завдання 1 (Площа прямокутника зі сторонами a=13см та b=4см)</h2>
<p>S=a x b=${rectangle_square(13,4)}см<sup>2</sup></p>

<h2>Завдання 2 (Площа кола із радіусом r=13см)</h2>
<p>S=&pi;r&sup2;=${circle_square(13)}см<sup>2</sup></p>

<h2>Завдання 3 (Площа циліндра із висотою h=15 та радіусом r=12см)</h2>
<p>S=&pi;rh=${cylinder_square(15,12)}см<sup>2</sup></p>

<h2>Завдання 4 (Виведення кожного елементу масиву)</h2>
<p>${show_elements(mas)}</p>

`)
//функція для першого завдання
function rectangle_square(a,b){
    return a*b;
}
//функція для другого завдання
function circle_square(r){
    return 3.14*(r**2); //** - степінь
}
//функція для третього завдання
function cylinder_square(h,r){
    return 2*3.14*h*r;
}
//функція для четвретого завдання
function show_elements(elements){
    let result =' ';
    for (const element of elements) {
        result += element + '<br>';
    }
    return result;
    }
