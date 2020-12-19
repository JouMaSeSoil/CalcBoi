function click9() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"9";
}
function click8() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"8";
}
function click7() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"7";
}
function click6() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"6";
}
function click5() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"5";
}
function click4() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"4";
}
function click3() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"3";
}
function click2() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"2";
}
function click1() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"1";
}
function click0() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"0";
}
function clickDiv() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"/";
}
function clickMultiply() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"*";
}
function clickPlus() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"+";
}
function clickMinus() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"-";
}
function clickClear() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = "";
}
function clickOB() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +"(";
}
function clickCB() {
	var current = document.getElementById("out").innerHTML;
	document.getElementById("out").innerHTML = current +")";
}

function clickEquals() {

	var strExpression = document.getElementById("out").innerHTML;
	var toPrintCopy = strExpression;

	var expression;
	var currentNumber;

// // var str = "Please locate where 'locate' occurs!";
// // var pos = str.indexOf("locate");
// // var str = "Apple, Banana, Kiwi";
// // var res = str.slice(-12, -6);

	// while(length(strExpression)>0){
		// var pos = strExpression.indexOf(" ");

		// currentNumber = strExpression.slice(0,pos);

	// }
	expression = eval(strExpression);



	document.getElementById("out").innerHTML = toPrintCopy + " = "+  expression;

}
