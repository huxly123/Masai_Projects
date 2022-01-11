import React, { useState } from "react";
// import SearchBar from "src/screens/Home/SearchBar";
import { debounceFunc } from "./components/Debounce";

let debounceHandler = null;

function App() {
 const [searchInput, setSearchInput] = useState("");

 function fetchData(input) {
   if (input !== "") {
     console.log(`fetching data for ${input}`);
   }
 }

 function handleInput(event) {
   const newSearchInput = event.target.value;
   setSearchInput(newSearchInput);
   debounceHandler = debounceFunc(
     () => fetchData(newSearchInput),
     debounceHandler,
     1000
   );
 }

 function onClear() {
   setSearchInput("");
 }

 return <SearchBar {...{ searchInput, handleInput, onClear }} />;
}

export default App;
