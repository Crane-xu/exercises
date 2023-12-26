// 对象代理
let list = [];
const listProxy = new Proxy(list, {
    set (target, property, value) {
        console.log('set', property, value);
        target[property] = value;
        return true;
    }
});
listProxy.push(100);

// 标签模板字符串 h1函数可对其再处理
const defaultColor = `#ff9`;
function h1(string,defaultColor){
    console.log(string);
    console.log(defaultColor);
}
const Title = h1`color: #222;background: ${defaultColor};`;