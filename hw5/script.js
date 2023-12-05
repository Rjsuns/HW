// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(8, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) => 3.14 * (r * r);
console.log(circleArea(8));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h, r) => 2 * 3.14 * r * h;
console.log(cylinderArea(8, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr= (ArrayElements) =>{
    for (const item of ArrayElements) {
        console.log(item)
    }
}
arr([18, 22, "Hello"]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let parWithText = (text) =>{
    document.write(`<p>`+`${text}`+`</p>`)
}
parWithText("Hello!")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list1 = (li) =>{
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>` + li + `</li>`)
    }
    document.write(`</ul>`);
}
list1("one")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list2 = (li, numLi) =>{
    document.write(`<ul>`);
    for (let i = 0; i < numLi; i++) {
        document.write(`<li>` + li + `</li>`)
    }
    document.write(`</ul>`);
}
list2("two", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mixArr = (arr) =>{
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>` + `${arr[i]}` + `</li>`)
    }
    document.write(`</ul>`);
}
mixArr([1, false, "Idk"])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersArray = (user) => {
    for (const userElement of user){
        document.write(`<div>`+"ID:  "+`${userElement.ID},`+"   Name:  "+`${userElement.Name},` +"  Age:   "+`${userElement.Age}`+`</div>`)

    }
}
usersArray([{ID: 1, Name: "Petro", Age:31},{ID:2, Name:"Adriy", Age: 25},{ID:3, Name:"Serhiy", Age: 23}]);
// - створити функцію яка повертає найменьше число з масиву
let minNum = (num) =>{
    let min = num[0];
    for (let i = 1; i < min.length; i++) {
        const minElement = min[i];
        if (minElement > num[0]){
        }
    }
    return min
}
let number1 = minNum([10,18,28,35]);
document.write(number1)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        const ell = arr[i];
        num += arr[i];
    }
    return num
}

console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}
console.log(swap([11, 22, 33, 44], 1, 2));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues, exchangeCurrency) => {
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency){
            return sumUAH / curr.value
        }
    }
}
let resultExchange= exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log(resultExchange);