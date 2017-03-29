// напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n

function sumTo(n) {
	return n == 1 ? 1 : n + sumTo(n - 1);
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

// напишите функцию factorial(n), которая возвращает факториал числа n

function factorial(n) {
	return n == 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// напишите функцию fib(n), вычисляющую n-е число Фибоначчи

function fib(n) {
	return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
console.log(fib(7));
// console.log(fib(77));

// реализовать вычисление чисел Фибоначчи через цикл

function fastFib(n) {
	if (n <= 2) {
		return 1;
	}

	var fibn_1 = 1,
		fibn_2 = 1,
		fibn;

	for (var i = 3; i <= n; i++) {
		fibn = fibn_2 + fibn_1;
		fibn_2 = fibn_1;
		fibn_1 = fibn;
	}

	return fibn;
}

console.log(fastFib(3));
console.log(fastFib(7));
console.log(fastFib(77));