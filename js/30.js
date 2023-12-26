function dian(e) {
	dianX = e.clientX;
	dianY = e.clientY;
	alert("x:" + dianX + ",y" + dianY)
}

function showMenu(thisa) {
	thisa.style.height = "180px";
}

function hideMenu(thisa) {
	thisa.style.height = "30px";
}

var dd;
var mflag = false;

function ondown() {
	dd = document.getElementById('dd');
	mflag = true;
}

function onmove(e) {
	if (mflag) {
		dd.style.left = e.clientX - 60 + "px";
		dd.style.top = e.clientY - 60 + "px";
	}
}

function onup() {
	mflag = false;
}
