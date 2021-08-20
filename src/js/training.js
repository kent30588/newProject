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

function learnJS(lang, callback) {
	console.log(`Я учу язык ${lang}`);
	callback();
}

function done() {
	console.log('Я Callback функция');
}

learnJS('JavaScript', done)