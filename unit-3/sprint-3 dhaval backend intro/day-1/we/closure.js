function outer(){
    let msg="msg"
    function inner(){
        console.log(`done+${msg}`);
    }
  return inner
}
const out=outer()
out()
