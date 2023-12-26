function Person(name,sex){
    this.name = name;
    this.sex = sex;
}
Person.prototype.hello = function(){
    console.log('Hello,my name is ' + this.name);
}
// function Student(name,sex,score){
//     Person.call(this,name,sex);
//     this.score = score;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function(){
//     this.hello();
//     console.log('This term my score:'+this.score);
// }
// let john = new Student('john','male',100);
// john.introduce();
/* 原型风格↑类型风格↓ */
// class Person {
//     constructor(name,sex)
//     {
//         this.name = name;
//         this.sex = sex;
//     }
//     hello(){
//         console.log('Hello,my name is ' + this.name);
//     }
// }
class Student extends Person{
    constructor(name,sex,score)
    {
        super(name,sex);
        this.score = score;
    }
    introduce(){
        this.hello();
        console.log('This term my score:'+this.score);
    }
}
let john = new Student('john','male',100);
john.introduce();





// let list = [];

// const listProxy = new Proxy(list, {
//     set (target, property, value) {
//         console.log('set', property, value);
//         target[property] = value;
//         return true;
//     }
// });

// listProxy.push(100);

// const defaultColor = `#ff9`;

// function h1(string,defaultColor){
//     console.log(string);
//     console.log(defaultColor);
// }
// const Title = h1`color: #222;background: ${defaultColor};`;

// var basePerson = {
//     name : 'name'
// }
// 创建一个关联到 basePerson 的对象
// const Person = Object.create(basePerson);

// console.log(Person.name);

// new 就是隐式调用了 Object.create() 将对象关联起来
// .constructor 调用 new 创建对象

// function Foo(name) {
// this.name = name;
// }
// Foo.prototype.myName = function() {
// return this.name;
// };
// var a = new Foo( "a" );
// var b = new Foo( "b" );
// console.log(a.myName()); 
// console.log(b.myName()); 

// .constructor是一个属性 指向当前 对象/函数 Foo, 如果替换了Foo.prototype对象，则没有指向Foo的constructor,它指向更深的原型链
// function Foo(name) { this.name = name; }
// Foo.prototype = { sex:1,score:100 }; // 创建一个新原型对象
// var a1 = new Foo();
// a1.constructor === Foo; // false!
// a1.constructor === Object; // true!


// 下面这段代码使用的就是典型的“原型风格”：
// function Foo(name) {
// this.name = name;
// }
// Foo.prototype.myName = function() {
// return this.name;
// };
// function Bar(name,label) {
// Foo.call( this, name );
// this.label = label;
// }
// 我们创建了一个新的 Bar.prototype 对象并关联到 Foo.prototype
// Bar.prototype = Object.create( Foo.prototype );
// 注意！现在没有 Bar.prototype.constructor 了
// 如果你需要这个属性的话可能需要手动修复一下它
// Bar.prototype.myLabel = function() {
// return this.label;
// };
// var a = new Bar( "a", "obj a" );
// a.myName(); // "a"
// a.myLabel(); // "obj a


// ES6 之前需要抛弃默认的 Bar.prototype
// Bar.ptototype = Object.create( Foo.prototype );
// ES6 开始可以直接修改现有的 Bar.prototype
// Object.setPrototypeOf( Bar.prototype, Foo.prototype );
// 如果忽略掉 Object.create(..) 方法带来的轻微性能损失（抛弃的对象需要进行垃圾回
// 收），它实际上比 ES6 及其之后的方法更短而且可读性更高。不过无论如何，这是两种完
// 全不同的语法。