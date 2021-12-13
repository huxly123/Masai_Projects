import { useState } from "react";

   

export function useNotification(url) {
        const [loading, setLoading] = useState(false);
        const [succcess, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [successNotification, setsuccessNotification] = useState("")
    const [failureNotification ,setfailureNotification ]=useState("")
    

 useEffect(() => {
   getData();
 }, []);

 const getData = () => {
   setLoading(true);
   try {
     fetch(url)
       .then((d) => d.json())
       .then((d) => {
         setSuccess(d);
         setLoading(false);
       });
   } catch (err) {
     setError(true);
     setLoading(false);
   }
 };
    if (succcess) {
    setsuccessNotification("Successfully posted")
    }
    
    if (error) {
        setfailureNotification("Failure occured")
    }
    return {
        successNotification,
        failureNotification
}

   }