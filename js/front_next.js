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

    const defaultStyle = `width:50px;height:50px;color:#fff;position:fixed;bottom:20px;right:2px;
    font-size: 20px;border: none;background-color: #66f;border-radius: 50%;`;
    const btnFront = defaultStyle + "margin-bottom:60px;";
    const btnNext = defaultStyle;
    btn_front.innerText = "<";
    btn_next.innerText = ">";

    btn_front.style = btnFront;
    btn_next.style = btnNext;

    btn_front.setAttribute("onclick", "changePage(true)");
    btn_next.setAttribute("onclick", "changePage(false)");

    body.appendChild(btn_front);
    body.appendChild(btn_next);
}