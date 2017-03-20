var result;
// перепишите с использованием ?
//
// if (a + b < 4) {
//   result = "Little";
// } else {
// 	 result = "Big";
// }
result = (a + b < 4) ? "Little" : "Big";

var message;

// if (login == "Vasia") {
// 	message = "Hello";
// } else if (login == "Director") {
// 	message = "Morning";
// } else if (login == "") {
// 	message = "No login";
// } else {
// 	message = "";
// }

message  = (login == "Vasia") ? "Hello" : (login == "Director") ? "Morning" : (login == "") ? "No login" : "";
