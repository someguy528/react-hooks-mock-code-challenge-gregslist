import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";
import NewListing from "./NewListing";

function ListingsContainer({listedCards, setListedCards, search}) {

  const [isSortedLoc, setSortLoc] = useState(false)

  // const [isFavorited, setFavorite] = useState ([{id:1, favorite:false}])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then((data) => {
      setListedCards(data)
    })
  }, []);

  //causes recursive loop, should figure out how to condense state of individual components in the future

  // function favoriteHandler(listing){
  //   setFavorite((isFavorited) => {
  //     return [...isFavorited, {
  //       key: listing.id,
  //       favorite: false
  //     }]
  //   } )
  // }

  function handleDeleteListing(id){
    const newListings = listedCards.filter((listing) => {
      return listing.id !== id
    });
    setListedCards(newListings)
  };

  function handleAddListing(newListing){
    const newAddedListings = [...listedCards, newListing]
    setListedCards(newAddedListings)
  }

  //could be combined into one variable
  const filteredListedCards = listedCards.filter((listing) => search === "" || listing.description.toUpperCase().includes(search.toUpperCase()))

  const sortedListedCards = filteredListedCards.sort((listA, listB) =>{
    if(isSortedLoc === true){
    return listA.location.localeCompare(listB.location);
  }
  return 1
})

  const allListedCards = sortedListedCards.map((listing) => {    
    return (
    <ListingCard listing={listing} key={listing.id} onDeleteClick={handleDeleteListing} />
    )
  });

  return (
    <main>
      <NewListing onAddListing={handleAddListing} />
      <button onClick={()=>setSortLoc(false)} >No Sorting</button>
      <button onClick={()=>setSortLoc(true)} >Sort By Alphabetical Location</button>
      <ul className="cards">
        {allListedCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
