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



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

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
rememberMyFilms();

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
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
    }
}
writeYourGenres();
*/

//                                                                       Практика

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

//Старый код
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();
*/

//const personalMovieDB = {
//	count: 0,
//	movies: {},
//	actors: {},
//	genres: [],
//	privat: false,
//	start: function () {
//		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//		}
//	},
//	rememberMyFilms: function () {
//		for (let i = 0; i < 2; i++) {
//			const a = prompt('Один из последних просмотренных фильмов?', '');
//			const b = prompt('На сколько оцените его?', '');

//			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//				personalMovieDB.movies[a] = b;
//				console.log('Done');
//			} else {
//				console.log('Error');
//				i--;
//			}
//		}
//	},
//	detectPersonalLevel: function () {
//		if (personalMovieDB.count < 10) {
//			alert('"Просмотрено довольно мало фильмов"');
//		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//			alert("Вы классический зритель");
//		} else if (personalMovieDB.count >= 30) {
//			alert("Вы киноман");
//		} else {
//			alert("Произошла ошибка");
//		}
//	},
//	showMyDB: function (hidden) {
//		if (!hidden) {
//			console.log(personalMovieDB);
//		}
//	},
//	toggleVisibleMyDB: function () {
//		if (personalMovieDB.privat) {
//			personalMovieDB.privat = false;
//		} else {
//			personalMovieDB.privat = true;
//		}
//	},
//	writeYourGenres: function () {
//		for (let i = 1; i < 4; i++) {
//			let a  = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
//			if (a == '' || a == null) {
//				i--;
//			} else {
//				personalMovieDB.genres[i - 1] = a;
//			}
//		}
//		personalMovieDB.genres.forEach((item, i,) =>{
//			i++;
//			console.log(`Любимый жанр № ${i} это - ${item}`);
//		});
//	}
//};

//Старый код
/*
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
rememberMyFilms();
*/
//Старый код
/*
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
detectPersonalLevel();
*/

//Старый код
/*
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
*/

//Старый код
/*
function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
    }
}
writeYourGenres();
*/