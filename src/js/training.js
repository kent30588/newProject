'use strict';

////callback функции

//function first() {
//	//какойто код , который долго выполняется
//	setTimeout(function () {
//		console.log(1);

//	}, 500);
//}

//function second() {
//	console.log(2);
//}

//first();
//second();

//function learnJS(lang, callback) {
//	console.log(`Я учу язык ${lang}`);
//	callback();
//}

//function done() {
//	console.log('Я Callback функция');
//}

//learnJS('JavaScript', done);

//let name = "Ilya";

//alert( `hello ${1}` ); 

//alert( `hello ${"name"}` ); 

//alert( `hello ${name}` ); 

//                                                                                  Функции
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

//                                                                            Методы и свойства строк и чисел

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

//const num = 12.5;
//console.log(Math.round(num));//13

//const test = '13.7';
//console.log(parseInt(test));//13

//                                                                                        Массивы
//const arr = [1, 2, 3, 6, 8];
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);
//arr.pop();
//arr.push(2);
//console.log(arr);
//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//for (let a of arr) {
//    console.log(a);
//}
//arr.forEach(function(item, i) {
//    console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//const str = prompt('', '');
//const products = str.split(', ');
//products.sort();
//console.log(products.join(':'));
//function compareNum(a, b) {
//    return a - b;
//}
//const arr = [10, 13, 9, 1, 8, 12];
//arr.sort(compareNum);
//console.log(arr);
//let a = 5;
//let b = a;
//b = b + 5;
//console.log(b);
//console.log(a);

//const obj = {
//    a: 5,
//    b: 1
//};
//const copy = obj; // Ссылка на объект
//copy.a = 10;
//console.log(copy);
//console.log(obj);

//function copy(mainObj) {
//    //создаем новый объект
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//        objCopy[key] = mainObj[key];
//    }
//    return objCopy;
//}

//const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//        x: 7,
//        y: 4
//    }
//};

//const newNumbers = copy(numbers); // клонирование объекта

//newNumbers.a = 10;
//console.log(newNumbers);
//console.log(numbers);

//const add = {
//    t: 7,
//    k: 2
//};

//const clone = Object.assign({}, add);
//clone.t = 20;
//console.log(clone);
//console.log(add);

//const oldArray = ['a', 'b', 'c'];
//let copyArray = oldArray.slice();
//copyArray[1] = 'asdasdasd';
//console.log(oldArray);
//console.log(copyArray);

//const video = ['youtube', 'vimeo', 'rutube'];
//const blogs = ['wordpress', 'livejournal', 'blogger'];
//const internet = [...video, ...blogs, 'vk', 'facebook'];

//console.log(internet);

//function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
//}

//const num = [2, 5, 7];
//log(...num);

//const array = ['a', 'b'];
//const newAarray = [...array];

//const q = {
//    one: 1,
//    two: 2,
//};

//const n = {...q };

//console.log(n);

//                                                              Объекты, диструктуризация объектов


// создание объекта
//const options = {
//	name: 'test',
//	width: 1024,
//	height: 1024,
//	colors: {
//		border: 'black',
//		bg: 'red'
//	},
//	makeTest: function () {// создали метод
//		console.log('Test');
//	}
//};

////options.makeTest();//Запускаем метод выведет test
////Деструктуризация
//let { border, bg } = options.colors;//Вытаскиваем свойства из объекта и записываем их в переменные
//border = 'red';
//bg = 'black';

//console.log(border);//
//console.log(bg);


//console.log(Object.keys(options));//Выведет ключи объекта в виде массива[ 'name', 'width', 'height', 'colors' ]
//console.log(Object.keys(options).length);// Выведет количество ключей (свойств) в объекте.
//console.log(options.name);// выведет test
//console.log(options['colors']['border']);// выведет black
//delete options.name;// удалим свойство name из объекта
//console.log(options);

//чтобы перебрать все свойства объекта, создаем конструкцию for in
//let counter = 0; // переменная для счетчика свойств
//for (let key in options) {
//    if (typeof(options[key]) === "object") { // если како-либо ключ имеет значение object а в нашем случае это colors , выполнять действия
//        for (let i in options[key]) { // перебор свойства colors и остальных если такие будут
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); // {options[key][i]} - дает нам возможность достучаться до объекта в объекте
//            counter++; // для пересчета свойст
//        }
//    } else {
//        console.log(`Свойство ${key} имеет значение ${options[key]}`); // выведет Свойство name имеет значение test Свойсто width имееет значение 1024 и т.д.
//        counter++; // для пересчета свойст
//    }
//}
//console.log(counter); //выведет 5

//let salaries = {
//	John: 100,
//	Ann: 160,
//	Pete: 130
//};

//                          Основы ООП, прототипно-ориентированное наследование

//let str = 'some';
//let strObj = new String('aasdd');

//console.log(typeof (str));
//console.log(typeof (strObj));
//console.log(str);
//console.log(strObj);

//console.dir([1, 2, 3]);

//const solider = {
//	health: 400,
//	armor: 100,
//	sayHello: function () {
//		alert('Hello');
//	}
//};

//const soliderJhon = Object.create(solider);// создаем объект с указанным прототипом с помощью метода Object.create()


////const soliderJhon = {
////	health: 100
////};

////Object.setPrototypeOf(soliderJhon, solider);

////soliderJhon.__proto__ = solider;
//console.log(soliderJhon);
////console.log(soliderJhon.armor);
//soliderJhon.sayHello();
/*
//                                               Динамическая типизация - то возможность одного типа данных превращаться в другой тип данных
//To String
//1) способ - Редко используемый способ
//console.log(typeof (String(null)));//строка
//console.log(typeof (String(4)));// строка
////2)способ - Конкатинация
//console.log(typeof (5));// Number
//console.log(typeof (5 + ""));// String 
//const num = 5;
//console.log('https://vk.com/catalog/' + num);// String
////To Number
////1) способ- Редко используемый способ
//console.log(typeof (Number('4')));
////2) способ-Унарный плюс
//console.log(typeof (+'4'));
////Metod
//console.log(typeof (parseInt('4px', 10)));

//To Boolean

// 0, '', null, undefined, Nan : Всегда false
//1 способ-
//let swither = null;
//if (swither) {
//	console.log('Working...');// не выполнится , т.к. swither = false
//}

//swither = 1;
//if (swither) {
//	console.log('Working...');// Изменилось значение на true>программа запустится
//}

////2 способ-
//console.log(typeof (Boolean(4)));

////3 способ-
//console.log(typeof (!!'22222'));


// Решение задачек

//•	Какое будет выведено значение: let x = 5; alert( x++ ); ? = 5 т.к. при такой записи x++ вернет значение переменной, а в этом случае ++x выведет 6
//let x = 5;
//alert(x++);
//•	Чему равно такое выражение: [ ] + false - null + true ? = NaN
//console.log([] + false); // String false т.к. пустой массив это строка а при конкотинации строки с любым типом данных итог будет строка. В данном случае получается что то типо "false"
//console.log([] + false - null); // Number
//console.log([] + false - null + true); //NaN

//•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? // = 2 т.к. переменной x присваивается значение y которое = 2. 
//let y = 1;
//let x = y = 2;
//alert(x);

//•	Чему равна сумма [ ] + 1 + 2? = 12 т.к. пустой массив это строка, а когда строка складывается с другим типом данных , все превращается в строку
//console.log([] + 1 + 2);

//•	Что выведет этот код: alert( "1"[0] )? = 1 т.к '1' идет под индексом 0 в массиве 
//alert("1" [0]);

//•	Чему равно 2 && 1 && null && 0 && undefined ? = null когда оператор && обрабатывает эту запись он идет слева на права , и когда доходит до null а null это (false)
// , дальше когд не пойдет и вернет значение null. Т.е. & - запинается на лжи || - запинается на правде
//console.log(2 && 1 && null && 0 && undefined);

//•	Есть ли разница между выражениями? !!( a && b ) и (a && b)? = да . (!!(a && b)) это булиновое значение(true) 
//console.log(!!(1 && 2));
//console.log(1 && 2);

//•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ? = 3 т.к. по приоритету операторов сработает оператор или 2 или 3 , и вернет правду в виде 3. Дальше идет сравнение 
// null или 3 , вернет 3 в виде правды, дальше 3 или 4 , вернется 3 
//alert(null || 2 && 3 || 4);

//•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? = false т.к. это 2 разных хранилища информации т.е массива

//let a = [1, 2, 3];
//let b = [1, 2, 3];
//console.log(a == b);

//•	Что выведет этот код: alert( +"Infinity" ); ?  = Infinity / + преобразует строку в Number 
//alert(+"Infinity");

// •	Верно ли сравнение: "Ёжик" > "яблоко"? = false

//•	Чему равно 0 || "" || 2 || undefined || true || falsе ? = 2 т.к. 0 - false, пустая строка false, 2 - true, дальше код не идет
//console.log(0 || "" || 2 || undefined || true || falsе);
*/

//                                             Получение элементов со страницы DOm (объектная модель документа)
//Получаем по ID
//const box = document.getElementById('box'); // Получаем элемент с id box
//console.log(box);
////Получение по тегам

//const btns = document.getElementsByTagName('button');// Получим коллекцию из элементов с тегом button (псевдомассив) - без методов
////Даже если тег будет на страницы в единственном экземпляре
//btns[1].style.background = 'red';

////Получаем элемент по классу
//const circles = document.getElementsByClassName('circle');// Получаем псевдомассив
//console.log(circles);


////Более совершенные методы
//const heart = document.querySelectorAll('.heart');// получаем все эелементы с классом .heart
//console.log(heart);
//heart.forEach(item => {
//	console.log(item);
//});

//const oneHeart = document.querySelector('.heart');// получим первый элемент 
//console.log(oneHeart);

//                                                            Действия с элементами на странице

//const box = document.getElementById('box');
//const btns = document.getElementsByTagName('button');
//const circles = document.getElementsByClassName('circle');
//const hearts = document.querySelectorAll('.heart');
//const oneHeart = document.querySelector('.heart');
//const wrapper = document.querySelector('.wrapper');

////console.dir(box);
//box.style.backgroundColor = 'blue'; //Инлайн стили
//box.style.width = '500px';
//box.style.cssText = 'background-color: blue; width: 500px;';
//let width = 200;
//box.style.cssText = `background-color: blue; width: ${width}px;`;
//btns[1].style.borderRadius = '100%';
//circles[0].style.backgroundColor = 'red';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}
//hearts.forEach(item => {
//    item.style.backgroundColor = 'blue';
//});

// Создаем элемент
//const div = document.createElement('div'); // создали Элемент который видно только в JS
//div.classList.add('black'); //элементу div назначаем стили по селектору .black
//document.body.append(div); // добавили элемент div на страницу в конец body

//document.querySelector('.wrapper').append(div);
//wrapper.append(div);
//wrapper.appendChild(div);


//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);

// удалить элемент объект
//circles[0].remove();
//wrapper.remove();

// один элемент заменить другим

//hearts[0].replaceWith(div); // заменили первое сердечко на прямоугольник div
//hearts[0].replaceWith(circles[1]);

//Редактирование элементов

//div.innerHTML = 'Hello World';
//div.innerHTML = "<h1>Hello World</h1>";
//div.textContent = '<h1>Hello World</h1>'; // добавляет только текст. Использовать нужно если мы четко знаем что от пользователя мы хотим получить только текст

//div.insertAdjacentHTML('beforebegin', "<h2>Hello</h2>");

//                                     Задачки
//Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

//let a = 10;
//if (a == 10) {
//	console.log('Верно');
//} else (
//	console.log('Неверно')
//);

// В переменной min лежит число от 0 до 59. 
//Определите в какую четверть часа попадает это число(в первую, вторую, третью или четвертую).

//let min = +prompt('Введите чилсло от 0 до 59', '');

//if (min <= 14) {
//	console.log('первая');
//} else if (min >= 15 && min <= 29) {
//	console.log('вторая');
//} else if (min >= 30 && min <= 44) {
//	console.log('третья');
//} else if (min >= 45 && min <= 59) {
//	console.log('четвертая');
//} else {
//	console.log('введите число от 0 до 59');
//}

//Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', 
//то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском.Решите задачу через 2 if,
//через switch-case и через многомерный массив без ифов и switch.


//let lang = 'ru';
//let arr;

//if
//if (lang === 'ru') {
//	arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//} else if (lang === 'en') {
//	arr = ['asdasd', 'zxczxc', 'сqweqwe', 'dfgdfg', 'cvbcvb', 'qwesfdg', 'sgfdgfdg'];
//} else {
//	alert('Вы не указали язык');
//}
//console.log(arr);

//swich
//switch (lang) {
//	case 'ru':
//		arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//		break;
//	case 'en':
//		arr = ['asdasd', 'zxczxc', 'сqweqwe', 'dfgdfg', 'cvbcvb', 'qwesfdg', 'sgfdgfdg'];
//		break;
//	default:
//		alert('Вы не указали язык');
//}
//console.log(arr);

//многомерный массиы
//let leng = 'en';
//let arr = {
//	'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//	'en': ['asdasd', 'zxczxc', 'сqweqwe', 'dfgdfg', 'cvbcvb', 'qwesfdg', 'sgfdgfdg']
//};
//console.log(arr[leng]);


//Если переменная a равна нулю, то выведите 'Верно', 
//иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

//let a = 100;
//if (a == 0) {
//	console.log('верно');
//} else {
//	console.log('неверно');
//}

//Если переменная a больше нуля, то выведите
//'Верно', иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

//let a = 1;

//if (a > 0) {
//	console.log('Верно');
//} else {
//	console.log('Неверно');
//}

//Если переменная a меньше нуля, то выведите
//'Верно', иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.
//let a = 0;

//if (a < 0) {
//	console.log('Верно');
//} else {
//	console.log('Неверно');
//}

//Если переменная a больше или равна нулю, то выведите 'Верно',
//	иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

//let a = -3;

//if (a >= 0) {
//	console.log('верно');
//} else {
//	console.log('неверно');
//}

//Если переменная a меньше или равна нулю, то выведите 'Верно',
//	иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

//let a = 1;
//if (a <= 0) {
//	console.log('верно');
//} else {
//	console.log('неверно');
//}

//Если переменная a не равна нулю, то выведите 'Верно', 
//иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

//let a = 1;
//if (a != 0) {
//	console.log('верно');
//} else {
//	console.log('неверно');
//}

//Если переменная a равна 'test', то выведите 'Верно',
//	иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 'test', 'тест', 3.

//let a = 3;
//if (a == 'test') {
//	console.log('Верно');
//} else {
//	console.log('неверно');
//}

//Если переменная a равна '1' и по значению и по типу, то выведите 'Верно',
//	иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном '1', 1, 3.

//let a = 3;
//if (a === '1') {
//	console.log('Верно');
//} else {
//	console.log('неверно');
//}

//Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'
//Проверьте работу скрипта при test, равном true, false.

//let test = false;
//if (test == true) {
//	console.log('верно');
//} else {
//	console.log('неверно');
//}

//Если переменная test не равна true, то выведите 'Верно', 
//иначе выведите 'Неверно'.Проверьте работу скрипта при test, равном true, false.

//let test = false;
//if (test != true) {
//	console.log('Верно');
//} else {
//	console.log('неверно');
//}

//Если переменная a больше нуля и меньше 5 - ти, то выведите 'Верно',
//	иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 5, 0, -3, 2.

//let a = -1;

//if (a > 0 && a < 5) {
//	console.log('Верно');
//} else {
//	console.log('Неверно');
//}

//Если переменная a равна нулю или равна двум, то прибавьте к ней 7, 
//иначе поделите ее на 10. Выведите новое значение
//переменной на экран.Проверьте работу скрипта при a, равном 5, 0, -3, 2.

//let a = 120;

//if (a == 0 || a == 2) {
//	console.log(a + 7);
//} else {
//	console.log(a / 10);
//}

//Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//	то выведите сумму этих переменных, иначе выведите их разность(результат вычитания).
//	Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

//let a = 6;
//let b = 2;
//if (a <= 1, b >= 3) {
//	console.log(a + b);
//} else {
//	console.log(a - b);
//}

//Если переменная a больше 2 - х и меньше 11 - ти,
//	или переменная b больше или равна 6 - ти и меньше 14 - ти, то выведите 'Верно',
//		в противном случае выведите 'Неверно'.

//let a = 5;
//let b = 20;
//if (a > 2 && a < 11 || b >= 6 && b < 14) {
//	console.log('Верно');
//} else {
//	console.log('Неверно');
//}

//Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
//Если она имеет значение '1', то в переменную result запишем 'зима',
//	если имеет значение '2' – 'весна' и так далее.Решите задачу через switch-case.

//let num = 4;
//let result;
//switch (num) {
//	case 1:
//		result = 'зима';
//		break;
//	case 2:
//		result = 'весна';
//		break;
//	case 3:
//		result = 'лето';
//		break;
//	case 4:
//		result = 'осень';
//		break;
//	default:
//		console.log('введите число от 1 до 4');
//		break;
//}
//console.log(result);

//В переменной day лежит какое-то число из интервала от 1 до 31. 
//Определите в какую декаду месяца попадает это число(в первую, вторую или третью).

//let day = 15;
//if (day >= 1 && day <= 10) {
//	console.log('первая');
//} else if (day >= 11 && day <= 20) {
//	console.log('Вторая');
//} else if (day >= 21 && day <= 31) {
//	console.log('Третий');
//}

//В переменной month лежит какое - то число из интервала от 1 до 12. 
//Определите в какую пору года попадает этот месяц(зима, лето, весна, осень).

//let month = 11;

//if (month >= 12 && month <= 12) {
//	console.log('зима');
//} else if (month >= 3 && month <= 5) {
//	console.log('весна');
//} else if (month >= 6 && month <= 8) {
//	console.log('лето');
//} else if (month >= 9 && month <= 11) {
//	console.log('осень');
//}

//Дана строка, состоящая из символов, например, 'abcde'.Проверьте,
//	что первым символом этой строки является буква 'a'.
//Если это так - выведите 'да', в противном случае выведите 'нет'.

//let a = 'abcde';
//if (a[0] == 'a') {
//	console.log('да');
//} else {
//	console.log('нет');
//}

//Дана строка с цифрами, например, '12345'.
//	Проверьте, что первым символом этой строки является цифра 1, 2 или 3. 
//	Если это так - выведите 'да', в противном случае выведите 'нет'.

//let a = '8234345';
//if (a[0] == '1' || a[0] == '2' || a[0] == '3') {
//	console.log('да');
//} else {
//	console.log('нет');
//}

//Дана строка из 3 - х цифр. 
//Найдите сумму этих цифр.То есть сложите как числа первый символ строки, второй и третий.

//let str = '565';


//let a = +str[0];
//let b = +str[1];
//let c = +str[2];

//console.log(a + b + c);

//if (str.length > 1) {
//	let result = Number(str[0]) + Number(str[1]) +  Number(str[2]);
//	console.log(result);
//} else {
//	console.log('нет');
//}

//let str = '565';
//let number = str.split([]);
//let number = '7945';
//let sum = 0;
////number.forEach(function (item, i, number) {
//////	console.log(`${i}: ${item} внутри массива ${number}`);
//////});
//for(var i=0;i<number.length;i++){
//    sum = sum + Number(number[i]);
//}
//console.log(sum);

// Задачи на циклы while, for в JavaScript

//Задача. Выведите столбец чисел от 1 до 50.

//for (let i = 1; i <= 50; i++){
//	console.log(i);
//}

//let i = 0;
//while (i < 50) {
//	i++;
//	console.log(i);
//}

//Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

//let arr = [1, 2, 3, 4, 5];
//for (let i = 0; i < arr.length; i++){
//	console.log(arr[i]);
//}

//Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.

//let arr = [2, 3, 4, 5];
//let result = 1;

//for (let i = 0; i < arr.length; i++){
//	result = result * arr[i];
//}
//console.log(result);

//Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
//С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

//let obj = {
//	Минск: 'Беларусь',
//	Москва: 'Россия',
//	Киев: 'Украина'
//};
//console.log(obj);

//for (let keys in obj) {
//	console.log(`${keys} это ${obj[keys]}`);
//}

//Циклы while и for Решите эти задачи сначала через цикл while, а затем через цикл for.
//Выведите столбец чисел от 1 до 100.

//let i = 1;
//while (i<=100) {
//	console.log(i);
//	i++;
//}

//for (let i = 1; i <= 100; i++){
//	console.log(i);
//}

//Выведите столбец чисел от 11 до 33.
//let i = 11;
//while (i <= 32) {
//		i++;
//	console.log(i);
//}

//for (let i = 11; i <= 33; i++){
//	console.log(i);
//}

// Выведите столбец четных чисел в промежутке от 0 до 100.
//let i = 0;
//while (i <= 100) {
//	i++;
//	if (i % 2 == 0) {
//		console.log(i);
//	}
//}

//for (let i = 0; i <= 100; i++){
//	if (i % 2 == 0) {
//		console.log(i);
//	}
//}

//С помощью цикла найдите сумму чисел от 1 до 100.
//let i = 1;
//let sum = 0;

//while (i <= 100) {
//	sum += i;
//		i++;
//}
//console.log(sum);

//let sum = 0;
//for (let i = 1; i <= 100; i++){
//	sum += i;
//}
//console.log(sum);

//Работа с for для массивов
//Дан массив с элементами [1, 2, 3, 4, 5]. 
//С помощью цикла for выведите все эти элементы на экран

//let arr = [1, 2, 3, 4, 5];
//for (let i = 0; i < arr.length; i++){
//	console.log(arr[i]);
//}

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for 
//найдите сумму элементов этого массива.Запишите ее в переменную result.
//let arr = [1, 2, 3, 4, 5];
//let result = 0;
//for (let i = 0; i <= arr.length; i++){
//	//result = result + i;
//	result += i;
//}
//console.log(result);

//Работа с for-in
// Дан объект obj.С помощью цикла for-in выведите на экран ключи 
// и элементы этого объекта.

//let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

//for (let key in obj) {
//	console.log(`${key} ${obj[key]}`);
//}

// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. 
//С помощью цикла for-in выведите на экран строки такого формата:
//'Коля - зарплата 200 долларов.'.

//let obj = { Коля: '200', Вася: '300', Петя: '400' };

//for (let key in obj) {
//	console.log(`${key} - зарплата ${obj[key]} долларов`);
//}

//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if 
//выведите на экран столбец тех элементов массива, которые больше 3 - х, но меньше 10.

//let arr = [2, 5, 9, 15, 0, 4];
//for (let i = 0; i <= arr.length; i++){
//	if (arr[i] >= 3 && arr[i] < 10 ) {
//		console.log(arr[i]);
//	}
//}

//Дан массив с числами. Числа могут быть положительными 
//и отрицательными.Найдите сумму положительных элементов массива.

//let arr = [2, -5, 45, -7, 10, 5, -3];
//let result = 0;
//for (let i = 0; i <= arr.length; i++){
//	if (arr[i] > 0) {
//		result += arr[i];
//	}
//}
//console.log(result);

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
//С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
//	равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла.
//	Если нет - ничего делать не надо.

//let arr = [1, 2, 5, 9, 4, 13, 4, 10];
//for (let i = 0; i < arr.length; i++){
//	if (arr[i] == 4) {
//		console.log('Есть');
//		break;
//	}
//}

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
//Выведите на экран только те числа из массива,
//	которые начинаются на цифру 1, 2 или 5.

//let arr = [10, 20, 30, 50, 235, 3000];
//for (let i = 0; i <= arr.length; i++) {
//	if (String(arr[i]).startsWith(1)  || String(arr[i]).startsWith(2) || String(arr[i]).startsWith(5)) {
//		console.log(arr[i]);
//	}
//}
////Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
////С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for (let i = 0; i < arr.length; i++) {
//    document.write(`-${arr[i]}`);
//}
//document.write('-');

//const str = '51555';
//const sum = str
//	.split('')
//	.map(Number);
//	//.reduce((prev, curr) => prev + curr, 0);
//console.log(sum);


//let str = '5151515151';
//let result = 0;
//let i = 0;
//while (i < str.length) {
//	result += Number(str[i]);
//	i++;
//}
//console.log(result);


//let number = '222';
//let f = 0;
//for (let i = 0; i < number.length; i++){
//	f = f + Number(number[i]);
//}
//console.log(f);
//console.log(f);

//                                События и их обработчики

//const btn = document.querySelector('button');
//const overlay = document.querySelector('.overlay');
//btn.onclick = function () {// так делать не нужно
//	alert('Привет, ты нажал на кнопку');
//};
// Добавляем обработчик событий -> (1 аргумент название события 'click' , callback функция() => )
//btn.addEventListener('mouseenter', () => {
//	alert('Привет, ты нажал на кнопку');
//});

//btn.addEventListener('click', (event) => {
//	event.target.style.backgroundColor = 'red';
//});
//btn.removeEventListener('click', (event) => {
//	event.target.style.backgroundColor = 'red';
//});

//удаление собитыя
//let i = 0;
//const deletElement = (e) => {
//	console.log(e.target);
//	i++;
//	if (i == 1) {
//		btn.removeEventListener('click', deletElement);
//	}
//};
////клик на кнопку -> запуск функции с кодом console.log(e/target)-> срабатывает if условие и удаляет обработчик
//btn.addEventListener('click', deletElement);
// Всплытие событий


//const deletElement = (e) => {
//	console.log(e.target);
//	console.log(e.type);
//};
//btn.addEventListener('click', deletElement);
//overlay.addEventListener('click', deletElement);

//Отмена стандартного поведения в браузере

//const link = document.querySelector('a');

//link.addEventListener('click', function (event) {
//	//для того что бы отменить стандартное поведение
//	event.preventDefault();
//	console.log(event.target);
//});

//                                   Навигация по DOm- элементам data -атрибуты. Преимущество for / of

//console.log(document.documentElement);
//console.log(document.head);
//console.log(document.body);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);
//console.log(document.querySelector('#current').parentNode);
//console.log(document.querySelector('#current').parentNode.parentNode);
//console.log(document.querySelector('[data-current="3"]'));
//console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);
//console.log(document.querySelector('[data-current="3"]').previousSibling);


//                         Действия с элементами на странице

//const box = document.getElementById('box'),
//    btns = document.getElementsByTagName('button'),
//    circlse = document.getElementsByClassName('circle'),
//    hearts = document.querySelectorAll('.heart'),
//    oneHeart = document.querySelector('.heart'),
//    wrapper = document.querySelector('.wrapper');

//box.style.backgroundColor = 'green';
//box.style.width = '500px';

//btns[1].style.borderRadius = '100%';

//const div = document.createElement('div');
//div.classList.add('black');
//wrapper.prepend(div);
//hearts[0].after(div);
//circlse[0].remove();
//hearts[0].replaceWith(circlse[0]);
//div.innerHTML = '<h3>Hello</h3>';
//div.textContent = 'Hello';
//div.insertAdjacentHTML('afterend', '<h3>Hello</h3>');

//                                                ClassList и делегирование собитий

//const btns = document.querySelectorAll('button'),
//    wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(0));
//добавить класс
//console.log(btns[4].classList.add('red'));
//удалить класс
//btns[0].classList.remove('blue');
//добавить класс если его нет, удалить если есть
//btns[1].classList.toggle('blue');
//btns.forEach(item => {
//    item.addEventListener('click', () => {
//        item.classList.toggle('red');
//    });
//});
// проверить есть класс или нет
//console.log(btns[4].classList.add('red'));
//if (btns[4].classList.contains('red')) {
//    console.log('Такой класс есть');
//}
//-----
//btns[0].addEventListener('click', () => {
//    // if (!btns[1].classList.contains('red')) {
//    //     btns[1].classList.add('red');
//    // } else {
//    //     btns[1].classList.remove('red');
//    // }

//});

//wrapper.addEventListener('click', (event) => {
//    if (event.target && event.target.matches('button.red')) {
//        console.log('hello');
//    }
//});

//btns.forEach(btn => {
//    btn.addEventListener('click', () => {
//        console.log('hello');
//    });
//});

//const btn = document.createElement('button');
//btn.classList.add('red');
//wrapper.append(btn)

//                                        Скрипты и время их выполнения setTimeout и setInterval
//const btn = document.querySelector('.btn');
//let timerId;
//let i = 0;

//function myAnimation() {
//	const elem = document.querySelector('.box');
//	let pos = 0;
//	const id = setInterval(frame, 10);
//	function frame() {
//		if (pos == 300) {
//			clearInterval(id);
//		} else {
//			pos++;
//			elem.style.top = pos +'px';
//			elem.style.left = pos +'px';
//		}
//	}
//}

//btn.addEventListener('click', myAnimation);


//btn.addEventListener('click', () => {
//	//const timerId = setTimeout(logger, 500);
//	timerId = setInterval(logger, 500);
//});


//function logger() {
//	if (i === 4) {
//		clearInterval(timerId);
//	}
//	console.log('Привет');
//	i++;
//}


//let id = setTimeout(function log() {
//	console.log('Привет');
//	id = setTimeout(log, 500);
//}, 500);

//                                  Работа с датами

//const now = new Date();// покажет текущ. дат. и врем.
//const now = new Date('2021-09-28');//2021-09-28T00:00:00.000Z
//const now = new Date(2021, 8, 28, 20);
//const now = new Date('2021-09-28');
//console.log(now.setHours(40));
//console.log(now);

//console.log(now.getFullYear());//метод getFullYear() получить тек. год
//console.log(now.getMonth());// получ. тек. месяц 
//console.log(now.getDate());// получ. тек. день
//console.log(now.getDay());// номер дня недели
//console.log(now.getHours());//тякущий час
//console.log(now.getUTCHours());//0 пояс

//console.log(now.getTimezoneOffset());// разница в минутах от 0 пояса
//console.log(now.getTime());

//let start = new Date();
//for (let i = 0; i < 100000; i++){
//	let some = i ** 3;
//}

//let end = new Date();

//alert(`Цикл отработал за ${end - start} миллисекунд`);

//                       параметры документа, окна и работа с ними

//const box = document.querySelector('.box');
//const btn = document.querySelector('button');
//const width = box.clientWidth;
//const height = box.clientHeight;

//const width = box.offsetWidth;
//const height = box.offsetHeight;

//const width = box.scrollWidth;
//const height = box.scrollHeight;
//console.log(width, height);

//btn.addEventListener('click', () => {
//	box.style.height = box.scrollHeight + 'px';
//	//box.style.height = '100%';
//	console.log(box.scrollTop);
//});

//console.log(box.getBoundingClientRect().top);

//const style = window.getComputedStyle(box);

//console.log(style.display);

//console.log(document.documentElement.scrollTop);

//                    Функции-Конструкторы	
//function User(name, id) {
//	this.name = name;
//	this.id = id;
//	this.human = true;
//	this.hello = function () {
//		console.log(`Hello ${this.name}`);
//	};
//}
//User.prototype.exit = function () {
//	console.log(`Пользователь ${this.name} ушел`);
//};
//const ivan = new User('Ivan', 28);
//const alex = new User('Alex', 20);

//ivan.exit();

//ivan.hello();
//alex.hello();

//console.log(ivan);
//console.log(alex);

//                Контекст вызова This
// 1) Обычная функция : this = window; но если стоит use strict = undefined
//function showThis() {
//	console.log(this);
//}

//showThis();

//function showThis(a, b) {
//	console.log(this);
//	function sum() {
//		console.log(this);
//		return a + b;
//	}
//	console.log(sum());
//}

//showThis(4, 5);

//2) Контекст у методов объекта - сам объект
//const obj = {
//	a: 2,
//	b: 15,
//	sum: function () {
//		function shout() {
//			console.log(this);
//		}
//		shout();
//	}
//};

//obj.sum();

//3)this в конструкторах и классах - это новый экземпляр объекта
//function User(name, id) {
//	this.name = name;
//	this.id = id;
//	this.human = true;
//}
//let ivan = new User('Ivan', 30);

//4)Ручная привязка this: call, apply, bind
//function sayName(surname) {
//	console.log(this);
//	console.log(this.name + surname);
//}

//const user = {
//	name: 'Alex'
//};

//sayName.call(user, 'Smitt');
//sayName.apply(user, ['Smitt']);

//function count(num) {
//	return this * num;
//}

//const double = count.bind(2);
//console.log(double(3));
//console.log(double(13));

//const btn = document.querySelector('button');

//btn.addEventListener('click', function() {
//	this.style.backgroundColor = 'red';
//});

//const obj = {
//	num: 5,
//	sayNamber: function () {
//		const say = () => {
//			console.log(this.num);
//		};
//		say();
//	}
//};

//obj.sayNamber();

//const double = a => a * 2;
//console.log(double(4));


//Классы (ES6)

//class Rectangle {
//	constructor(height, width) {
//		this.height = height;
//		this.width = width;
//	}
//	calcArea() {
//		return this.height * this.width;
//	}
//}

//class ColoredRectangleWithText extends Rectangle {
//	constructor(height, width, text, bgColor) {
//		super(height,width);
//		this.text = text;
//		this.bgColor = bgColor;
//	}
//	showMyProps() {
//		console.log(`Текс: ${this.text}, цвет ${this.bgColor}`);
//	}
//}

//const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
//div.showMyProps();
//console.log(div.calcArea());

//const squere = new Rectangle(15, 15);
//const a = new Rectangle(50, 23);

//console.log(squere.calcArea());
//console.log(a.calcArea());

//const animal = {
//	name: 'Animal',
//	age: 5,
//	hasTail: true
//};

//class Animal {

//	static type = 'ANIMAL';

//	constructor(options) {
//		this.name = options.name;
//		this.age = options.age;
//		this.hasTail = options.hasTail;
//	}
//	voice() {
//		console.log('I am Animal');
//	}
//}

////const animal = new Animal({
////	name: 'Animal',
////	age: 5,
////	hasTail: true
////});


//class Cat extends Animal {
//	static type = 'CAT'
//	constructor(options) {
//		super(options);
//		this.color = options.color;
//	}
//	voise() {
//		super.voice();
//		console.log('I am Cat');
//	}
//	get ageInfo() {
//		return this.age * 7;
//	}
//	set ageInfo(newAge) {
//		this.age = newAge;
//	}
//};
//const cat = new Cat({
//	name: 'Cat',
//	age: 7,
//	hasTail: true,
//	color: 'Black'
//});

//class Component {
//	constructor(selector) {
//		this.$el = document.querySelector(selector);
//	}
//	hide() {
//		this.$el.style.display = 'none';
//	}
//	show() {
//		this.$el.style.display = 'block';
//	}
//}

//class Box extends Component {
//	constructor(options) {
//		super(options.selector);
//			this.$el.style.width = this.$el.style.height = options.size + 'px';
//			this.$el.style.backgroundColor= options.color;
		
//	}
//}

//const box1 = new Box({
//	selector: '#box1',
//	size: 100,
//	color: 'red'
//});

//const box2 = new Box({
//	selector: '#box2',
//	size: 120,
//	color: 'blue'
//});

//const btn = document.querySelector('button');
//btn.addEventListener('click', function () {
//	box1.hide();
//});

//class Circle extends Box{
//	constructor(options) {
//		super(options);
//		this.$el.style.borderRadius = '50%';
//	}
//}

//const c = new Circle({
//	selector: '#circle',
//	size: 90,
//	color: 'green'
//});
//               JSON формат передачи данных, глубокое клонирование объектов

//const persone = {
//	name: 'Alex',
//	tel: '+79260700593',
//	parents: {
//		mom: 'Olga',
//		dad: 'Mike'
//	}
//};
//console.log(persone);
//console.log(JSON.stringify(persone));
//console.log(JSON.parse(JSON.stringify(persone)));
//создаем клон объекта 
//const clone = JSON.parse(JSON.stringify(persone));
//clone.parents.mom = 'Ann';
//console.log(persone);
//console.log(clone);


//                                          AJAX и общение с сервером

//const inputRub = document.querySelector('#rub'),
//	inputUsd = document.querySelector('#usd');

//inputRub.addEventListener('input', () => {
//	const request = new XMLHttpRequest();

//	request.open('GET', 'js/current.json');
//	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//	request.send();
//	request.addEventListener('load', () => {
//		if (request.status === 200) {
//			//console.log(request.response);
//			const data = JSON.parse(request.response);
//			//console.log(data);
//			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//		} else {
//			inputUsd.value = 'Попробуйте чуть позже';
//		}
//	});
//});

//                             promise

//console.log('Запрос данных');
////resolve - выполнилось правильно,reject- не выполнилось
//const req = new Promise((resolve, reject) => {
//	//Имитация запроса на сервер
//	setTimeout(() => {

//		console.log('Подготовка данных...');
//		const product = {
//			name: 'TV',
//			price: 2000
//		};
//		resolve(product);
//	}, 2000);
//});
////Этот метод выполнится в случае положительного исхода
//req.then((product) => {
//	return new Promise((resolve, reject) => {
//		setTimeout(() => {
//			product.status = 'Заказан';
//			resolve(product);
//		}, 2000);
//	});
//}).then(data => {
//	data.modify = true;
//	return data;
//}).then(data => {
//	console.log(data);
//	//cath выполнится при какой то ошибке
//}).catch(() => {
//	console.error('Произошла ошибка');
//	//finally выполнится в любом случае
//}).finally(() => {
//	console.log('Finally');
//});


//const test = time => {
//	return new Promise(resolve => {
//		setTimeout(() => resolve(), time);
//	});
//};

////test(2000).then(() => console.log('2000'));
////test(3000).then(() => console.log('3000'));
////Ждем загрузки всех промисов и только тогда чт от оделаем
//Promise.all([test(2000), test(3000)]).then(() => {
//	console.log('All');
//});
////race выполняет свои действия как только первый промис отработал правильно
//Promise.race([test(2000), test(3000)]).then(() => {
//	console.log('All');
//});

//                    Методы перебора массивов

//filter

//const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemars'];

//const filterNames = names.filter(elem => elem.length <= 5);

//console.log(names);

//map

//const answers = ['IvAn', 'AnnA', 'HellO'];

//const result = answers.map(elem => elem.toLowerCase());
//console.log(result);

//reduce

//const arr = [4, 5, 1, 3, 2, 6];

//const res = arr.reduce((sum, current) => sum + current, 10);

//console.log(res);

//const arr = ['apple', 'pear', 'plum'];

//const res = arr.reduce((sum, current) => `${sum}, ${current}`);

//console.log(res);

//const obj = {
//	ivan: 'persone',
//	ann: 'persone',
//	dog: 'animal',
//	cat: 'animal'
//};

//const newArr = Object.entries(obj)
//	.filter(item => item[1] === 'persone')
//	.map(item => item[0]);

//console.log(newArr);


                                    // Работа с localStorage
										
//const checkbox = document.querySelector('#checkbox');
//const form = document.querySelector('form');
//const change = document.querySelector('#color');

//if (localStorage.getItem('isChecked')) {
//	checkbox.checked = true;
//}

//if (localStorage.getItem('bg') === 'changed') {
//	form.style.backgroundColor = 'red';
//}

//checkbox.addEventListener('change', () => {
//	localStorage.setItem('isChecked', true);
//});

//change.addEventListener('click', () => {
//	if (localStorage.getItem('bg') === 'changed') {
//		localStorage.removeItem('bg');
//		form.style.backgroundColor = '#fff';
//	} else {
//		localStorage.setItem('bg', 'changed');
//		form.style.backgroundColor = 'red';
//	}
//});

//const persone = {
//	name: 'Alex',
//	age: 25
//};

//const serializedPersone = JSON.stringify(persone);

//localStorage.setItem('Alex', persone);

//console.log(localStorage.getItem('Alex'));

//                             Регулярные выражения

//new RegExp('pattern', 'flags');
///pfttern/f

//const ans = prompt('Введите число');
//const reg = /\d/ig;
//console.log(/n/ig.test(ans));
//console.log(ans.match(reg));

//console.log(ans.search(reg));
//console.log(ans.match(/n/ig));

//const pass = prompt('Ваш пароль');

//console.log(pass.replace('a', '*'));

//console.log('12-34-56'.replace(/-/g, ':'));

//const str = 'My name is R2D2';

//console.log(str.match(/\s/ig));


//                  геттеры и сеттеры (свойства объектов)

//const persone = {
//	name: 'Alex',
//	age: 25,

//	get userAge() {
//		return this.age;
//	},

//	set userAge(num) {
//		this.age = num;
//	}
//};

//console.log(persone.userAge = 30);
//console.log(persone.userAge);

//                             Инкопсуляция
//код без инкапсуляции
/*
function User(name, age) {
	this.name = name;
	this.age = age;

	this.say = function () {
		console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
	};
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30;
ivan.name = 'Alex';
ivan.say();
*/
//Тот же код с инкапсуляцией

//class User {
//	constructor (name, age){
//		this.name = name;
//		this._age = age;
//	}

//	say() {
//		console.log(`Имя пользователя ${this.name}, возраст ${this._age}`);
//	}

//	get age() {
//		return this._age;
//	}

//	set age(age) {
//		if (typeof age === 'number' && age > 0 && age < 110) {
//			this._age = age;
//		} else {
//			console.log('Недопустимое значение');
//		}
//	}
//}

//const ivan = new User('Ivan', 27);
//console.log(ivan.age);
//ivan.age = 99;
//console.log(ivan.age);
//ivan.say();


//                 Прием Модуль

//const number = 1;

//(function () {
//	let number = 2;
//	console.log(number);
//	console.log(number +3);
//}());

//console.log(number);

//const user = (function () {
//	const privat = function () {
//		console.log('Приватная функция');
//	};

//	return {
//		sayHello: privat
//	};
//}());

//user.sayHello();

//             Ошибки try/catch

//try {
//	console.log('Normal');
//	console.log(a);
//} catch (error) {
//	console.log(error.name);
//	console.log(error.message);
//	console.log(error.stack);

//}

//console.log('Still normal');

//function* generator() {
//	yield 'S';
//	yield 'c';
//	yield 'r';
//	yield 'i';
//	yield 'p';
//	yield 't';

//}

//const src = generator();
//console.log(src.next().value);

//function* count(n) {
//	for (let i = 0; i < n; i++){
//		yield i;
//	}
//}

//for (let k of count(7)) {
//	console.log(k);
//}

//const counter = count(7);
//console.log(counter.next().value);
//console.log(counter.next().value);
//console.log(counter.next().value);
//console.log(counter.next().value);


//                     Работа с анимацией  requestAnimationFrame

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;
// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

//function myAnimation() {
//	pos++;
//	elem.style.top = pos + "px";
//	elem.style.left = pos + 'px';

//	if (pos < 300) {
//		requestAnimationFrame(myAnimation);
//	} 
//}
 
//btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

//let id = requestAnimationFrame(myAnimation);
//cancelAnimationFrame(id);

//                     Event loop фсинхронные и синхронные операции

//console.log(1);//синхронная команда

//setTimeout(() => {
//	console.log('Таймаут');
//}, 4000);//асинхронная команда

//setTimeout(() => {
//	console.log('Таймаут_4000');
//}, 4000);

//console.log(2);

setTimeout(() => {
	console.log(1);
}, 0);

console.log(2);