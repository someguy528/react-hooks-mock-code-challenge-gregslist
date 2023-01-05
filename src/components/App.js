import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState(""); 
  const [listedCards, setListedCards] = useState([]);
  
  function handleSearchChange(searchQuery){
    setSearch(searchQuery)
  }

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} />
      <ListingsContainer search={search} listedCards={listedCards} setListedCards={setListedCards} />
    </div>
  );
}

export default App;
