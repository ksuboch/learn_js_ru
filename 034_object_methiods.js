// каким будет результат?

var arr = ["a", "b"];

arr.push(function () {
	console.log(this);
})

arr[2](); // [ 'a', 'b', [Function] ]
// arr[2]() - обращение к методу объекта obj[method]()
// в роли obj выступает arr, а в роли метода - 2
// поэтому функция arr[2] получит this = arr и выведет массив

// что будет выведено?

var user = {
	firstName: "John",

	export: this
};

console.log(user.export.firstName); // undefined
// объявление объекта не влияет на контекст, а, значит,
// не влияет и на this

// что выведет alert?

var name = "";

var user = {
	name: "Vasia",

	export: function() {
		return this;
	}
};

console.log(user.export().name); // Vasia
// вызов user.export() использует this, который
// равен объекту до точки, т.е. внутри user.export()
// строка return this возвращает объект user

// что будет выведено?

var name = "";

var user = {
	name: "Vasia",

	export: function() {
		return {
			value: this
		};
	}
};

console.log(user.export().value.name); // Vasia
// при создании объекта {value: this}, в свойство 
// value копируется ссылка на текущий контекст
// т.е. на user

// создайте объект calculator с тремя методами
// read(a, b) который ссохраняет a и b
// sum() который возвращает из сумму
// mul() который возвращает их произведение

var calculator = {
	a: 0,
	b: 0,
	read: function(a, b) {
		this.a = a;
		this.b = b;
	},
	sum: function() {
		return this.a + this.b;
	},
	mul: function() {
		return this.a * this.b;
	}
}

calculator.read(2, 3);
console.log(calculator.sum());1
console.log(calculator.mul());

// создайте объект ladder, который можно вызывать так
// ladder.up().up().down().up().down().showStep()

var ladder = {
	step: 0,

	up: function() {
		this.step++;
		return this;
	},

	down: function() {
		this.step--;
		return this;
	},

	showStep: function() {
		console.log(this.step);
		return this;
	}
}

ladder.up().up().down().up().down().showStep(); // 1