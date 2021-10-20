import "./button.css"

function Button({age,name,url}){

const doit={
    color:"green"
}

  return (<div id="hux" className="huxly">Hello,{name},your age{age}
  <img src={url} alt="product"/>
  <div style={doit}>Text</div>
  </div>)
}

export {Button}