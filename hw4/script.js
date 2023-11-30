// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(a, b) {
    let result = a * b;
    console.log(result);
    return result;
}

rectangleArea(4, 8);

// - створити функцію яка обчислює та повертає площу кола з радіусом r


function circleArea(r) {
    let result = Math.PI * r * r;
    console.log(result);
    return result;
}

circleArea(5);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


function cylinderArea(r, h) {
    let result = 2 * Math.PI * r * (r + h);
    console.log(result);
    return result;
}

cylinderArea(5, 10);
// - створити функцію яка приймає масив та виводить кожен його елемент

function ArrayElements(...item) {
    for(const array of item) {
        console.log(array);
    }
}

ArrayElements(...[1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function parWithText(p){
   document.write(`<p> ${p} </p>`)
}

parWithText('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text) {
    document.write('<ul>');
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write(`<li> ${text} </li>`);
    document.write('</ul>');
}

createList('Everybody');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function createList2(text, num) {
    document.write('<ul>');
    for(let i = 0; i < num; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write('</ul>');
}

createList2('Hi again', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


const mixArr = [11, true, "Perfecto"];
function arrayList(element){
    document.write(`<ul>`);
    for (const elementElement of element) {
        document.write(`<li>`+`${elementElement}`+`</li>`);
    }
    document.write(`</ul>`);
}
arrayList(mixArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    { id: 1, name: 'Petro', age: 21 },
    { id: 2, name: 'Andriy', age: 25 },
    { id: 3, name: 'Serhiy', age: 23 },
];
function usersArray(array){
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<div>`+`ID: ${arrayElement.id}<br>`+`Name:  ${arrayElement.name} <br>`+`Age: ${arrayElement.age} </div>`);
    }
}
usersArray(users)


// - створити функцію яка повертає найменьше число з масиву


function minNum(numArr) {
    for (const num of numArr) {
        if (num < numArr[0]) {
            numArr[0] = num;
        }
    }
    return numArr[0];
}
console.log(minNum([15,20, -3, -0.5 , 69]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArr = [1, 2, 10]
function sum(arr){
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}
console.log(sum(sumArr));



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap([11, 22, 33, 44], 1, 2));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for(let i = 0; i < currencyValues.length; i++) {
        if(currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}

console.log(exchange(10000, [{currency:'USD', value:40}, {currency:'EUR', value:42}], 'USD')); // => 250