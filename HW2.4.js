
// Задание 1

for (let word = 0; word <= 1; word++) {
    alert("Привет")
}

//Задание 2
const n = 5;
for (let figure = 1; figure <= n; figure++) {
    alert(figure);

}

//задание 3

const a = 22;
for (let score = 7; score <= a; score++) {
    alert(score);

}

// Задание 4

let object = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'

}


for (x in object) {
    alert(x + " - зарплата " + object[x] + ' долларов');
}

//Задание 5

for (let l = 1000, num = 0; l > 50; num++) {
    l /= 2;
    alert(l);
    alert('Количество итераций =' + num);

}

// задание 6

const week = {
    'Понедельник': 1,
    'Вторник': 2,
    'Среда': 3,
    'Четверг': 4,
    'Пятница': 5,
    'Суббота': 6,
    'Воскресение': 7,



}

for (let day in week) {
    if (day == 'Пятница') {



        alert('Сегодня пятница ' + week[day] + "число. Необходимо подготовить отчет");
        weekscore += 1;
        while (week[day] <= 31) {
            week[day] += 7;
            alert('Сегодня пятница ' + week[day] + "число. Необходимо подготовить отчет");
        }



    }


}





