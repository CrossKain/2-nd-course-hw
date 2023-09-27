

//Задание для кнопки играть

const month = () => {
    let userAnswerGame = prompt('Введите число месяца')
    if (userAnswerGame == 1 || userAnswerGame == 2 || userAnswerGame == 12) {
        alert('Зима');
    } else if (userAnswerGame >= 3 && userAnswerGame <= 5) {
        alert('Весна');

    } else if (userAnswerGame >= 6 && userAnswerGame <= 8) {
        alert('Лето');
    } else if (userAnswerGame >= 9 && userAnswerGame <= 11) {
        alert('Осень');
    } else {
        alert('Такое время года только в Вальгалле :)')
    }

}

const gameTwo = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];


gameTwo.sort(function () {
    return 0.5 - Math.random();
});

// Вывод массива

alert(gameTwo);

// Спрашиваем у пользователя

let userAnsverOne = prompt('Чему равнялся первый элемент массива?');
let userAnsverTwo = prompt('Чему равнялся последний элемент массива?');


if (userAnsverOne === gameTwo[0] && userAnsverTwo === gameTwo[gameTwo.length - 1]) {
    alert("Поздравляем! Вы угадали оба элемента!");
} else if (userAnsverOne === gameTwo[0] || userAnsverTwo === gameTwo[gameTwo.length - 1]) {
    alert("Вы были близки к победе!");
} else {
    alert("Вы ответили неверно.");
}