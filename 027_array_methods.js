var obj = {
	className: "open menu"
}

// создайте функцию addClass(obj, cls) которая добавляет в список
// cclassName имя класса, если его там ещё нет

function addClass(obj, cls) {
	// if (!!obj.className.indexOf(cls)) {
	// 	var className = obj.className.split(" ");
	// 	className.push(cls);
	// 	obj.className = className.join(" ");
	// }

	var classNames = obj.className ? obj.className.split(" ") : [];

	for (var i = 0; i < classNames.length; i++) {
		if (classNames[i] == cls) return;
	}

	classNames.push(cls);

	obj.className = classNames.join(" ");
}

addClass(obj, "new");
addClass(obj, "open");
addClass(obj, "me");

console.log(obj);

// напишите функцию camelizre(str) которая преобразует строки вида 
// "my-short-string" в "myShortString"

function camelize(str) {
	var parts = str.split("-");
	for (var i = 1; i < parts.length; i++) {
		if (parts[i]) {
			parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
		}
	}
	return parts.join("");
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

// напишите функцию removeClass, которая удаляет класс cls, если он есть

function removeClass(obj, cls) {
	var classNames = obj.className ? obj.className.split(" ") : [];

	var i = 0;
	while (i < classNames.length) {
		if (classNames[i] == cls) {
			classNames.splice(i, 1);
		} else {
			i++;
		}
	}

	obj.className = classNames.join(" ");
}

obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');
console.log( obj.className );

// создать функцию filterRangeInPlace(arr, a, b), котрая получает массив
// с числами и удаляет из него все числа вне диапазона a..b

function filterRangeInPlace(arr, a, b) {
	var i = 0;
	while (i < arr.length) {
		if (a <= arr[i] && arr[i] <= b) {
			i++;
		} else {
			arr.splice(i, 1);
		}
	}
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
console.log( arr );

// как отсортировать массив в обратном порядке

var arr = [5, 2, 1, -10, 8];
console.log(arr);

// как отсортировать массив в обратном порядке

var arr = [5, 2, 1, -10, 8];
arr.sort(function(a, b) {
	return -(b - a);
})

console.log(arr);

// скопируйте и отсортируйте массив

var arr = ["HTML", "JavaScript", "CSS"];

arrSorted = arr.slice().sort();
console.log(arrSorted);

// отсортируйте массив в случайном порядке

var arr = [1, 2, 3, 4, 5];

console.log(arr.sort(function() {return Math.random() - 0.5}));

// отсортируйте массив объектов people по полю age

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

console.log(people.sort(function(a, b) {return a.age - b.age}));

// напишите функцию aclean(arr), которая возвращает массив без анаграмм

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
	var tmp = {};

	for (var i = 0; i < arr.length; i++) {
		var keyName = arr[i].toLowerCase().split("").sort(function(a,b) { return a < b? -1 : 1}).join("");
		if (!tmp[keyName]) {
			tmp[keyName] = arr[i];
		}
	}

	var resArr = [];
	for(var key in tmp) {
		resArr.push(tmp[key]);
	}

	return resArr;
}

console.log(aclean(arr));

// напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные
// элементы arr

function unique(arr) {
	var tmp = {};
	for (var i = 0; i < arr.length; i++) {
		if (!tmp[arr[i]]) {
			tmp[arr[i]] = true;
		}
	}

	var resArr = [];
	for (var key in tmp) {
		resArr.push(key);
	}
	return resArr;
}

var strings = ["кришна", "кришна", "харе", "харе", 
			   "харе", "харе", "кришна", "кришна", "8-()"];
console.log(unique(strings));