$(function(){
	mydiv = document.getElementById('mydiv');
	mydiv.innerText = "我是用id访问到的";
	namedivs = document.getElementsByName('namediv');
	len = namedivs.length;
	for (var i = 0; i < len; i++) {
		namedivs[i].innerText = '这是用name名访问到的' + i;
	}
	dclass = document.getElementsByClassName('dclass1');
	len = dclass.length;
	for (var i = 0; i < len; i++) {
		dclass[i].innerText = '这是用class名访问到的' + i;
	}
	tagsDs = document.getElementsByTagName('span');
	len = tagsDs.length;
	for (var i = 0; i < len; i++) {
		tagsDs[i].innerText = '这是用标签名访问到的' + i;
	}

	mytable = document.getElementById('mytable');
	trs = mytable.getElementsByTagName("tr");
	len = trs.length;
	flag = true;
	for (var i = 0; i < len; i++) {
		if (flag) {
			trs[i].setAttribute('bgcoloe', '#cccccc');
			flag = false;
		} else {
			flag = true;
		}
	}
	ww = mytable.getAttribute('width');


	mytable1 = document.getElementById('mytable1');
	flag = true;
	for (i = 0; i < 3; i++) {
		tr = document.createElement("tr");
		for (j = 0; j < 3; j++) {
			td = document.createElement("td");
			text = document.createTextNode("文本" + j);
			if (flag) {
				class1 = document.createAttribute("class");
				class1.value = 'bgrren';
				td.setAttributeNode(class1);
				flag = false;
			} else {
				flag = true;
			}
			td.appendChild(text);
			tr.appendChild(td);
		}
		mytable1.appendChild(tr);
	}
});
function del(thisa) {
	tr = thisa.parentNode.parentNode;
	table = tr.parentNode;
	table.removeChild(tr);
}
function dian(thisa) {
	nextNode = thisa.nextElementSibling;
	if (nextNode.style.display == 'none') {
		nextNode.style.display = 'block';
	} else {
		nextNode.style.display = 'none';
	}
}