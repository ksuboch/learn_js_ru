// напишите функцию ucFirst(str), которая делает первы символ строки заглавным

function ucFirst(str) {
	if (!str) return;
	return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("tEst"));

// напишите функцию, которая возвращает true, если строка содержит "viagra" или "XXX"

function checkSpam(str) {
	var lStr = str.toLowerCase();
	return !!(~lStr.indexOf("viagra") || ~lStr.indexOf("xxx"));
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// создайте функцию, которая будет проверять длину строки и если она превосходит maxlength
// заменяет конец str на "...", так чтобы её длина стала равна maxlength

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 3) + "...";
	} 
	return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));