import React, {useState} from "react";

function ListingCard({listing, onDeleteClick}) {

  const [isFavorited, setFavorited] = useState(false);
  const {id, description, image, location} = listing;

  function handleFavoriteClick(){
    setFavorited( (isFavorited) => !isFavorited);
    console.log(isFavorited)
  };

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      onDeleteClick(id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited === true ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
