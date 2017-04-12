// каким будет результат?

var arr = ["a", "b"];

arr.push(function () {
	console.log(this);
})

arr[2]();

// что будет выведено

var user = {
	firstName: "John",

	export: this
};

console.log(user.export.firstName);