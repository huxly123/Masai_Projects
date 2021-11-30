import  { useEffect, useState } from 'react'

export function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [succcess, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
       getData() 
    },[])

    const getData = () => {
        setLoading(true);
        try {
            fetch(url).then((d) => d.json()).then((d) => {
                setSuccess(d)
                setLoading(false);
            })
        } catch (err) {
            setError(true)
            setLoading(false);
        }
    }
        return {
            loading,
            succcess,
            error
        }
    
}
