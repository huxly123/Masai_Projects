import React, { useEffect, useState } from 'react'



function throttle(fn, wait) {
    let lastCall = 0;
    return function () {
        if (Date.now() - lastCall > wait) {
            lastCall = Date.now();
            fn();
        }
    }
}

function debouncer(fn, delay) {
    var debounce;
    return function () {
        debounce && clearTimeout(debounce);
        debounce = setTimeout(() => {
            fn();
        },delay)
    }
}


function Debounce() {

    const [state, setstate] = useState()
    
    const handleChange = () => {
        debouncer((e) => setstate(e.target.value), 800)
    }
console.log("rendered");
    useEffect(() => {
    
},[])
    return (
        <div>
            <input type="text" placeholder="enter name" onChange={handleChange}/>
        </div>
    )
}

export default Debounce
