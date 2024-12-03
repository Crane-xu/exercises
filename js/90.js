const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let startPos = { x: undefined, y: undefined };
let isPainting = false;
let isErasering = false;
let brushColor = '#f50c0c';
let action = 'draw';

function initCanvas() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    enableDownload(canvas);
}

function enableDownload(canvas) {
    const a = document.getElementById("download");
    a.href = canvas.toDataURL();
}

// canvas 操作划线
function drawLine({ startX, startY, endX, endY, color = brushColor }) {
    // 开始绘制路线
    ctx.beginPath();
    // 线的属性
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    // 起始位置
    ctx.moveTo(startX, startY);
    // 停止位置
    ctx.lineTo(endX, endY);
    // 绘制
    ctx.stroke();
    // 绘制结束
    ctx.closePath();
}

// 监听鼠标事件 画图
// 1 mousedown 确定起始位置 准备绘制
const start = (x, y) => {
    startPos.x = x;
    startPos.y = y;
    isPainting = true;
}
canvas.addEventListener("mousedown", (event) => {
    start(event.offsetX, event.offsetY);
});
canvas.addEventListener("touchstart", (event) => {
    const target = event.changedTouches[0];
    start(target.pageX, target.pageY);
});

// 2 mousemove 鼠标移动，调用drawLine函数
const move = (x, y) => {
    const endX = x;
    const endY = y;

    if (isPainting && typeof startPos.x === 'number' && typeof startPos.y === 'number') {
        if (isErasering && action === 'eraser') {
            ctx.clearRect(endX - 5, endY - 5, 25, 25);
        } else {
            drawLine({
                startX: startPos.x,
                startY: startPos.y,
                endX,
                endY,
                color: brushColor
            });
            startPos.x = endX;
            startPos.y = endY;
        }
    }
}
canvas.addEventListener("mousemove", (event) => {
    move(event.offsetX, event.offsetY);
});
canvas.addEventListener("touchmove", (event) => {
    const target = event.changedTouches[0];
    move(target.pageX, target.pageY);
});

// 3 mouseup 鼠标抬起，结束绘制
const end = () => {
    isPainting = false;
    startPos = { x: undefined, y: undefined };
    enableDownload(canvas);
}
canvas.addEventListener("mouseup", end);
canvas.addEventListener("touchend", end);

// 画笔 橡皮切换
document.getElementById("pencil").addEventListener('click', function () {
    action = 'draw';
    isErasering = false;
    isPainting = true;
    document.getElementById("canvas").className = action;
    this.classList.add('active');
    document.getElementById("eraser").classList.remove('active');
});

document.getElementById("eraser").addEventListener('click', function () {
    action = 'eraser';
    isErasering = true;
    isPainting = false;
    document.getElementById("canvas").className = action;
    this.classList.add('active');
    document.getElementById("pencil").classList.remove('active');
});

// 清屏
document.getElementById("delete").addEventListener('click', function () {
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// 色板
function toggleColorPanel() {
    const colorPanel = document.getElementById("color-panel");
    if (colorPanel.className.includes('show')) {
        colorPanel.classList.remove('show');
        colorPanel.classList.add('hide');
    } else {
        colorPanel.classList.remove('hide');
        colorPanel.classList.add('show');
    }
}
document.getElementById("color").addEventListener('click', toggleColorPanel);

// 选取颜色
document.getElementById("color-panel").addEventListener('click', function (event) {
    if (event.target.nodeName.toLowerCase() === 'li') {
        toggleColorPanel();
        brushColor = event.target.dataset.color;
        document.getElementById("color").style.setProperty('--selected-color', event.target.dataset.color);
    }
});

initCanvas();