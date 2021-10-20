import "./button.css"

function Butttton({name,color}) {
  const styles={
      borderRadius:"12px",
      height:"30px",
      margin:"20px",
width:"70%",
backgroundColor:color
  }
    return (
       <button className="num" style={styles}>{name}</button>
    )
}

export default Butttton