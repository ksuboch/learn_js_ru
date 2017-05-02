
function User(fName) {
	this.fullName = fName;

	Object.defineProperties(this, {
		firstName: {
			get: function() {
				return this.fullName.split(' ')[0];
			},
			set: function(newFirstName) {
				this.fullName = newFirstName + ' ' + this.lastName;
			}
		},
		lastName: {
			get: function() {
				return this.fullName.split(' ')[1];
			},
			set: function(newLastName) {
				this.fullName = this.firstName + ' ' + newLastName;
			}
		}
	});
}

var vasya = new User("Василий Попкин");
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин
vasya.lastName = 'Сидоров';
console.log( vasya.fullName ); // Василий Сидоров