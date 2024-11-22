var global = {
    selectedColor: "#ff0000",
    matrixArray: [],
    matrixWidth: 30,
    matrixHeight: 30,
    currentPos: 0,
};
// 颜色选择器
function watchColorPicker(event) {
    //  将全局颜色变量 赋值为 当前选择的色值
    global.selectedColor = event.target.value;
}
// 单元格点击
function assignColor() {
    // 将此单元格颜色改为颜色选择器的色值
    this.style.backgroundColor = global.selectedColor;
    global.matrixArray.push(getPixelArray());
    const matrixArrayLen = global.matrixArray.length;
    if (matrixArrayLen > 10) {
        global.matrixArray.splice(0, matrixArrayLen - 10);
    }
    global.currentPos = global.matrixArray.length;
}
// 获取色值矩阵
function getPixelArray() {
    let pixelArray = [];
    const tb = document.querySelector("table");
    for (let i = 0; i < tb.childNodes.length; i++) {
        let pixelRowArray = [];
        const pixelRow = tb.childNodes[i];
        for (let j = 0; j < pixelRow.childNodes.length; j++) {
            const defaultColor = document.querySelector("#grid-color-picker").value;
            const tdColor = pixelRow.childNodes[j].style.backgroundColor;
            if (tdColor) pixelRowArray.push(tdColor);
            else pixelRowArray.push(defaultColor);
        }
        pixelArray.push(pixelRowArray);
    }
    return pixelArray;
}
// 打印为图片
function exportImage() {
    const tb = document.querySelector("table");
    html2canvas(tb).then(function (canvas) {
        const url = canvas.toDataURL("image/png");
        const date = new Date();
        const nowString = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() + 1}${date.getHours()}${date.getMinutes()}`;
        saveAs(url, `pixelImage${nowString}.png`);
    });
}
// 调整画布矩阵大小
function adjustMatrix() {
    const widthBox = document.querySelector("#matrix-width");
    const heightBox = document.querySelector("#matrix-height");
    global.matrixWidth = widthBox.value ? widthBox.value : global.matrixWidth;
    global.matrixHeight = heightBox.value ? heightBox.value : global.matrixHeight;
    createMatrix();
    widthBox.value = "";
    heightBox.value = "";
    global.matrixArray = [];
    global.currentPos = 0;
}
// 清空重置画布矩阵
function resetMatrix() {
    createMatrix();
    global.matrixArray = [];
    global.currentPos = 0;
}
// 色值绘制矩阵
function colorAssignMatrix(pixmap) {
    const tb = document.createElement("table");
    for (let i = 0; i < pixmap.length; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < pixmap[i].length; j++) {
            const td = document.createElement("td");
            td.style.backgroundColor = pixmap[i][j];
            td.addEventListener("click", assignColor, false);
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    }
    document.querySelector("#table-container").replaceChildren(tb);
}
// 矩阵回退
function reBackMatrix() {
    global.currentPos--;
    const pixmap = global.matrixArray[global.currentPos - 1];
    if (!pixmap) {
        global.currentPos = 0;
        return;
    }
    colorAssignMatrix(pixmap);
}
// 矩阵恢复
function restoreMatrix() {
    global.currentPos++;
    const matrixArrayLen = global.matrixArray.length;
    const pixmap = global.matrixArray[global.currentPos - 1];
    if (global.currentPos > matrixArrayLen) {
        global.currentPos = matrixArrayLen;
        return;
    }
    colorAssignMatrix(pixmap);
}
// 创建画布矩阵
function createMatrix() {
    const tb = document.createElement("table");
    for (let i = 0; i < global.matrixHeight; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < global.matrixWidth; j++) {
            let td = document.createElement("td");
            // 监听点击事件
            td.addEventListener("click", assignColor, false);
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    }
    document.querySelector("#table-container").replaceChildren(tb);
}
// 修改表格默认颜色
function changeGridColor() {
    const tb = document.querySelector("table");
    const gridColor = document.querySelector("#grid-color-picker").value;
    for (let i = 0; i < tb.childNodes.length; i++) {
        const pixelRow = tb.childNodes[i];
        for (let j = 0; j < pixelRow.childNodes.length; j++) {
            pixelRow.childNodes[j].style.backgroundColor = gridColor;
        }
    }

    /** html2canvas印不出H5 */
    // // 得到第一个样式表
    // const ss = document.styleSheets[0];
    // // 得到样式表的规则
    // const rules = ss.cssRules ? ss.cssRules : ss.rules;
    // // 取到色值
    // const gridColor = document.querySelector("#grid-color-picker").value;
    // // 遍历这些规则
    // for (let i = 0; i < rules.length; i++) {
    //     let rule = rules[i];
    //     // 跳过@import和非样式规则
    //     if (!rule.selectorText) continue;
    //     // 选择器
    //     const selector = rule.selectorText;
    //     if (selector == ".pixel-default-color") {
    //         // 修改样式
    //         rule.style.backgroundColor = gridColor;
    //     }
    // }
}
// 全屏按键监听
document.onkeydown = function keyDownHandle(event) {
    const e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode == 90 && e.ctrlKey) {
        reBackMatrix();
    }
    if (e.keyCode == 89 && e.ctrlKey) {
        restoreMatrix();
    }
};
// 页面加载完成 初始化绑定
$(function () {
    //  颜色选择器监听
    const colorPicker = document.querySelector("#color-picker");
    colorPicker.addEventListener("change", watchColorPicker, false);
    //  图片导出按钮
    const exportImageBtn = document.querySelector("#export-image");
    exportImageBtn.addEventListener("click", exportImage, false);
    //  调整画布按钮
    const adjustMatrixBtn = document.querySelector("#adjust-matrix");
    adjustMatrixBtn.addEventListener("click", adjustMatrix, false);
    //  重置画布按钮
    const resetMatrixBtn = document.querySelector("#reset-matrix");
    resetMatrixBtn.addEventListener("click", resetMatrix, false);
    //  撤销画布按钮
    const revokeBtn = document.querySelector("#revoke");
    revokeBtn.addEventListener("click", reBackMatrix, false);
    //  恢复画布按钮
    const restoreBtn = document.querySelector("#restore");
    restoreBtn.addEventListener("click", restoreMatrix, false);
    //  调整颜色按钮
    const adjustGridColorBtn = document.querySelector("#adjust-grid-color");
    adjustGridColorBtn.addEventListener("click", changeGridColor, false);
    //  创建画布矩阵
    createMatrix();
    global.matrixArray.push(getPixelArray());
});