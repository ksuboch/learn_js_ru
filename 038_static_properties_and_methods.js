// Добавить в конструктор Article:
// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.

function Article() {
	this.created = new Date();

	Article.count ++;
	Article.last = this.created;
}
Article.count = 0;

Article.showStats = function() {
	console.log("Count: " + this.count + " created: " + this.last);
}

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();