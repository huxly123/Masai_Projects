import { useEffect, useState } from "react";

export default function useTimeout( delay) {
    
    const [state,setState]=useState(false)
    useEffect(() => {
        setTimeout(() => {
            setState(true)
        },delay)
    }, [])
    
return {state}
}