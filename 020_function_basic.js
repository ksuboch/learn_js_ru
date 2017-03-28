// есть ли отличия в функциях?
function checkAge1(age) {
	if (age > 18) {
		return true;
	} else {
		return "Are you allowed?";
	}
}

function checkAge2(age) {
	if (age > 18) {
		return true;
	}
	return "Are you allowed?";
}
// нет, функции работают одинаково

// перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return "Are you allowed?"
	}
}

function checkAge3(age) {
	return (age > 18) ? true : "Are you allowed?";
}

function checkAge4(age) {
	return (age < 18) || "Are you allowed?";
}

// напишите функцию min(a,b) которая возвращает меньшее из чисел a, b

function min(a, b) {
	return (a < b) ? a : b;
}

// напишите функцию pow(x, n), которая возвращает x в степени n

function pow(x, n) {
	var res = 1;
	for (var i = 0; i < n; i++) {
		
		res *= x;
	}
	return res;
}