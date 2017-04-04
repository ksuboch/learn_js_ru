// что будет выведено?

say("Vasia"); // "Vasia undefined"

var phrase = "Hello";

function say(name) {
	console.log(name + " " + phrase);
}

// в какую переменную будет присвоено значение?
// каким быдет результат выполнения?

var value = 0;

function f() {
	if (1) {
		value = true;
	} else {
		var value = false;
	}

	console.log(value); 
}

f(); // true
console.log(value); // 0

// какой будет результат выполнения кода?

function test() {
	console.log(window);

	var window = 5;

	console.log(window);
}

test(); // undefined  5

// каков будет результат выполнения кода?

// var a = 5 // 5 is not a function

// (function () {
// 	console.log(a);
// })()

// Если во внутренней функции есть своя переменная с именем currentCount
// Можно ли в ней получить currentCount из внешней функции?

function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
    // нет, локальная переменная перекроет глобальную
  };
}

// что выведут эти вызовы, если переменная currentCounter находится вне makeCounter

var currentCount = 1;

function makeCounter() {
	return function() {
		return currentCount++;
	}
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2

console.log(counter2()); // 3
console.log(counter2()); // 4