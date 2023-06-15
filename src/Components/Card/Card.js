import React from "react";
import "./Card.css";

// The Card component takes in props from the FriendsAndFamily component. It then renders the data below. The data is passed in from the FriendsAndFamily component, and is mapped over in the return statement.

function Card({ id, name, relationship, image, DOB, age }) {
  return (
    <>
      <div className="fnf">
        <figure className="figure" style={{ width: 250 }}>
          {" "}
          <button className="delete-button"> X </button>
          <img
            style={{ height: 300, width: 200 }}
            src={image}
            alt={name}
          />{" "}
        </figure>

        <figcaption className="figure-caption">
          {" "}
          Name:{name}
          <br></br>
          Relationship:{relationship}
          <br></br>
          Age: {age} years old
          <br></br>
          Birthday: {DOB}
        </figcaption>
      </div>
    </>
  );
}

export default Card;
