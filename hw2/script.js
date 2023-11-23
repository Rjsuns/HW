// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 'a', true, null, undefined, {name: 'John'}, [1, 2, 3], NaN, Symbol('id'), 3<2];
console.log(array);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books1 = {
    title: 'From blood and ashes',
    pageCount: 300,
    genre: 'fantasy'
}

let books2 = {
    title: 'Doom Island',
    pageCount: 400,
    genre: 'fantasy'
}

let books3 = {
    title: 'Halloween party',
    pageCount: 300,
    genre: 'detective'
}

console.log(books1, books2, books3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books4 = {
    title: 'From blood and ashes',
    pageCount: 300,
    genre: 'fantasy',
    authors: [{
        name: 'Jennifer L. Armentrout',
        age: 40
    }]
};

let books5 = {
    title: 'Doom Island',
    pageCount: 400,
    genre: 'fantasy',
    authors: [{
        name: 'Stiven King',
        age: 76
    }]
}

let books6 = {
    title: 'Halloween party',
    pageCount: 300,
    genre: 'detective',
    authors: [{
        name: 'Agatha Kristy',
        age: 'died('
    }]
}

console.log(books4, books5, books6,)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'User 1', username: 'user1', password: 'pass1'},
    {name: 'User 2', username: 'user2', password: 'pass2'},
    {name: 'User 3', username: 'user3', password: 'pass3'},
    {name: 'User 4', username: 'user4', password: 'pass4'},
    {name: 'User 5', username: 'user5', password: 'pass5'},
    {name: 'User 6', username: 'user6', password: 'pass6'},
    {name: 'User 7', username: 'user7', password: 'pass7'},
    {name: 'User 8', username: 'user8', password: 'pass8'},
    {name: 'User 9', username: 'user9', password: 'pass9'},
    {name: 'User 10', username: 'user10', password: 'pass10'}
];
console.log(users[0] ['password']);
console.log(users[1] ['password']);
console.log(users[2] ['password']);
console.log(users[3] ['password']);
console.log(users[4] ['password']);
console.log(users[5] ['password']);
console.log(users[6] ['password']);
console.log(users[7] ['password']);
console.log(users[8] ['password']);
console.log(users[9] ['password']);

//Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x =+prompt('a');
    if (x !== 0) {
        console.log('Вірно');
    } else {
        console.log('Невірно');
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 44;
    if(time >= 0 && time <15){
        console.log('Перша четверть');
    }else if (time >= 15 && time <30){
        console.log('Друга четверть');
    }else if(time >=30 && time <45){
        console.log('Третя четверть');
    }else if(time >=45 && time <60){
        console.log('Черверта четверть');
    }else {
        console.log('Введіть число від 0 до 59');
    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 5;

if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('День повинен бути від 1 до 31');
}



//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Будь ласка, введіть число від 1 до 7');
}

//- Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.


let num1 = 5;
let num2 = 5;

if (num1 > num2) {
    console.log('Максимальне число: ' + num1);
} else if (num2 > num1) {
    console.log('Максимальне число: ' + num2);
} else {
    console.log('Числа рівні');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x2 = 0;

if (x2===false || x2===0 || isNaN(x2) || x2===undefined || x2===null){
    console.log('default');
}else{
    console.log(x);
}

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ': Супер');
} else if (coursesAndDurationArray[0].monthDuration === 5) {
    console.log(coursesAndDurationArray[0].title + ': Тривалість навчання становить 5 місяців');
} else {
    console.log(coursesAndDurationArray[0].title + ': Тривалість навчання менше 5 місяців');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ': Супер');
}  else {
    console.log(coursesAndDurationArray[1].title + ': Тривалість навчання менше 5 місяців');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ': Супер');
}  else {
    console.log(coursesAndDurationArray[2].title + ': Тривалість навчання менше 5 місяців');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[3].title + ': Тривалість навчання менше 5 місяців');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[4].title + ': Тривалість навчання менше 5 місяців');
}


if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[5].title + ': Тривалість навчання менше 5 місяців');
}