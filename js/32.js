$(function () {
    var screen_height = screen.availHeight;
    var screen_width = screen.availWidth;
    document.getElementById("div1").style
        = "top:" + screen_height / 2 + "px;left:" + screen_width / 2 + "px;";
});

function printUrl() {
    document.write(document.URL);
}

function printReRate() {
    var ReRate = screen.updateInterval;
    document.write(ReRate);
}

function addRow() {
    mytable = document.getElementById('table1');
    flag = true;
    tr = document.createElement('tr');
    for (j = 0; j < 3; j++) {
        td = document.createElement('td');
        if (j == 2) {
            linka = document.createElement('a');
            text = document.createTextNode('删除');
            linka.appendChild(text);
            td.appendChild(linka);
            tr.appendChild(td);
        } else {
            text = document.createTextNode('文本' + j);
            td.appendChild(text);
            tr.appendChild(td);
        }
    }
    mytable.appendChild(tr);
}
function del(thisa) {
    tr = thisa.parentNode.parentNode;
    table = tr.parentNode;
    table.removeChild(tr);
}
