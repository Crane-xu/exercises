function fun1() {
	document.write('我是函数fun1');
	document.write('<br/>');
}
fun1();

var fun2 = function () {
	document.write('我是函数fun2');
	document.write('<br/>');
}
fun2();

var fun3 = new Function(
	document.write('我是函数fun3')
);

function fun4() {
	document.write('无参数');
	document.write('<br/>');
}
fun4();

function fun5(a, b) {
	document.write('两个参数a=' + a + ',b=' + b);
	document.write('<br/>');
}
fun5('hello', '世界');

function fun6(...param) {
	len = param.length;
	for (i = 0; i < len; i++) {
		document.write('参数' + i + '=' + param[i]);
		document.write(',');
	}
}
fun6(1, 3, 5, 7, 9);

function fun7(name, age) {
	name = name || '貂蝉';
	age = age || 21;
	document.write('你好！我是' + name + '，今年' + age + '岁。')
}
fun7();
document.write('<br/>');
fun7('吕布');
document.write('<br/>');
fun7('关羽', 30);

function fun8(a, b) {
	return 0;
}
var rs = fun8(3, 9);
document.write(rs);
document.write('<br/>');
function fun9(a, b) {
	arr = [];
	arr.push(a * 3);
	arr.push(b * 3);
	return arr;
}
var arr = fun9(3, 9);
document.write(arr);
document.write('<br/>');

function fun10(id, name) {
	obj = {};
	obj['id'] = id;
	obj['name'] = name;
	return obj;
}
var obj = fun10(5, '赵云');
document.write(obj);
document.write('<br/>');
document.write(obj.name);

function fun11(str) {
	str = '你好';
}
var a = 'hello';
fun11(a);
document.write('传值调用，a=' + a);
document.write('<br/>');

function fun12(person) {
	person.name = '李四';
}
var b = { name: '张三' };
fun12(b);
document.write('传址调用，person.name=' + b.name);


function add(a, b) {
	return a + b;
}
function times(a, b) {
	return a * b;
}
function operation(a, b, fun) {
	return fun(a, b);
}
var rs1 = operation(3, 5, add);
document.write(rs1);
document.write('<br/>');
var rs2 = operation(3, 5, times);
document.write(rs2);

function myfun(i) {
	return function () {
		return ++i;
	}
}
var fun13 = myfun(3);
var fun14 = myfun(100);
for (i = 0; i < 5; i++) {
	document.write(fun13());
	document.write('<br/>');
}
document.write('<hr/>');

for (i = 0; i < 5; i++) {
	document.write(fun14());
	document.write('<br/>');
}

var a = 3.1;
var b = 3.9;
var ceil = Math.ceil(a);
document.write('向上取整：' + ceil + '<br/>');
var floor = Math.floor(a);
document.write('向下取整：' + floor + '<br/>');
var min = Math.min(a, b);
document.write('较小的值是：' + min + '<br/>');
var max = Math.max(a, b);
document.write('较大的值是：' + max + '<br/>');
var c = 3.5;
var round = Math.round(c);
document.write('四舍五入：' + round + '<br/>');
document.write('3的二次方是：' + Math.pow(3, 2) + '<br/>');
document.write('4的开平方是：' + Math.sqrt(4) + '<br/>');
for (i = 0; i < 5; i++) {
	document.write(Math.random() + '<br/>');
	document.write((1 + Math.floor(Math.random() * 10)) + '<br/>');
}

var mydate = new Date('2018-12-28 15:19:15');
document.write('年：' + mydate.getFullYear() + '<br/>');
document.write('月：' + (mydate.getMonth() + 1) + '<br/>');
document.write('日：' + mydate.getDate() + '<br/>');
document.write('星期：' + mydate.getDay() + '<br/>');
document.write('时间戳：' + mydate.getTime() + '<br/>');
document.write('小时：' + mydate.getHours() + '<br/>');
document.write('分：' + mydate.getMinutes() + '<br/>');
document.write('秒：' + mydate.getSeconds() + '<br/>');
document.write('日期：' + mydate.toLocaleDateString() + '<br/>');
document.write('时间：' + mydate.toLocaleTimeString() + '<br/>');
document.write('日期与时间：' + mydate.toLocaleString() + '<br/>');