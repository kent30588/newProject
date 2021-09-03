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