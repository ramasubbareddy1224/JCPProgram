
function Print(fnName){
  fnName();
}
function cb(){
    console.log('This is callback');
}
Print(cb);