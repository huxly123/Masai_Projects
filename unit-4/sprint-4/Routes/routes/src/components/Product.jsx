import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function Product() {
const obj=useParams()
console.log(obj);
    return (
        <div>
            <h1>product page of {obj.id}</h1>
          <button>  <Link to="/about">about</Link></button>
        </div>
    )
}

export default Product
