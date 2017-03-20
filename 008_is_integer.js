// напишите функцию которая возвращает true если num - целое
// иначе false

isInteger = function(n) {
	return n == (n ^ 0); // аналогичный результат можно получить
	// при помощи двойного побитового отрицания
}

console.log(isInteger(1));    // true
console.log(isInteger(1.5));  // false
console.log(isInteger(-0.5)); // false