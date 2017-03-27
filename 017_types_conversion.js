console.log("" + 1 + 0);  // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log("  -9\n" + 5); // -9\n5
console.log("  -9\n" - 5); // -14
console.log(5 && 2); // 2
console.log(2 && 5); // 2 -> 5 (это не побитовая операция)
// будет возвращен последний аргумент, преобразуемый к true
console.log(5 || 0); // 5
console.log(0 || 5); // 5
console.log(null + 1); // 1
console.log(undefined + 1); // 0 -> NaN 
// undefined при численном преобразовании становится NaN
console.log(null == "\n0\n"); // true -> false
// при сравнении == с null работает правило null == undefined и только
console.log(+null == +"\n0\n"); // true