import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./all_products.module.css"


function Allproducts() {

    const [data, setdata] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3001/data").then((d) => d.json())
            .then((d) => {
            setdata(d)
        })
    },[])

    return (
        <div className={styles.body}>
            {
                data.map((e) => (
                    <div key={e.id}>
                        <Link className={styles.Link} to={`/products/${e.id}`}>{e.name}</Link>
                        </div>
                ))
            }
        </div>
    )
}

export default Allproducts
