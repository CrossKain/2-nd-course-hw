

//Задание для кнопки играть

const month = () => {
    let userAnswerGame = prompt('Введите число месяца')
    if (userAnswerGame == 1 || userAnswerGame == 2 || userAnswerGame == 12) {
        alert('Зима');
    } else if (userAnswerGame >= 3 && userAnswerGame <= 5) {
        alert('Весна');
        
    }else if (userAnswerGame >=6 && userAnswerGame <=8) {
        alert('Лето');
    }else if (userAnswerGame >= 9 && userAnswerGame <= 11){
        alert('Осень');
    }else {
        alert( 'Такое время года только в Вальгалле :)')
    }
    
}
