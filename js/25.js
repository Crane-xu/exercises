



var money = 300;
var total = money * 0.8;
money = money >= 500 ? total : money;
document.write(money);

var re = 2 + 1 > 3 + 5;
var rs = 7 > 5 && 15 > 11;

var a = 9, b = 17;
if (a > 7) {
	document.write('a>b');
} else if (a == b) {
	document.write('a=b');
} else {
	document.write('a<b');
}

var day = new Date().getDay();
switch (day) {
	case 0:
		x = '今天是周日';
		break;

	case 1:
		x = '今天是周一';
		break;

	case 2:
		x = '今天是周二';
		break;

	case 3:
		x = '今天是周三';
		break;

	case 4:
		x = '今天是周四';
		break;

	case 5:
		x = '今天是周五';
		break;

	case 6:
		x = '今天是周六';
		break;
}
document.write(x);

var sum = 0;
for (var i = 1; i <= 100; i++) {
	sum += 1;
}
document.write(sum);

for (var i = 1; i <= 100; i++) {
	if (i == 5) {
		continue;
	}
	document.write(i + ",");
}

for (var i = 1; i <= 100; i++) {
	if (i == 5) {
		break;
	}
	document.write(i + ",");
}

var person = { id: 1, name: "张三", age: 20 };
for (let key in person) {
	document.write(key + ":" + person[key]);
	document.write('<br />');
}

var i = 1;
var sum = 0;
while (i < 101) {
	sum += i;
	i++;
}
document.write(sum);

var i = 10;
while (true) {
	document.write(i++);
	document.write('<br />');
	if (i == 20) {
		break;
	}
}

var mycar = new Array();
var mycars = new Array(3);
var mycars = new Array("Saab", "Volvo", "BMW");
var mycars = ["Saab", "Volvo", "BMW"];
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";

mycars.push("Saab");
mycars.push("Volvo");

var len = mycars.length;
for (key in mycars) {
	document.write(key + ':' + mycars[key]);
	document.write('<br />');
}

var car = mycars.pop();


var car = mycars.shift();

var car = mycars.splice(1, 2);
var newlen = mycars.unshift("奔驰");

mycars.splice(1, 0, "宝马", "奇瑞", "奔驰")

var arr = [1, 3, 5];
var arr1 = [2, 4, 6];
var arr2 = [7, 8, 9];
var newArr = arr.concat(arr1, arr2);

var cars = mycars.join("|");

mycars.reverse();

arr.sort();

var arr = new Array();
for (var i = 0; i < 5; i++) {
	arr[i] = new Array();
	for (var j = 0; j < 8; j++) {
		arr[i].push(i * j);
	}
}
var len = arr.length;
var clen = arr[0].length;
for (var i = 0; i < len; i++) {
	for (var j = 0; j < clen; j++) {
		document.write(arr[i][j]);
		document.write(",");
	}
	document.write('<br />');
}

var mystr1 = "Hello";
var mystr2 = "world";
var newstr = mystr1 + " " + mystr2;

var mystr1 = "Hello";
var mystr2 = " world,";
var mystr3 = "Hello";
var mystr4 = "guoxiansheng";
var newstr = mystr1.concat(mystr2 + mystr3 + " " + mystr4);

var str = 'abcdeabcde';
console.log(str.indexOf('a'));
console.log(str.indexOf('a', 3));
console.log(str.indexOf('bc'));

console.log(str.indexOf('a'));
console.log(str.indexOf('a', 3));

var str = "abcDEF";
console.log(str.search('c'));
console.log(str.search('d'));
console.log(str.search(/d/i));


var str = "1a2b3c4d5e";
console.log(str.match('h'));
console.log(str.match('b'));
console.log(str.match(/b/));

var str = "abcdefg";
console.log(str.substring(1, 4));
console.log(str.substring(1));
console.log(str.substring(-1));

var str = "abcdefg";
console.log(str.slice(1, 4));
console.log(str.slice(-3, -1));
console.log(str.slice(1, -1));
console.log(str.slice(-1, -3));

var str = "abcdefg";
console.log(str.substr(1, 3));
console.log(str.substr(2));
console.log(str.substr(-2, 4));


var str = 'abcdeabcde';
console.log(str.replace('a', 'A'));
console.log(str.replace(/a/, 'A'));

var str = "a|b|c|d|e";
console.log(str.split('|'));
console.log(str.split('|', 3));
console.log(str.split(' '));

var str = '138i26579287';
var reg = /[^0-9]/;
document.write(str.search(reg));

var tel = '我的电话：12345678901';
var reg = /[\d]{11}/;
document.write(str.search(reg));


var str = '2019-2-123';
var reg = /^[\d]{4}-[\d]{1,2}-[\d]{1,2}$/;
document.write(reg.test(str));

var str = '16+5=21';
var reg = /[\+]/;
document.write(reg.test(str));

var str = '16+5=21';
var reg = /[0-9]+/g;
document.write(reg.test(str));

var User = function (id, name) {
	this.id = id;
	this.name = name;
}
var user1 = new User(1, "张三");
document.write(user1.name);
document.write("<br/>");
var user2 = new User(2, "李四");
document.write(user2.name);

var user1 = { id: 1, name: "张三" };
var user2 = Object.create({ id: 2, name: "李四" });
document.write(user1.name);
document.write("<br/>");
document.write(user2.name);

var user = {};
user.id = 1;
user["name"] = "张三";
user.age = 20;
user["career"] = "学生";
document.write(user.name);
document.write("<br/>");
document.write(user["age"]);

var user = {};
user.id = 1;
user["name"] = "张三";
user.age = 20;
user["career"] = "学生";
delete user.name;
document.write(user.name);
document.write("<br/>");
document.write(user["age"]);

var user = {};
user.id = 1;
user["name"] = "张三";
user.age = 20;
user["career"] = "学生";
if ('career' in user) {
	alert("有career属性");
} else {
	alert("无career属性");
}

var user = {};
user.id = 1;
user["name"] = "张三";
user.age = 20;
user["career"] = "学生";
user.courses = [];
user.chooseCourse = function (courseName) {
	user.courses.push(courseName);
}
user.chooseCourse("数据结构");
user.chooseCourse("高等数学");
user.chooseCourse("Java");
for (var key in user) {
	document.write(key + "=" + user[key]);
	document.write("<br/>");
}
