const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class iPromise {
    constructor(executor){
        executor(this.resolve,this.reject)
    }
    // promise状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败后的原因
    reason = undefined;
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];

    resolve = value => {
        // 如果状态不是等待 阻止程序向下执行
        if(this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED;
        // 保存成功后的值
        this.value = value;
        // 判断成功是否存在 如果存在 调用
        // this.successCallback && this.successCallback(this.value);
        while(this.successCallback.length) this.successCallback.shift()(this.value);
    }
    reject = reason => {
        if(this.status !== PENDING) return;
        this.status = REJECTED;
        this.reason = reason;
        while(this.failCallback.length) this.failCallback.shift()(this.reason);
    }
    then(successCallback,failCallback){
        successCallback = successCallback ? successCallback : value => value;
        failCallback = failCallback ? failCallback : reason => {throw reason};
        let pm = new iPromise((resolve,reject)=>{
            // 判断promise状态 执行相应回调
            if(this.status === FULFILLED){
                setTimeout(()=>{
                    let x = successCallback(this.value);
                    resolvePromise(pm,x,resolve,reject);
                },0);
            }else if(this.status === REJECTED){
                failCallback(this.reason);
                reject();
            }else{
                // 等待
                // 将成功回调和失败回调存储起来
                this.successCallback.push(successCallback);
                this.failCallback.push(failCallback);
            }
        });
        return pm;
    }
    finally (callback) {
        return this.then(value => {
            return iPromise.resolve(callback()).then(()=>value);
        },reason => {
            return iPromise.resolve(callback()).then(()=>{throw reason});
        });
    }
    catch (failCallback) {
        return this.then(undefined,failCallback);
    }
    static all (array) {
        let result = [];
        let index = 0;
        return iPromise((resolve,reject)=>{
            function addData(key,value){
                result[key] = value;
                index++;
                if(index === array.length){
                    resolve(result);
                }
            }
            for(let i=0;i<array.length;i++){
                let current = array[i];
                if(current instanceof iPromise){
                    current.then(v=>addData(i,v),r=>reject(r));
                }else{
                    addData(i,array[i]);
                }
            }
        })
    }
    static resolve(v) {
        if(v instanceof iPromise) return v;
        return new iPromise(resolve=>resolve(v));
    }
}
function resolvePromise(pm,x,resolve,reject){
    if(pm === x){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    if( x instanceof iPromise){
        // promise对象
        // x.then(v=>resolve(v),r=>reject(r));
        x.then(resolve,reject);
    }else{
        // 普通值
        resolve(x);
    }
}




let p = new iPromise((resolve,reject)=>{
    resolve('success');
    reject('fail');
});

p.then(v=>{
    console.log(v);
},r=>{
    console.log(r);
})