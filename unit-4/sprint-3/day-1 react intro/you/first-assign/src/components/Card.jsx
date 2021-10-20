import React from 'react'
import "./card.css"
function Card({url1,url2}) {
    return (
        <div id="card">
        <div id="img-div">
          <img src="https://franchise.pizzahut.com/images/home_started_pizza.jpg"/>
        </div>
          <div id="heading"><h1>Pepporoni pizza</h1>
         <img src={url1}/>
            <img src={url2}/>
          </div>
            </div>
    )
}

export default Card
