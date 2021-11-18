import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Product() {

    const [product,setProduct]=useState({})

    const { id } = useParams()
    
    useEffect( () => {
        fetch(`http://localhost:3001/data/${id}`).then((d) => d.json())
            .then((d) => {
            setProduct(d);
        })
   
    
    }, [id])

    return (
        <div>
            {
                <div key={product.div}>
                    <p>Product No: {product.id}</p>
                    <p>Product Name: {product.name}</p>
                    <p>Product price:{product.price }</p>
                    
                    </div>
            }
        </div>
    )
}

export default Product
