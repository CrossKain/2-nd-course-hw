// Задание 1

function comparison(a, b) {
    if (b >= a) {
        return(a);

    } else {
        alert('Первое число больше')
    }

} 
comparison(9, 8);

// Задание 1-1 Вариация 

const comparisonTwo = (a, b) => {
    (a >= b) ? alert(b) : alert('Первое число больше второго. Вывод невозможен');
}
comparisonTwo(6, 6);   



// Задание 2

const number = (a) => {
    if (a % 2 == 0){
        return 'Число четное'
    }else {
        return('Число не четное')
    }

}
number(127)


// Задание 3.1

const square = (a) => a**2;

console.log(square(12));

// Задание 3.2
const AnswerSquare = (a) => {
    return a**2;


}

AnswerSquare(54)


// Задание 4

const Hello = () => {
    let userAnswer = prompt('Сколько Вам лет ?');
    if (userAnswer <= 12) {
        alert('Привет, Друг');

    } else if (userAnswer >= 13) {
        alert('Добро Пожаловать!')

    } else if (isNaN(userAnswer)) {
        alert('Введите число')
    }

}
Hello();

// Задание 5

const Check = (a, b) => {
    if (isNaN(a) || isNaN(b)){
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }

}

alert(Check("6", "6"))

// Задание 6

const chekNumber = () => {
    let userChekNumber = prompt('Введите число');
    if (isNaN(userChekNumber)) {
        return('Переданный параметр не является числом')
    } else  {
        let cubeAnswer = Math.pow(userChekNumber, 3);
        return(userChekNumber + ' в кубе равняется '+ cubeAnswer)


    }


}

chekNumber();

// Задание 7

let circle1 = {
    radius: 6,
    getArea(){
        return Math.PI * this.radius ** 2;

    },
    getPerimeter(){
        return 2 * Math.PI * this.radius;
}
    


}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());



let circle2 = {
    radius: 9,
    getArea(){
        return Math.PI * this.radius ** 2;

    },
    getPerimeter(){
    return 2 * Math.PI * this.radius;
}

}

console.log(circle2.getArea());
console.log(circle2.getPerimeter());

// Задание 8

const month = (a) => {
    if (a >= 1 || a ===2 || a === 12) {
        return'Зима';
    } else if (a >= 3 && a <= 5) {
        return'Весна';
        
    }else if (a >=6 && a <=8) {
        return'Лето';
    }else if (a >= 9 && a <= 11){
        return'Осень';
    }else {
        return 'Такое время года только в Вальгалле :)'
    }
    
}

console.log(month('0'))