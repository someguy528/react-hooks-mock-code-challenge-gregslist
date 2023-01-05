import React, {useState} from "react";

function NewListing({onAddListing}){

    const [newListingForm, setNewListingForm] = useState({
        description: "",
        image: "",
        location: ""
    })

    function handleFormChange(event){
        let name = event.target.name;
        let value = event.target.value;
        setNewListingForm({
            ...newListingForm,
            [name]: value
        })
        console.log(newListingForm)
    }


    //description: newListingForm.description,
    // image : newListingForm.image,
    // location : newListingForm.location,


    function handleFormSubmit(event){
        event.preventDefault();

        const submitForm = newListingForm;

        fetch("http://localhost:6001/listings" , {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submitForm)
        })
        .then(resp => resp.json())
        .then((newListing) => {
            onAddListing(newListing)
        })
    }

    return (
        <div>
            <form>
                <label>Description:</label>
                <input 
                type="text"
                name="description"
                value={newListingForm.description}
                onChange={handleFormChange}
                >
                </input>

                <label>Image:</label>
                <input 
                type="text"
                name="image"
                value={newListingForm.image}
                onChange={handleFormChange}
                >
                </input>

                <label>Location:</label>
                <input 
                type="text"
                name="location"
                value={newListingForm.location}
                onChange={handleFormChange}
                >
                </input>
                <button type="submit" onClick={handleFormSubmit}>Add listing</button>
            </form>
        </div>
    )
}

export default NewListing