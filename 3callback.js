function add(val1, val2, cb) {
  const sum = val1 + val2;
  cb(sum)
}
add(2, 2, function (data) {
  console.log(data);
});