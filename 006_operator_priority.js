var a = 2;

var x = 1 + (a *= 2);
// сперва выполняется умножение в сокращенной форме
// результат его присваивается переменной a
// и возвращается; значение a - 4
// затем выполняется сложение и присваивание
// значение x - 5

console.log(x);