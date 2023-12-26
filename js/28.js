// 165页章节练习
// 1.
document.write('<br/>1.<br/><br/>');
var a=7;
var b=7.1314;
var c=false;
var d='Hello';
document.write(typeof a);
document.write('<br/>');
document.write(typeof b);
document.write('<br/>');
document.write(typeof c);
document.write('<br/>');
document.write(typeof d);
document.write('<hr/>');
//2.
document.write('<br/>2.<br/><br/>');
var a2 = 15;
var b2 = 9;
document.write(parseInt(a2)*parseInt(b2));
document.write('<hr/>');
//3.
document.write('<br/>3.<br/><br/>');
var a3 = 11;
var b3 = 7;
document.write(parseInt(a3/b3));
document.write('<br/>');
document.write(a3%b3);
document.write('<hr/>');
//4.
document.write('<br/>4.<br/><br/>');
for(var i=0;i<20;i++){
	if(i%2)
	document.write(i+',');
}
document.write('<hr/>');
//5.
document.write('<br/>5.<br/><br/>');
var type5=2;
//typeof返回类型英文全小写
switch (typeof type5){
	case "number":
	document.write(type5*2);
		break;
	case "string":
	document.write(type5);
		break;
}
document.write('<hr/>');
//6.
document.write('<br/>6.<br/><br/>');
var flag6=true;
for (var i = 1; i < 100; i++) {
	flag6=true;
	if(i<3){
		document.write(i+',');
		continue;
	}
	for(var j=2;j<(i/2);j++)
	{
		if(i%j==0){
			flag6=false;
			break;
		}
	}
	if(flag6==true)
	document.write(i+',');
}
document.write('<hr/>');
//7.
document.write('<br/>7.<br/><br/>');
var arr7_1=[1,2,2,3,5,6,6,7,8,4];
var arr7_2=[];
var flag7=false;

for(var i=0;i<arr7_1.length;i++)
{
	flag7=false;
	for(var j=0;j<arr7_2.length;j++)
	{
		if(arr7_1[i]==arr7_2[j])
		{
			flag7=true;
			break;
		}
		
	}
	if(flag7==false)
	arr7_2.push(arr7_1[i]);
}

for(var i=0;i<arr7_1.length;i++){
	document.write(arr7_1[i]+',');
}
document.write('<br/>去重后：<br/>');
for(var i=0;i<arr7_2.length;i++){
	document.write(arr7_2[i]+',');
}
document.write('<hr/>');
//8.
document.write('<br/>8.<br/><br/>');
var arr8_1 = [1,2,5,9,10];
var arr8_2 = [3,4,6,9,10];
var equalValue,equalMin;
var firstEqual=true; 

for(var i=0;i<arr8_1.length;i++)
{
	if(arr8_1[i]==arr8_2[i])
	{
		equalValue=arr8_1[i];
		if(firstEqual==true) //第一次等值赋给最小相等值变量
		{
			equalMin=equalValue;
			firstEqual=false;
		}
	}
	
	if(equalValue<equalMin)
	equalMin=equalValue;
}
document.write('两个数组相同元素最小值为：'+equalMin);
document.write('<hr/>');
//9.
document.write('<br/>9.<br/><br/>');
var str9='addddfffssdfsdfsafjsd';
var aCounter=0,dCounter=0,fCounter=0,sCounter=0,jCounter=0;
for(var i=0;i<str9.length;i++){
	if(str9[i]=='a')
	aCounter++;
	if(str9[i]=='d')
	dCounter++;
	if(str9[i]=='f')
	fCounter++;
	if(str9[i]=='s')
	sCounter++;
	if(str9[i]=='j')
	jCounter++;
}
var maxChar={};
maxChar.a=aCounter;
maxChar.d=dCounter;
maxChar.f=fCounter;
maxChar.s=sCounter;
maxChar.j=jCounter;
var maxCount=aCounter>dCounter?aCounter:(dCounter>fCounter?dCounter:fCounter>sCounter?fCounter:sCounter>jCounter?sCounter:jCounter);
for(key in maxChar){
	if(maxChar[key]==maxCount)
	document.write(key+"出现次数最多，次数为："+maxChar[key]);
}
document.write('<hr/>');
//10.
//document.write('<br/>10.<br/><br/>');
//var oneStr="They are students";
// twoStr="ariou";
//document.write('<hr/>');
//11.
document.write('<br/>11.<br/><br/>');
var str11="255.221.221.12";
var reg=/[\d]{3}.[\d]{3}.[\d]{3}.[\d]{2}/;
//符合回0，不符回-1
document.write(str11.search(reg));
document.write('<hr/>');
//12.
document.write('<br/>12.<br/><br/>');
var str12='16867245';
var reg12=/[\d]{2,3}/g;
document.write(str12.match(reg12));
document.write('<hr/>');
//13.
// document.write('<br/>13.<br/><br/>');
// var shoppingCart={};
// shoppingCart.id=function(tid){
// 	for(key in shoppingCart){
// 		if(shoppingCart[key]==tid)
// 		this.id=tid;
// 	}
// }
//14.
function sum(a14,b14){
	return a14+b14;
}
document.write('<hr/>');
//15.
function arrayMaxValue(arr15){
	var max15=arr15[0];
	for(var i=0;i<arr15.length;i++){
		if(max15<arr15[i])
		max15=arr15[i]
	}
	return max15;
}
//16.
var id16=0;
function idAdd(obj){
	obj.id=function(){
		return id16++;
	}
}
//17.
function circleArea(r){
	return r*r*3.14;
}
//18.
function getTime(){
	var myDate = new Date();
	document.write(myDate.getFullYear()+'年'
	+(myDate.getMonth()+1)+'月'
	+myDate.getDate()+'日'
	+myDate.getHours()+'时'
	+myDate.getMinutes+'分');
}
//19.
function getWeekDay(tdate){
	var thisDate = new Date(tdate+' 15:19:15');
	return thisDate.getDay();
}
