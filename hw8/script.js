// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

    function User(id, name, surname , email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let UserArray = [
        new User(2, `Pavlo`, `pavlov`, `pavlo@gmail.com`,`0931482193` ),
        new User(3, `Vasil`, `vasiliv`, `vasil@gmail.com`,`0931412493` ),
        new User(1, `Oleg`, `olegiv`, `oleg@gmail.com`,`0931282197` ),
        new User(8, `Vlad`, `vladiv`, `vlad@gmail.com`,`0937452113`),
        new User(4, `Ruslan`, `ruslaniv`, `ruslan@gmail.com`,`0931492291` ),
        new User(5, `Andriy`, `andriyv`, `andriy@gmail.com`,`0931462323`  ),
        new User(7, `Bogdan`, `bogdaniv`, `bogdan@gmail.com`,`0931413493`),
        new User(6, `Yura`, `yuriv`, `yura@gmail.com`,`0931481146`),
        new User(9, `Sashko`, `sashkov`, `sashko@gmail.com`,`0931452193` ),
        new User(10, `Artem`, `artemiv`, `artem@gmail.com`,`0931482102`)
    ];

console.log(UserArray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(UserArray.filter((x) => x.id % 2 ===0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(UserArray.sort((x1, x2) => x1.id - x2.id));

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


function Client ( id, name, surname , email, phone, order){
    User.call(this, id, name, surname , email, phone,)
    this.order = order
}
let ClientsArray = [
    new Client(2, `Pavlo`, `pavlov`, `pavlo@gmail.com`,`0931482193` , ["egg", "cheese", "fish", "meat", "cereals", "tomato", "carrot"]),
    new Client(3, `Vasil`, `vasiliv`, `vasil@gmail.com`,`0931412493` , ["cheese", "fish", "meat", "cereals", "tomato", "carrot"]),
    new Client(1, `Oleg`, `olegiv`, `oleg@gmail.com`,`0931282197` , ["egg", "fish", "meat", "cereals", "tomato", "carrot"]),
    new Client(8, `Vlad`, `vladiv`, `vlad@gmail.com`,`0937452113` , ["fish", "meat", "cereals", "tomato", "carrot"]),
    new Client(4, `Ruslan`, `ruslaniv`, `ruslan@gmail.com`,`0931492291` , ["egg", "cheese", "fish", "meat", "cereals"]),
    new Client(5, `Andriy`, `andriyv`, `andriy@gmail.com`,`0931462323` , ["egg", "cheese", "fish", "tomato", "carrot"]),
    new Client(7, `Bogdan`, `bogdaniv`, `bogdan@gmail.com`,`0931413493`,  ["egg", "carrot"]),
    new Client(6, `Yura`, `yuriv`, `yura@gmail.com`,`0931481146`, [ "cheese", "fish", "cereals",  "carrot"]),
    new Client(9, `Sashko`, `sashkov`, `sashko@gmail.com`,`0931452193`, ["meat", "cereals", "tomato", "carrot"]),
    new Client(10, `Artem`, `artemiv`, `artem@gmail.com`,`0931482102`, ["egg", "cheese", "fish", "meat", "cereals", "tomato", "carrot"])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortResult = ClientsArray.sort((x1, x2) => x1.order.length - x2.order.length);
console.log(sortResult);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let car1 = new Car("RS6", "Audi", 2013, 320, 4.0)
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
console.log("speed");
car1.info();
console.log("year");
car1.changeYear(3);
car1.info();
console.log("driver");
function Driver (name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
}
let driver = new Driver("Pavlo", 32, 2);
car1.addDriver("Ім'я: " + `${driver.name}  ` + "Вік: "+ `${driver.age}  ` +"Досвід: "+ `${driver.exp}`);
car1.info();

console.log("_______");

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class newCar {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = null;
    };
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    info (){
        for (const key in this) {
            if (typeof this[key] === 'function'){
                continue
            }
            console.log(`${key.toUpperCase()}: ${this[key]}`);
        }
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed
    };
    changeYear(newValue){
        this.year = this.year + newValue
    };
    addDriver(driver) {
        this.driver = driver;
    };
}
let car = new newCar("RS6", "Audi", 2013, 320, 4.0)
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log("speed");
car.info();
console.log("year");
car.changeYear(2);
car.info();
console.log("driver");
function Driver1 (name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
}
let driver1 = new Driver1("Pavlo", 32, 2);
car1.addDriver("Ім'я: " + `${driver.name}  ` + "Вік: "+ `${driver.age}  ` +"Досвід: "+ `${driver.exp}`);
car1.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let cinderella = [
    new Cinderella("olena", 22, 35.5),
    new Cinderella("katya", 21, 36),
    new Cinderella("anna", 25, 38),
    new Cinderella("ira", 21, 37.5),
    new Cinderella("veronika", 21, 36.5),
    new Cinderella("yulya", 27, 40),
    new Cinderella("olena", 18, 41),
    new Cinderella("oksana", 24, 40),
    new Cinderella("vika", 27, 39),
    new Cinderella("tanya", 19, 39.5),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince("Ruslan", 20, 37.5)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderellaSize of cinderella) {
    if (prince.foundShoe === cinderellaSize.footSize){
        console.log(`Принц знайшов свою попелюшку:` + `${cinderellaSize.name}`)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderella.find((cinderella) => cinderella.footSize === prince.foundShoe));