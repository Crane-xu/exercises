function changePage(front) {
    let url = window.location.href;
    const reg = /\d{1,}(.html)$/;
    let res = url.match(reg);
    let new_url;

    if (!front) {
        new_url = url.replace(reg, parseInt(res[0]) + 1);
    } else {
        if (res[0] <= 1) return;
        new_url = url.replace(reg, parseInt(res[0]) - 1);
    }

    window.location.href = new_url + '.html';
}

window.onload = function () {
    let body = document.getElementsByTagName('body')[0];
    let btn_front = document.createElement('button');
    let btn_next = document.createElement('button');

    const btnStyle = "width:100px;height:60px;color:#66f;position:fixed;top:10px;right:0;";
    const btn1Style = "width:100px;height:60px;color:#66f;margin-top:120px;position:fixed;top:10px;right:0;";
    btn_front.innerText = "front";
    btn_next.innerText = "next";

    btn_front.style = btnStyle;
    btn_next.style = btn1Style;

    btn_front.setAttribute("onclick", "changePage(true)");
    btn_next.setAttribute("onclick", "changePage(false)");

    body.appendChild(btn_front);
    body.appendChild(btn_next);
}