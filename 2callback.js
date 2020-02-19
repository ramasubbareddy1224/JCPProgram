function add(val1, val2,cb) {
  const sum = val1 + val2;
  cb(sum)
}
function callback(data){
  console.log(data);
}
add(2,2,callback);