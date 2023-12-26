function scrollChange() {
    srpos = document.getElementById('srpos');
    srpos.innerText = '滚动条滚动到：' + document.documentElement.scrollTop;
    srpos.style.top = document.documentElement.scrollTop + "px";
}

var note;
function myfocus(fname, notename) {
    note = document.getElementById(notename);
    note.innerText = fname + '获得焦点，开始输入';
}
function myblur(fname, notname) {
    note = document.getElementById(notname);
    note.innerText = fname + '失去焦点，开始判断';
}
var tank = {};
var moveState, attachState;
$(function () {
    tank['87'] = '前进';
    tank['83'] = '后退';
    tank['65'] = '左拐';
    tank['68'] = '右拐';
    tank['32'] = '开火';
    moveState = document.getElementById('moveState');
    attachState = document.getElementById('attachState');
});
function keydown(e) {
    keycode = e.keyCode;
    if (keycode != 32 && tank[keycode]) {
        moveState.innerText = tank[keycode];
    }
    if (keycode == 32) {
        attachState.innerText = tank[keycode];
    }
}
function keyup(e) {
    keycode = e.keyCode;
    if (keycode != 32 && tank[keycode]) {
        moveState.innerText = '静止';
    }
    if (keycode == 32) {
        attachState.innerText = '';
    }
}
