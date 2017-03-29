// напишите функцию, которая возвращает десятичную часть числа

function getDecimal(num) {
	return (num - ~~num).toFixed(10);
}

console.log(getDecimal(12.345));
console.log(getDecimal(1.2));
console.log(getDecimal(-1.2));

// напишите функцию, вычисляющую число Фибоначчи по формуле Бине

function fibBinet(n) {
	return Math.round(Math.pow((1 + Math.sqrt(5))/2, n)/Math.sqrt(5));
}

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

console.log(fastFib(77));
console.log(fibBinet(77));

// напишите код для генерации случайного числа из интервала (0, max)

function rand_int1(max) {
	return Math.random() * max;
}

// напишите код для генерации случайного числа от min до max

function rand_int2(min, max) {
	return min + Math.random() * (max - min);
}

// напишите функцию для генерации случайного целого от min до max

function rand_int3(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}