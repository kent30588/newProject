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

// Объекты, диструктуризация объектов


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