// 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// 1.1 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// 1.2 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log('------------TASK1--------------')
function User (id, name, surname, email, phone) {
    return {
        id,
        name,
        surname,
        email,
        phone
    }
}
let users = [];
users.push(
    new User(1, 'Andriy', 'Tokovyy', 'first_email@gmail.com', '0962432731'),
    new User(3, 'Yuriy', 'Kosianers', 'second_email@gmail.com', '099243434631'),
    new User(2, 'Ivan', 'Petrenko', 'third_email@gmail.com', '0987654321'),
    new User(44, 'Petro', 'Sidorov', 'fourth_email@gmail.com', '0976543210'),
    new User(51, 'Olena', 'Kovalenko', 'fifth_email@gmail.com', '0965432109'),
    new User(6, 'Anna', 'Ivanova', 'sixth_email@gmail.com', '0954321098'),
    new User(78, 'Sergiy', 'Petrov', 'seventh_email@gmail.com', '0943210987'),
    new User(89, 'Olga', 'Semenova', 'eighth_email@gmail.com', '0932109876'),
    new User(9, 'Mykola', 'Vasilenko', 'ninth_email@gmail.com', '0921098765'),
    new User(11, 'Viktor', 'Kovalov', 'tenth_email@gmail.com', '0910987654')
)
console.log('Масив користувачів:',users)
console.log('Відфільтрований масив (парні id)', users.filter(User => (User.id%2 === 0)))
console.log('Відсортований масив (id по зростанню)', users.sort((first, second) => {return first.id - second.id}))

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// 2.1 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log('------------TASK2--------------')
class Client {
    constructor(id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
clients.push(
    new Client(1, 'Artem', 'Zhuk', 'client1@gmail.com', '0993451234', ['product1', 'product2', 'product3']),
    new Client(2, 'Igor', 'Petrov', 'client2@gmail.com', '0987654321', ['product4', 'product5']),
    new Client(3, 'Svitlana', 'Ivanova', 'client3@gmail.com', '0976543210', ['product6']),
    new Client(4, 'Viktoria', 'Semenova', 'client4@gmail.com', '0965432109', ['product7', 'product8', 'product100500','product9']),
    new Client(5, 'Mykhailo', 'Vasilenko', 'client5@gmail.com', '0954321098', ['product9', 'product10']),
    new Client(6, 'Oleksandr', 'Kovalov', 'client6@gmail.com', '0943210987', ['product11', 'product12']),
    new Client(7, 'Vitaliy', 'Kovalenko', 'client7@gmail.com', '0932109876', ['product13', 'product14']),
    new Client(8, 'Anastasiya', 'Petrova', 'client8@gmail.com', '0921098765', ['product15', 'product16']),
    new Client(9, 'Yuliya', 'Sidorova', 'client9@gmail.com', '0910987654', ['product17', 'product18']),
    new Client(22, 'Natalia', 'Kovalova', 'client10@gmail.com', '0909876543', ['product19', 'product20'])
)
console.log('Масив клієнтів:',clients)
console.log('Відсортований масив',
    clients.sort((first, second) => {return first.order.length - second.order.length}))
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// 4 (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// 5 створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку