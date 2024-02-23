//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

console.log('------------PART_1-------------')
let arr1=["el1","el2", "el3", "el4", "el5", "el6","el7", "el8", "el9", "el10"]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log('\n')
console.log('------------PART_2-------------')
let book1 ={
    title: 'Moby Dick',
    pageCount: 113,
    genre: 'Adventure'
};
let book2 ={
    title: '1984',
    pageCount: 315,
    genre: 'History'
};
let book3 ={
    title: 'Lord of the Rings',
    pageCount: 500,
    genre: 'Phantazy'
};
console.log(book1, book2, book3)
console.log('\n')
console.log('------------PART_3-------------')
book1.author=[];
book2.author=[];
book3.author=[];
book1.author["name"]= "Herman Melville";
book1.author["age"]= 60;
book2.author["name"]= "Jorge Orwell";
book2.author["age"]= 80;
book3.author["name"]= "J.R.R. Tolkien";
book3.author["age"]= 77;
console.log(book1, book2, book3)

console.log('\n')
console.log('------------PART_4-------------')
let users=[
    {name: "Andriy", username: "user1",password:183482},
    {name: "Anna", username: "user2",password:439839},
    {name: "Nastia", username: "user3",password:34234},
    {name: "Zhorik", username: "user4",password:12312432},
    {name: "Vasia", username: "user5",password:432},
    {name: "Ahmet", username: "user6",password:1832234324482},
    {name: "Yurchyk", username: "user7",password:1832423482},
    {name: "Alla", username: "user8",password:1234453},
    {name: "Nazar", username: "user9",password:8989898},
    {name: "Borys", username: "user10",password:123425},
]
for (let user of users)
console.log(user.password)
