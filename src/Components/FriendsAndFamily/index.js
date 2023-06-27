import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './styles.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'

function FriendsAndFamily() {
  // auth0 code
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      // User is logged in, redirect to dashboard
      navigate('/login')
    }
  }, [isAuthenticated, navigate])
  // end auth0 code

  // The first useState is used for the array of friends and family.
  const [familyAndFriendsList, setFamilyAndFriendsList] = useState([])
  // This block of useState is used for populate the form when a new family member is added.
  const [addButton, setAddButton] = useState(false)
  const [relationship, setRelationship] = useState('')
  const [name, setName] = useState('')
  const [DOB, setDOB] = useState('')
  const [age, setAge] = useState('')

  // The useEffect hook is used to fetch the hardcoded family & friends data from the JSON file. This will be replaced with our database once we have hooked up the backend.
  // It fetches the data and sets the state of familyAndFriendsList to the data. This is then mapped over in the return statement to display the data.

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('friendsAndFamilyDB.json')
        const data = await response.json()
        setFamilyAndFriendsList(data)
      } catch (error) {
        console.error('Error fetching JSON:', error)
        setFamilyAndFriendsList([])
      }
    }
    fetchData()
  }, [])

  // This function handles the 'add' click. It essentially set the state to true, which then renders the form (conditional rendering of the form)
  function handleClick() {
    setAddButton(true)
  }

  // This function handles the submit button. It creates a new person object with the data from the form, and then adds it to the familyAndFriendsList array. The text capture logic is found within the form itself (event.target.value). This function then sets the state and assigns this to a new person. We can immutably add this new person to the array of family/friends. We then clear the form fields.
  // Image is hardcoded for now, but will be replaced with a file upload feature.
  function handleSubmit(event) {
    event.preventDefault()
    // Declare new person object and assign values from form
    const newPerson = {
      id: familyAndFriendsList.length,
      name: name,
      relationship: relationship,
      image:
        'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg',
      age: age,
      dateOfBirth: DOB,
    }
    // Immutably update the familyAndFriendsList array
    setFamilyAndFriendsList([...familyAndFriendsList, newPerson])

    // Clear form fields
    setName('')
    setRelationship('')
    setAddButton(false)
    setDOB('')
    setAge(null)
  }

  // Function to handle when the delete button is clicked on a family/friends card. It takes in the id of the person, and then filters the array to remove the person with the matching id. This is then set as the new state. This is handed down to the Card component as props.
  function handleDelete(id) {
    // Go through the array and find the person with the matching id
    // Immutably update the array without the person with the matching id
    setFamilyAndFriendsList(
      familyAndFriendsList.filter((item) => item.id !== id)
    )
    console.log(familyAndFriendsList)
  }

  return (
    isAuthenticated && (
      <>
        <h1 className='fnf-header'>Friends & Family</h1>
        {!addButton && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown, which is essentially the Card component mapped over the familyAndFriendsList array to provide a card for each person.
          <>
            <div id="fnf-box">
              {familyAndFriendsList.map((item) => (
                <Card
                  id={item.id}
                  name={item.name}
                  relationship={item.relationship}
                  image={item.image}
                  age={item.age}
                  DOB={item.dateOfBirth}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            <div>
              <button className="fnf-add-button" onClick={handleClick}>
                {' '}
                Add{' '}
              </button>
            </div>
          </>
        )}

        {addButton && ( // When addButton is clicked, it is true, therefore the form will be shown
          <div className="fnf-form">
            {/* Form logic is below - This renders the form, which contains different inputs for the different information we are capturing (e.g. name, relationship.) */}
            <form className="fnf-form" onSubmit={handleSubmit}>
              <label>
                {' '}
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                />
              </label>
              <br></br>
              <label>
                {' '}
                Relationship:
                <input
                  type="text"
                  label="Relationship: "
                  value={relationship}
                  onChange={(event) => setRelationship(event.target.value)}
                  placeholder="Relationship"
                />
              </label>
              <br></br>
              <label>
                {' '}
                Age:
                <input
                  type="number"
                  label="Age: "
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  placeholder="Age"
                  required
                />
              </label>
              <br></br>
              <label>
                {' '}
                Date of Birth:
                <input
                  className="input-date"
                  type="date"
                  label="Date of Birth: "
                  value={DOB}
                  onChange={(event) => setDOB(event.target.value)}
                  placeholder="Date of Birth"
                />
              </label>
              <br></br>
              <button type="submit" className="fnf-save-button">
                Save
              </button>
            </form>
          </div>
        )}
      </>
    )
  )
}

export default FriendsAndFamily
