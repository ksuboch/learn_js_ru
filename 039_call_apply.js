// Создайте функцию sumArgs(), которая будет суммировать все свои аргументы

function sumArgs() {
	return [].reduce.call(arguments, function(a, b) {
		return a + b;
	});
}

console.log(sumArgs(1, 2, 3));


// Напишите функцию applyAll(func, arg1, arg2...), 
// которая получает функцию func и произвольное количество аргументов.
// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, 
// начиная со второго, и возвратить результат.

function applyAll(func) {
	args = [].slice.call(arguments, 1); // применяем call, 
	// т.к. заранее известно количество аргументов
	return func.apply(this, args); // применяем apply,
	// т.к. мы хотим "распаковать" полученный массив args
	// и передать его функции func
}

function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log(applyAll(Math.max, 2, -2, 3)); // 3
console.log(applyAll(mul, 2, 3, 4)); // 24
console.log(applyAll(Math.max, 2, -2, 3)); // 3
console.log(applyAll(Math.min, 2, -2, 3)); // -2