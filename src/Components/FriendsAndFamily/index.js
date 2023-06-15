import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

function FriendsAndFamily() {
  // The first useState is used for the array of friends and family.
  const [familyAndFriendsList, setFamilyAndFriendsList] = useState([]);
  // This block of useState is used for populate the form when a new family member is added.
  const [addButton, setAddButton] = useState(false);
  const [relationship, setRelationship] = useState("");
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState("");

  // The useEffect hook is used to fetch the hardcoded family & friends data from the JSON file. This will be replaced with our database once we have hooked up the backend.
  // It fetches the data and sets the state of familyAndFriendsList to the data. This is then mapped over in the return statement to display the data.

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("friendsAndFamilyDB.json");
        const data = await response.json();
        setFamilyAndFriendsList(data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
        setFamilyAndFriendsList([]);
      }
    }
    fetchData();
  }, []);

  // This function handles the 'add' click. It essentially set the state to true, which then renders the form.
  function handleClick() {
    setAddButton(true);
  }

  // This function handles the submit button. It creates a new person object with the data from the form, and then adds it to the familyAndFriendsList array. The text capture logic is found within the form itself (event.target.value). This function then sets the state and assigns this to a new person. We can immutably add this new person to the array of family/friends. We then clear the form fields.
  // Image is hardcoded for now, but will be replaced with a file upload feature.
  function handleSubmit(event) {
    event.preventDefault();
    // Declare new person object and assign values from form
    const newPerson = {
      id: familyAndFriendsList.length,
      name: name,
      relationship: relationship,
      image:
        "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      age: age,
      dateOfBirth: DOB,
    };
    // Immutably update the familyAndFriendsList array
    setFamilyAndFriendsList([...familyAndFriendsList, newPerson]);

    // Clear form fields
    setName("");
    setRelationship("");
    setAddButton(false);
    setDOB("");
    setAge(null);
  }

  return (
    <>
      {!addButton && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown
        <>
          {familyAndFriendsList.map((item) => (
            <Card
              id={item.id}
              name={item.name}
              relationship={item.relationship}
              image={item.image}
              age={item.age}
            />
          ))}

          <button className="add-button" onClick={handleClick}>
            {" "}
            Add{" "}
          </button>
        </>
      )}

      {addButton && ( // When addButton is clicked, it is true, therefore the form will be shown
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </label>

          <label>
            {" "}
            Relationship:
            <input
              type="text"
              label="Relationship: "
              value={relationship}
              onChange={(event) => setRelationship(event.target.value)}
              placeholder="Relationship"
            />
          </label>

          <label>
            {" "}
            Age:
            <input
              type="number"
              label="Age: "
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="age"
            />
          </label>

          <label>
            {" "}
            Date of Birth:
            <input
              type="date"
              label="Date of Birth: "
              value={DOB}
              onChange={(event) => setDOB(event.target.value)}
              placeholder="Date of Birth"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default FriendsAndFamily;
