// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log(string1.length);
console.log(string2.length);
console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
string1 = 'hello world';
string2 = 'lorem ipsum';
string3 = 'javascript is cool';
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
string1 = 'HELLO WORLD';
string2 = 'LOREM IPSUM';
string3 = 'JAVASCRIPT IS COOL';
console.log(string1.toLowerCase());
console.log(string2.toLowerCase());
console.log(string3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string  '
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

str = 'Ревуть воли як ясла повні';
let  stringToarray = (str) => str.split(" ");
let arr = stringToarray(str);
console.log(arr)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

    let numMap = [10,8,-7,55,987,-1011,0,1050,0];
    console.log(numMap.map(String));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];
let sortNums = (nums, derection) =>{
    if (derection === 'asc'){
        nums.sort(function(a, b) {
            return a - b;
        });
    }else if (derection === 'desc'){
        nums.sort(function(a, b) {
            return b - a;
        });
    }else {
        nums.sort(function(a, b) {
            return a - b;
        });
    }
    return nums
}
let sortedDescending = sortNums(nums, 'desc');
console.log(sortedDescending);
let sortedAscending = sortNums(nums,'asc');
console.log(sortedAscending);

// ==========================)
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

let descending = coursesAndDurationArray.sort((x1, x2) => {
    return x2.monthDuration - x1.monthDuration;
})
console.log(descending);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterMonth = coursesAndDurationArray.filter((x) => {
    return x.monthDuration > 5;
})
console.log(filterMonth)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let transformedArray = coursesAndDurationArray.map((course, index) => {
    return {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
});
console.log(transformedArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];


// - знайти піковий туз

let aceOfSpades = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);

// - всі шістки

let sixes = cards.filter(card => card.value === '6');
console.log(sixes);

// - всі червоні карти

let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

// - всі буби

let clubs = cards.filter(card => card.cardSuit === 'clubs');
console.log(clubs);

// - всі трефи від 9 та більше

let highSpades = cards.filter(card => card.cardSuit === 'spade' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(highSpades);


// =========================

    // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт


let cardsBySuit = cards.reduce((result, card) => {
    result[card.cardSuit].push(card);
    return result;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log('Карти по "мастях":', cardsBySuit);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

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

// --написати пошук всіх об'єктів, в який в modules є sass

let sassModules = coursesArray.filter((x) =>{
    for (const x1 of x.modules) {
        if (x1 === 'sass'){
            return x1
        }
    }
});
console.log(sassModules);

// --написати пошук всіх об'єктів, в який в modules є docker


let dockerModules = coursesArray.filter((x) =>{
    for (const x1 of x.modules) {
        if (x1 === 'docker'){
            return x1
        }
    }
});
console.log(dockerModules);