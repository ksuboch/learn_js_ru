var a = 1, b = 1, c, d;

c = ++a; console.log(c); // 2
// сперва значение a увеличивается на 1
// а затем выполняется присваивание
// значение a - 2

d = b++; console.log(d); // 1
// сперва возвращается значение b
// затем значение b увеличивается на 1
// значение b - 2

c = (2+ ++a); console.log(c); // 5
// сперва значение a увеличивается на 1
// затем выполняется сложение и присваивание
// значение a - 3
// значение c - 5

d = (2+ b++); console.log(d); // 4
// сперва выполняется сложение и присваивание
// затем значение переменной b увеличивается на 1
// значение b - 3
// значение d - 4

console.log(a); // 3
console.log(b); // 3