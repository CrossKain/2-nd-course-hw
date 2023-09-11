const password = 'пароль';
let getPass = prompt("Введите пароль");
getPass = getPass.toLocaleLowerCase();
if (getPass === password) {
    alert("пароль введен верно")

} else {
    alert("пароль введен неверно")
}


// Задание номер два


const c = 5;
(c > 0 && c < 10) ? alert('Верно') : alert('Неверно');

//задание номер 3

const d = 4;
const e = 5;

(d > 100 || e > 100) ? alert('Верно') : alert('неверно');


//задание номер 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));


//задание 5

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case "1": alert('Зима')

        break;
    case "2": alert('Зима')

        break; case "3": alert('Весна')

        break; case "4": alert('Весна')

        break; case "5": alert('Весна')

        break; case "6": alert('Лето')

        break; case "7": alert('Лето')

        break; case "8": alert('Лето')

        break; case "9": alert('осень')

        break; case "10": alert('осень')

        break; case "11": alert('осень')

        break; case "12": alert('Зима')

        break;
    default:
        alert('такого месяца нет')
        break;
}


//Дополнительные Задания

const userNumber = Number (prompt('Введите Ваше число'));

if (isNaN(userNumber)) {
    alert('Введите число!');
} else if (userNumber % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}


// Дополнительное два

