function add(val) {
    const res = val + 10;
    return res;
}
function sub(val) {
    const res = val - 5;
    return res;
}
function mul(val) {
    const res = val * 5;
    //throw new Error("error in mul")
    return res;
}

var p = new Promise(function (resolve, reject) {
    resolve(5);
    //reject("reject data")
})

p
.then(add)
.then(sub)
.then(mul)
.then(console.log)
.catch(function(err){console.log('err message',err)})
;
