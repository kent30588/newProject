/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

//Мое решение

'use strict';

/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const lastМiewedЬovie = prompt('Один из последних просмотренных фильмов?', '');
const value = prompt('На сколько оцените его?', '');
const lastМiewedЬovie2 = prompt('Один из последних просмотренных фильмов?', '');
const value2 = prompt('На сколько оцените его?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {
		lastМiewedЬovie, value, lastМiewedЬovie2, value2 
	},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB);
*/


//Правильное решение

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};


//let a = prompt('Один из последних просмотренных фильмов?', '');
//let b = prompt('На сколько оцените его?', '');
//let c = prompt('Один из последних просмотренных фильмов?', '');
//let d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Частичное мое решения 1 -2 задач

/*
for (let i = 1; i < 3; i++){
	const a = prompt('Один из последних просмотренных фильмов?', '');
		if (a === '') {
			alert('введите большее количество символов');	
		}
	const b = prompt('На сколько оцените его?', '');
	personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
*/


//Правильное решение
/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('"Просмотрено довольно мало фильмов"');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);
*/

// мое решение циклом while
//let i = 2;
//while (i) {
//    let a = prompt('Один из последних просмотренных фильмов?', '');
//    let b = prompt('На сколько оцените его?', '');
//    i--;
//    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//        personalMovieDB.movies[a] = b;
//    } else {
//        i++;
//    }
//}

// мое решение задания №3

//let c = (personalMovieDB.count < 10) ? 'Просмотрено довольно мало фильмов' :
//    (personalMovieDB.count >= 10 < 30) ? 'Вы классический зритель' :
//    (personalMovieDB.count >= 30) ? 'Вы киноман' :
//    'Произошла ошибка';
//alert(c);

// Функции
//let num = 20;

//function showFirstMwssage(text) {
//    console.log(text);
//    // let num = 10;
//    console.log(num);
//}
//showFirstMwssage('Hello World!');
////console.log(num);

////console.log(calc(4, 9)); // 13
////console.log(calc(10, 9)); // 19
////console.log(calc(10, 25)); // 35

//function calc(a, b) {
//    return (a + b);
//}

//console.log(calc(4, 9)); // 13
//console.log(calc(10, 9)); // 19
//console.log(calc(10, 25)); // 35

//function ret() {
//    let num = 50;
//    //
//    //какой то код
//    //
//    return num;
//}

//const anotherNum = ret(); // присваеваем переменной результат выполнения функции
//console.log(anotherNum); //50


////log();
//const log = function() {
//    console.log('Hello!');
//};

//log();

<<<<<<< HEAD
// Методы и свойства строк и чисел

//const str = 'test';
//console.log(str.length);// покажет кол-во символов в переменной str

//const arr = [1, 2, 5, 7, 2];
//console.log(arr.length);// 5

//const str = 'teST';
//console.log(str.toUpperCase());// TEST
//console.log(str);//teST

//let a = str.toUpperCase();
//console.log(a);// TEST

//const fruit = 'Some fruit';
//console.log(fruit.indexOf('fruit'));//5

//const logg = 'Hello world';
//console.log(logg.slice(6, 11)); // world
//const a = logg.slice(6, 11);
//console.log(a);

//const logg = 'Hello world';
//console.log(logg.substr(6, 5));// второе значение в аргументах означет сколько символов нам нужно вырезать
////после первого аргумента

const num = 12.5;
console.log(Math.round(num));//13

const test = '13.7';
console.log(parseInt(test));//13


=======
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('"Просмотрено довольно мало фильмов"');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
    }
}
writeYourGenres();
>>>>>>> refs/remotes/origin/main
