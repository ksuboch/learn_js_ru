// создайте объект Date для даты 20 февраля 2012 года, 3 часа 12 минут

var date1 = new Date(2012, 1, 20, 3, 12);
console.log(date1);

// создайте функцию getWeekDay(date), которая выводит текущий день недели
// в коротком формате "пн", "вт", ... "вс"

function getWeekDay(date) {
	var names = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
	return names[date.getDay()];
}

var date2 = new Date(2012, 0, 3);
console.log(getWeekDay(date2));

// День нужно возвратить в европейской нумерации, 
// т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

function getLocalDay(date) {
	var dayNum = date.getDay()
	if (dayNum) {
		return dayNum;
	} else {
		return 7;
	}
}

var date3 = new Date(2012, 0, 3);
console.log(getLocalDay(date3));

// Создайте функцию getDateAgo(date, days), 
// которая возвращает число, которое было days дней назад от даты date.

function getDateAgo(date, days) {
	var tmpDate = new Date(date);
	tmpDate.setDate(date.getDate() - days);
	return tmpDate.getDate();
}

var date3 = new Date(2015, 0, 2);

console.log(getDateAgo(date3, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date3, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date3, 365)); // 2, (2 января 2014)

// Напишите функцию getLastDayOfMonth(year, month), 
// которая возвращает последний день месяца.

function getLastDayOfMonth(year, month) {
	var tmpDate = new Date(year, month + 1, 0);
	return tmpDate.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); // 29

// Напишите функцию getSecondsToday() которая возвращает, 
// сколько секунд прошло с начала сегодняшнего дня.

function getSecondsToday() {
	var date = new Date();
	return ((date.getHours() * 60) + date.getMinutes()) * 60 + date.getSeconds();
}

console.log(getSecondsToday());

// Напишите функцию getSecondsToTomorrow() которая возвращает, 
// сколько секунд осталось до завтра.

function getSecondsToTomorrow() {
	return 24 * 60 * 60 - getSecondsToday();
}

console.log(getSecondsToTomorrow());