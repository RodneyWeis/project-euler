/*	euler1.js
	20131213
*/

function euler() {
var limit = 1000;
var sum = 0;
document.write("Matching multiples:<br />");
for (var i = 1; i < limit; i++) {
	if (i % 3 == 0) {
		sum += i; 
		document.write(i+" ");
	} else if (i % 5 == 0) {
		sum += i; 
		document.write(i+" ");
	}
}

document.write("<br />Sum: " + sum);
}