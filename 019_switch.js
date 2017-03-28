// напишите if аналогичный switch
// switch (browser) {
// 	case 'IE':
// 		console.log('You have IE!');
// 		break;

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		console.log('You have a good browser');
// 		break;

// 	default:
// 		console.log('Unknown browser');
// }
var browser = 'Safari';

if (browser == 'IE') {
	console.log('You have IE!');	
} else if ( browser == 'Chrome'  ||
			browser == 'Firefox' ||
			browser == 'Safari'  ||
			browser == 'Opera') {
	console.log('You have a good browser');
} else {
	console.log('Unknown browser');	
}

// перепишите код с использованием switch
// if (a == 0) {
// 	console.log(0);
// }
// if (a == 1) {
// 	console.log(1);
// }
// if (a == 2 || a == 3) {
// 	console.log('2, 3');
// }

var a = 2;
switch (a) {
	case 0:
		console.log(0);
		break;
	case 1:
		console.log(1);
		break;
	case 2:
	case 3:
		console.log('2, 3');
		break
	default:
		break;
}