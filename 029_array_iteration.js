// напишите код, возвращающую массив длин элементов массива arr

var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function (a) { return a.length}, arr);
console.log(arrLength);

// напишите код, возвращающий массив частичных сумм

var arr = [1, 2, 3, 4, 5];

function getSum(arr) {
	var result = [];
	if (!arr.length) return result;

	arr.reduce(function(sum, item) {
		result.push(sum);
		return sum + item;
	});

	return result;
}

console.log(getSum(arr));