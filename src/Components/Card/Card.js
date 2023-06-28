import React from "react";
import "./Card.css";

// The Card component takes in props from the FriendsAndFamily component. It then renders the data below. The data is passed in from the FriendsAndFamily component and a new card rendered for each person in the array.

function Card({ id, name, relationship, image, DOB, age, handleDelete }) {
  return (
    <>
      <div className="fnf-card">
      <button className="delete-button" onClick={() => handleDelete(id)}>
        {" "}
        X{" "}
      </button>
        <figure className="figure" style={{ width: 300 }}>
          {" "}
          <img
            style={{ height: 300, width: 200 }}
            src={image}
            alt={name}
          />{" "}
        </figure>
        <figcaption className="figure-caption">
          {" "}
          Name: {name}
          <br></br>
          Relationship: {relationship}
          <br></br>
          Age:  {age}  years old
          <br></br>
          Birthday:  {DOB}
        </figcaption>
      </div>
    </>
  );
}

export default Card;
