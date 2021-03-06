// напишите функцию sum, которая работает так: sum(a)(b) = a + b

function sum(a) {
	return function(b) {
		return a + b;
	}
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

// Задача – реализовать строковый буфер на функциях в JavaScript, 
// со следующим синтаксисом:
// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, 
// которая при вызове buffer(value) добавляет значение в некоторое 
// внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.

function makeBuffer() {
	var buf = [];
	return function(word) {
		if (word !== undefined) {
			buf.push(word);
		} else {
			return buf.join("");
		}
	}
}

function makeBuffer2() {
	var text = '';
	return function(piece) {
		if (arguments.length == 0) {
			return text;
		}
		text += piece;
	}
}

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log(buffer()); // Замыкания Использовать Нужно!

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);
console.log(buffer()); // '010'

// добавьте буферу метод clear, который будет очищать его содержимое

function makeBuffer3() {
	var text = '';
	function bufer(piece) {
		if (arguments.length == 0) {
			return text;
		}
		text += piece;
	}
	bufer.clear = function() {
		text = '';
	}
	return bufer;
}

var buffer = makeBuffer3();
buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест
buffer.clear();
console.log(buffer()); // ""

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];


function byField(name) {
	return function(a, b) {
		if (name in a && name in b) {
			return a[name] > b[name] ? 1 : -1;
		}
		return 0;
	}
}


users.sort(byField('name'));
users.forEach(function(user) {
  console.log(user.name);
}); // Вася, Маша, Петя

console.log();

users.sort(byField('age'));
users.forEach(function(user) {
  console.log(user.name);
}); // Маша, Вася, Петя

// Создайте функцию filter(arr, func), которая получает массив arr 
// и возвращает новый, в который входят только те элементы arr, 
// для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», 
// inArray([...]) – "в массиве [...]". Использование должно быть таким:
// filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) – выберет только элементы, 
// совпадающие с одним из значений массива.

function filter(arr, func) {
	var tmp = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			tmp.push(arr[i]);
		}
	}
	return tmp;
}

function inBetween(a, b) {
	return function(x) {
		return (a <= x) && (x <= b);
	}
}

function inArray(arr) {
	return function(x) {
		return arr.indexOf(x) != -1;
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); // 1,2