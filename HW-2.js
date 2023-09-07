let a = 10;
alert(`Число ${a}`);
a = 20;
alert(`Число ${a}`);
const age = 2007;
alert(`Год выпуска первого iPhine ${age}`);
const name = 'Брендан Эйк';
alert(`Создатель языка JavaScript${name}`);
let x = 10;
let y = 2;
summ = x + y;
score = x - y;
product = x * y;
dividing = x / y;
alert(`Сумма чисел ${summ}`)
alert(`Вычитание чисел ${score}`)
alert(`Умножение чисел ${product}`)
alert(`Деление чисел ${dividing}`)
let number = 2;
result = 2**5;
alert(`Сетпень числа 2 ровняется ${result}`)
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num =+ 1;
num -= 1;
alert(num);
let ageUser = prompt('Сколько Вам лет?');
alert(`Вам ${ageUser} лет`);
let user = {
    name : 'Denis',
    age : 36,
    isAdmin : true
}
user.cityOfresidence = true;
user['age'] = 28;
delete user.cityOfresidence;
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info]);
let userName = prompt('Как Вас зовут?') 
alert(`Вас зовут ${userName}`);