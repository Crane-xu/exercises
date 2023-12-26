let p1 = new Promise((resolve, reject) => {
    console.log('p1 executor');
    setTimeout(resolve, 1000);
});
p1.then(() => new Promise((resolve, reject) => {
    console.log('p2 executor');
    setTimeout(resolve, 1000, true);
}))
.then(() => {
    // if(!res) throw new Error('NO RES');
    return new Promise((resolve, reject)=>{
        if(!res) reject(res);
        console.log('p3 executor');
        setTimeout(resolve(true), 1000);  
    });
})
.then(() =>  new Promise((resolve, reject) => {
    console.log('p4 executor');
    setTimeout(resolve, 1000);
}))
.catch((err)=>{
    console.log('catch err',err);
});

/*
    链式不传值串行调用/传值并行调用, reject 或者 throw new Error() 进入 catch(), 不返回 promise 不继续调用
    
    Promise.all并行调用  有一个 reject 进入 catch(), 全部 resolve 进入 then()

    setTimeout(fn,time,params) 如果将 fn(params) 作第一个参数会立即调用，将 params 作第三个参数就还是同步
*/

// let p1 = new Promise((resolve, reject) => {
//     console.log('p1 executor');
//     setTimeout(resolve('p1'), 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//     console.log('p2 executor');
//     setTimeout(resolve('p2'), 1000);
// })
// let p3 = new Promise((resolve, reject) => {
//     console.log('p3 executor');
//     setTimeout(resolve('p3'), 1000);
// })
// let p4 = new Promise((resolve, reject) => {
//     console.log('p4 executor');
//     setTimeout(resolve('p4'), 1000);
// })
// Promise.all([p1,p2,p3,p4])
// .then((res)=>{
//     console.log('res', res);
// })
// .catch((err)=>{
//     console.log('catch err', err);
// });