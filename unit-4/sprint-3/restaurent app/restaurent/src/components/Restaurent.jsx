import React, { useEffect, useState } from 'react'

import {Container,Row,Col,Button} from "react-bootstrap"
import "./restaurant.css"

function Restaurent() {

const [data,setdata]=useState([])

useEffect(()=>{
fetch("http://localhost:3001/datas").then((d)=>d.json())
.then((res)=>{
setdata(res)
//console.log(data);
})

},[])
const handle4star=()=>{
    if(data.ratings>9){
        setdata(data)
    }
}

    return (
        <>
        <div id='button-div'>
        <Button onClick={handle4star}>4 star above</Button><Button>3 star above</Button><Button>2 star above</Button><Button>1 star above</Button><Button>cash only</Button><Button>card only</Button><Button>Upi only</Button><Button>All payment</Button><Button>High to low</Button><Button>Low to high</Button>
        </div>
        <div id="main-box">
            {
                data.map((datas)=>(
                  <Container key={datas.id} className="contain">
                      
                      <Row >
                          <Col className="col-4">
                          <img  src={datas.image} className={"img-fluid","img-thumbnail","img-responsive" } alt="restaurent"/>
                          </Col>
                          <Col  className="col-5">
                          <h4 style={{color:"red",textAlign:"left"}}>{datas.title}</h4>
                          <p  style={{color:"gray",textAlign:"left"}}>{datas.type}</p>
                          <p style={{color:"gray",textAlign:"left"}}>Cost Rs.{datas.cost_for_one}  for one</p>
                          <div>
                              <p style={{textAlign:"left"}}>Min Rs.{datas.min}   . Up to {datas.time}min</p>
                             
                          </div>
                     {(()=>{
 if(datas.payment_methods.card===true&&datas.payment_methods.upi===true&&datas.payment_methods.cash===true){
return (<p style={{textAlign:"left"}}>Accept all payments</p>)
 }
 else if(datas.payment_methods.card===true&&datas.payment_methods.upi===false&&datas.payment_methods.cash===false){
     return (<p style={{textAlign:"left"}}>Accept card payment</p>)
 }
 else if(datas.payment_methods.card===false&&datas.payment_methods.upi===true&&datas.payment_methods.cash===false){
    return (<p style={{textAlign:"left"}}>Accept upi payment</p>)
}
else if(datas.payment_methods.card===false&&datas.payment_methods.upi===false&&datas.payment_methods.cash===true){
    return (<p style={{textAlign:"left"}}>Accept cash payment</p>)
}
                     })  
                     ()}
                        
                        
                          </Col >
                          <Col className="col-3">
                          <Button variant="success" style={{margin:"0 0 1rem 0",marginLeft:"60%"}}>{datas.ratings}</Button>
                          <p style={{color:"gray",textAlign:"right"}}>{datas.totalvotes} votes</p>
                          <p style={{color:"gray",textAlign:"right"}}>{datas.reviews} reviews</p>
                          </Col>
                      </Row>
                      <Row>
                          <Col >
                          <input style={{width:"70%",margin:"2rem 0 0 0"}} type="text" placeholder="Enter here" />
                        <Button style={{width:"30%"}}>Order online</Button>
                          
                          </Col>
                      </Row>
                  </Container>
             


                ))
            }
        </div>
        </>
    )
}

export default Restaurent
