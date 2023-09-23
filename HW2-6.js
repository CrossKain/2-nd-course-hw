
// Задание 1
const ten = [1, 5, 4, 10, 0, 3];
for (let figure of ten) {
    if (figure === ten[4])
        break
    console.log(figure)


}

//Задание 2

const four = [1, 5, 4, 10, 0, 3];
const index = four.indexOf(4)
console.log(index)


//Задание 3

const figures = [1, 3, 5, 10, 20];
figur = figures.join(' ');
console.log(figur)

//Задание 4

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
        arr[i].push(1)
    }
}
console.log(arr);

// Задание 5

const two = [1, 1, 1];
two.push(2,2,2);
console.log(two)


//Задание 6

const delA = [9, 8, 7, 'a', 6, 5];
delB = ([...delA].sort().pop())
console.log(delB)

//задание 7

const answer = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадайте число'));
for (let i of answer) {
    if (userAnswer === i) {
        alert('Угадал');
        break;
    }

    else {
        alert('Не угадал')
    }

}



// Задание 8

const reversStr = "abcdef";
console.log([...reversStr].reverse().join(''))


//Задание 9

const array = [
    [1, 2, 3,],
    [4, 5, 6]
];
const result = [].concat(...array);

console.log(result);


// Задание 10

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < newArray.length - 1; i++) {
    const sum = newArray[i] + newArray[i + 1];
    console.log("Сумма", newArray[i], "и", newArray[i + 1], "равна", sum);
}


// Задание 11

const massive = [4, 5, 6, 7];
const number = (massive) => {
    return massive.map(x => x ** 2)
}
console.log(number(massive))


// Задание 12

const massivString = ['как же', 'меня', 'выморожаивает', 'гребанная', 'джаваскрипт', 'просто', 'пздц'];


function getWordLengths(massivString) {
    return massivString.map(word => word.length);
}

// const wordLengths = getWordLengths(massivString);
// console.log(wordLengths);


//Задание 13

function filterPositive(array) {
    return array.filter(number => number < 0)

}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

// Задание 14
let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 10))+1;

}
const evenNumbers = randomArray.filter(el => el % 2 === 0);
    console.log(evenNumbers)


// Задание 15

let randomArr = [];
for (let i = 1; i < 6; i++) {
    randomArr.push(Math.floor(Math.random() * 10))+1;
}

const total = randomArr.reduce((a, b) => a + b);
const totalAverage = total / randomArr.length;
console.log("Массив:", randomArr);
console.log("Среднее арифметическое:", totalAverage);