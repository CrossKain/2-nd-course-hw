
//Задание 1
let str = 'Строка';
str = str.toUpperCase();
console.log(str)

// Задание 2
function searchStart(arr, prefix) {
    return arr.filter(str => str.toLowerCase().startsWith(prefix.toLowerCase()));

}
const result = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
const result2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
const result3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

console.log(result, result2, result3)

// Задание 3

function integer(Value) {
    return Math.floor(Value);
}

console.log(integer(32.58884))

function integer2(Value) {
    return Math.ceil(Value);
}

console.log(integer2(32.58884))

function integer3(Value) {
    return Math.round(Value);
}

console.log(integer3(32.58884))

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log("Наименьшее число:", minNumber);
console.log("Наибольшее число:", maxNumber);


//задание 5

function randomNumber(a, b) {
    return Math.ceil(Math.random() * 10);

}
console.log(randomNumber(1, 10))


//Задание 6

function generateRandomArray(num) {
    var array = [];
    var length = num / 2;

    for (var i = 0; i < length; i++) {
        var randomNum = Math.floor(Math.random() * num);
        array.push(randomNum);
    }

    return array;
}

var resultF = generateRandomArray(6);
console.log(resultF);

// Задание 7

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}


console.log(getRandomNumber(1, 10));


//Задание 8

let currentDate5 = new Date();
console.log(currentDate5);

// Задание 9

let currentDate1 = new Date();
currentDate1.setDate(currentDate1.getDate() + 73);
console.log(currentDate1)


// Задание 10

function formatDateTime(date) {
    let weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekday = weekdays[date.getDay()];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let formattedDate = `Дата: ${day} ${month} ${year} - это ${weekday}.`;
    let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formattedDate}\n${formattedTime}`;
}

const currentDate = new Date();
const formattedDateTime = formatDateTime(currentDate);
console.log(formattedDateTime);

