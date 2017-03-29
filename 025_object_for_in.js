// создайте функцию, которая возвращает true, если в объекте нет свойств
// и false если хоть одно свойство есть

function isEmpty(obj) {
	return !Object.keys(obj).length;
}

var schedule = {};

console.log(isEmpty(schedule));
schedule["8:30"] = "Hello";

console.log(isEmpty(schedule));
delete schedule["8:30"];

console.log(isEmpty(schedule));

// есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат

var salaries = {
	"Vasia": 100,
	"Peter": 300,
	"Dan"  : 250
};

function salarySum(obj) {
	var sum = 0;
	for (var name in obj) {
		sum += obj[name];
	}
	return sum;
}

console.log(salarySum(salaries));

// выведите имя сотрудника с наибольшей зарплатой

var maxName = "", maxSalary = 0;

for (var name in salaries) {
	if (salaries[name] > maxSalary) {
		maxSalary = salaries[name];
		maxName = name;
	}
}

console.log(maxName);

// создайте функцию multiplyNumeric, которая умножает все численные свойства на 2

var menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
	for (var key in obj) {
		if (isNumeric(obj[key])) {
			obj[key] *= 2;
		}
	}
}

multiplyNumeric(menu);

console.log(menu);