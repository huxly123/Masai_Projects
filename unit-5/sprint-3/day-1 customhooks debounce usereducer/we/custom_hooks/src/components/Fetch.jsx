import React from 'react'
import { useFetch } from '../utils/useFetch';

function Fetch() {
 const { error, loading, succcess } = useFetch("https://reqres.in/api/users");

 return loading ? (
   <h1>Loading</h1>
 ) : error ? (
   <h1>Error</h1>
 ) : succcess ? (
   <div className="App">
     <h1>success</h1>
   </div>
 ) : (
   ""
 );
}

export default Fetch
