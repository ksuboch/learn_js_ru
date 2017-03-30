// как получить последний элемент произвольного массива

var a = Array(1, 2, 3, 4, 5);
console.log(a[a.length - 1]);

// как добавить элемент в конец произвольного массива

a.push(6);
console.log(a);

// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика».
// Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его.
// Добавьте в начало значения «Рэп» и «Регги».

var styles = Array("jazz", "blues");
console.log(styles);

styles.push("rock-n-roll")
console.log(styles);

styles.splice(-2, 1, "classic");
console.log(styles);

console.log(styles.shift());
styles.unshift("rap");
styles.unshift("raggie");
console.log(styles);

// получите случайное значение из массива

function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomFromArray(styles));

// создайте функцию find(arr, value), которая ищет в массиве arr значение value
// и возвращает его номер, если найдено, или -1, если нет

var arr = ["test", 2, 1.5, false];

function find(arr, elem) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === elem) return i;
	}
	return -1;
}

console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1

// создайте функцию, filterRange(arr, a, b) которая возвращает массив, содержащий
// только элементы из диапазона [a, b]

function filterRange(arr, a, b) {
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		if (a <= arr[i] && arr[i] <= b) {
			res.push(arr[i]);
		}
	}
	return res;
}

var arr = [5, 4, 3, 8, 0];
console.log(filterRange(arr, 3, 5));

// реализуйте решето Эратосфена

var arr = [];
for (var i = 1; i <= 100; i++) {
	arr[i - 1] = i;
}

var p = 2;
while (p * p <= 100) {
	var q = 2;
	while (p * q <= 100) {
		i = arr.indexOf(p * q);
		if (~i) arr.splice(i, 1);
		q += 1;
	}
	p += 1;
}

console.log(arr);

// найти непрерывный подмассив, сумма элементов которого максимальна
// и вернуть его сумму

function getMaxSubSum(arr) {
	var maxSum = 0, sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (sum + arr[i] > 0) {
			sum += arr[i];
		} else {
			sum = 0;
		}
		maxSum = Math.max(sum, maxSum);
	}
	return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));