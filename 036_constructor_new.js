// Напишите функцию-конструктор Calculator, 
// которая создает объект с тремя методами:
// Метод read() запрашивает два значения при помощи prompt и 
// запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

function Calculator(a, b) {
	this.a = a;
	this.b = b;

	this.sum = function() {
		return this.a + this.b;
	};

	this.mul = function (){
		return this.a * this.b;
	};
}

var calculator = new Calculator(2, 4);

console.log( "Сумма = " + calculator.sum() );
console.log( "Произведение = " + calculator.mul() );

// Напишите функцию-конструктор Accumulator(startingValue)

function Accumulator(startingValue) {
	this.value = startingValue;

	this.add = function(x) {
		this.value += x;
	};
};

var accumulator = new Accumulator(1);
accumulator.add(2);
accumulator.add(3);

console.log(accumulator.value);

// Эта задача состоит из двух частей, которые можно решать одна за другой.
//
// Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», 
// с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), 
// и возвращает результат. Понимает плюс + и минус -.
//
// Второй шаг – добавить калькулятору метод addMethod(name, func), 
// который учит калькулятор новой операции. 
// Он получает имя операции name и функцию от двух аргументов func(a,b), 
// которая должна её реализовывать.
// Например, добавим операции умножить *, поделить / и возвести в степень **:

function PowerCalc() {
	this["+"] = function(a, b) {
		return a + b;
	};

	this["-"] = function(a, b) {
		return a - b;
	};

	this.calculate = function(x) {
		var args = x.split(" "),
			a  = + args[0],
			op = args[1],
			b  = + args[2];
		
		return this[operator](a, b);
	};

	this.addMethod = function(operator, funct) {
		this[operator] = funct;
	};
}

var powerCalc = new PowerCalc;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

console.log(powerCalc.calculate("5 - 3")); // 2
console.log(powerCalc.calculate("2 + 7")); // 9
console.log(powerCalc.calculate("3 * 4")); // 12
console.log(powerCalc.calculate("8 / 4")); // 2
console.log(powerCalc.calculate("2 ** 10")); // 1024