function add(val, callback) {
    const res = val + 10;
    callback(res);
}
function sub(val, callback) {
    const res = val - 5;
    callback(res);
}
function mul(val, callback) {
    const res = val * 5;
    callback(res);
}

add(5, function (addres) {
    sub(addres, function (subres) {
        mul(subres, function (mulres) {
            console.log(mulres);
        })
    })
})
