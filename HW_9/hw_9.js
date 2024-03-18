// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

//--------------------------task 1------------------------------------------
const div_1 = document.createElement('div');
div_1.innerText = 'Some text';
div_1.classList.add('wrap', 'collapse', 'alpha', 'beta')
div_1.style.backgroundColor = 'lightblue';
div_1.style.color = 'darkblue';
div_1.style.fontSize = '20px';
div_1.style.textAlign = 'center';
div_1.style.marginBottom = '10px';
document.body.appendChild(div_1);
//cloning element
const div_2 = div_1.cloneNode(true);
document.body.appendChild(div_2);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

//--------------------------task 2------------------------------------------
let menu = ['Main','Products','About us','Contacts']
const ul = document.createElement('ul')
for (const element of menu) {
    let li = document.createElement('li')
    li.innerText = element;
    ul.append(li);
}
document.body.appendChild(ul);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


//--------------------------task 3------------------------------------------
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const container = document.createElement('div')
container.classList.add('container');
container.style.margin = '40px';

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];
    const course_div = document.createElement('div');
    course_div.innerHTML = `<b>Course ${i + 1}</b> <br>  Title: ${course.title}; Duration: ${course.monthDuration} months`;
    container.appendChild(course_div);
}

document.body.appendChild(container);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

//--------------------------task 3------------------------------------------
const container_2 = document.createElement('div')
container_2.classList.add('container_2');
container_2.style.margin = '20px';
container_2.style.textAlign = 'center'
for (const course of coursesAndDurationArray) {
    const item = document.createElement('div');
    item.classList.add('item');
    const heading = document.createElement('h1')
    heading.classList.add('heading')
    heading.innerText = course.title;
    const description = document.createElement('p')
    description.classList.add('description')
    description.innerText = `Course's duration:${course.monthDuration}`;
    item.append(heading, description);
    container_2.append(item);
}
document.body.append(container_2)

//shorter way:
// const container = document.createElement('div');
// container.classList.add('container');
//
// coursesAndDurationArray.forEach((course) => {
//     const item = document.createElement('div');
//     item.classList.add('item');
//     item.innerHTML = `<h1 class='heading'>${course.title}</h1><p class='description'>Course's duration: ${course.monthDuration}</p>`;
//     container.appendChild(item);
// });
//
// document.body.appendChild(container);


// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//--------------------------task 4------------------------------------------
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
const container_3 = document.createElement('div')
container_3.classList.add('Container_3')
for (let i = 0; i < simpsons.length; i++) {
    const simpson = simpsons[i];
    let member = document.createElement('div');
    member.classList.add('member');
    const member_info = document.createElement('p')
    member_info.classList.add('information');
    member_info.innerHTML = `<b>Member ${i+1}</b> <br>
        <b>Name:</b>${simpson.name} <br>
        <b>Surname:</b>${simpson.surname} <br>
        <b>Info:</b>${simpson.info} <br>`;
    member_info.style.width = '50%';
    const member_photo = document.createElement('img')
    member_photo.src=simpson.photo;
    member.style.display = 'flex';
    member.style.flexWrap = 'wrap';
    member.style.justifyContent = 'center';
    member.append(member_photo, member_info);
    container_3.append(member);
}
document.body.append(container_3)

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

// ------------------task 5-------------------
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
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
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
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
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
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
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
const container_4 = document.createElement('div')
container_4.classList.add('Container_4')
for (const course of courses) {
    const div_course = document.createElement('div');
    div_course.classList.add('div_course');
    const course_info = document.createElement('div');
    course_info.classList.add('Course_Info');
    course_info.innerHTML = `<b>Course:</b> ${course.title} <br>
    <b>Duration:</b> ${course.monthDuration} <br>
    <b>Time:</b> ${course.hourDuration} <br>
    <b>Price:</b> ${course.price} <br>
    <b>Rating:</b> ${course.rating} <br>
    <b>Average result:</b> ${course.avgResult} <br>`;
    const course_modules = document.createElement('ul')
    course_modules.classList.add('Course_Modules')
    for (const module of course.modules){
        let module_li = document.createElement('li')
        module_li.innerText = `${module}`;
        course_modules.append(module_li);
    }
    div_course.append(course_info,course_modules)
    container_4.appendChild(div_course)
}
document.body.append(container_4)