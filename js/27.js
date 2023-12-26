var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
alert(w + ':' + h);

window.onload = function () {
	document.bgColor = "#0fff00";
	document.bgColor = "#0000ff";
}

window.onload = function () {
	alert(location.href);
	alert(location.port);
}

window.onload = function () {
	document.write(navigator.appName + "<br/>");
	document.write(navigator.appVersion + "<br/>");
	document.write(navigator.cookieEnabled + "<br/>");
	document.write(navigator.platform + "<br/>");
}

window.onload = function () {
	document.write(screen.availHeight + "<br/>");
	document.write(screen.availWidth + "<br/>");
	document.write(screen.height + "<br/>");
	document.write(screen.width + "<br/>");
}

len = history.length;
alert(len);
history.back();
history.forward();
history.go(-2);
