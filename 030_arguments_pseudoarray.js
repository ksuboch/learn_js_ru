// как в функции отличить отсутствующий аргумент от undefined

function f(x) {
	return +!!arguments.length;
}

console.log(f(undefined));
console.log(f());

// напишите функцию sum(...) которая возвращает сумму всех своих аргументов

function sum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));