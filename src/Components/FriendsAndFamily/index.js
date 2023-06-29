import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import FileUpload from '../Upload/upload'
import './styles.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const url = 'http://localhost:3002/api/friendsandfamily/'

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
  const [selectedFile, setSelectedFile] = useState(null) // Potentially add in a 'default' image that can be pulled from the backend if no image is uploaded.
  const [photoURL, setPhotoURL] = useState('')
  // The useEffect hook is used to fetch the hardcoded family & friends data from the JSON file. This will be replaced with our database once we have hooked up the backend.
  // It fetches the data and sets the state of familyAndFriendsList to the data. This is then mapped over in the return statement to display the data.

  useEffect(() => {
    fetchFamilyAndFriendsList()
  }, [])

  async function fetchFamilyAndFriendsList() {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      const data = await response.json()
      console.log(`This is the data`, data)
      setFamilyAndFriendsList(Array.isArray(data.payload) ? data.payload : [])
      console.log(`This is the data.payload`, data.payload)
    } catch (error) {
      console.error('Error fetching data:', error)
      setFamilyAndFriendsList([])
    }
  }
  // This function handles the 'add' click. It essentially set the state to true, which then renders the form (conditional rendering of the form)
  function handleClick() {
    setAddButton(true)
  }

  // This function handles the submit button. It creates a new person object with the data from the form, and then adds it to the familyAndFriendsList array. The text capture logic is found within the form itself (event.target.value). This function then sets the state and assigns this to a new person. We can immutably add this new person to the array of family/friends. We then clear the form fields.
  // Image is hardcoded for now, but will be replaced with a file upload feature.
  async function handleSubmit(event) {
    event.preventDefault()
    // Declare new person object and assign values from form
    const newPerson = {
      user_id: 1,
      fnf_name: name,
      fnf_relationship: relationship,
      fnf_dob: DOB,
      fnf_age: age,
      fnf_photo: photoURL,
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPerson),
      })

      if (response.ok) {
        // New person was added successfully
        console.log('New person added successfully')
        console.log(photoURL)

        const data = await response.json()
        // Immutably update the familyAndFriendsList array
        setFamilyAndFriendsList([...familyAndFriendsList, data])
        fetchFamilyAndFriendsList()
      } else {
        // Handle error
        throw new Error('Failed to add family and friends member')
      }
    } catch (error) {
      // Handle error
      console.error('Error adding family and friends member:', error)
    }
    // Clear form fields
    setName('')
    setRelationship('')
    setAddButton(false)
    setDOB('')
    setAge(null)
    setPhotoURL('')
  }

  // // Function to handle when the delete button is clicked on a family/friends card. It takes in the id of the person, and then filters the array to remove the person with the matching id. This is then set as the new state. This is handed down to the Card component as props.
  // function handleDelete(fnf_id) {
  //   // Go through the array and find the person with the matching id
  //   // Immutably update the array without the person with the matching id
  //   setFamilyAndFriendsList(
  //     familyAndFriendsList.filter((item) => item.fnf_id !== fnf_id)
  //   );
  //   console.log(familyAndFriendsList);
  // }

  // || DELETE METHOD || //
  // Function to handle when the delete button is clicked
  async function handleDelete(fnf_id) {
    // Go through the array and find the person with the matching id
    // Immutably update the array without the person with the matching id
    try {
      const response = await fetch(`${url}/${fnf_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
        fetchFamilyAndFriendsList()
        console.log('Event deleted successfully!')
      } else {
        console.log('Failed to delete event')
      }
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    // console.log(selectedFile); //Selected file is an object with success and payload as keys
  }

  // Async allowed the string to be updated in the database - it was acting too fast before, only posting an empty string
  const handleFileUpload = async () => {
    const formData = new FormData()
    formData.append('file', selectedFile)
    // Local Host Port needs to be the backend server port
    axios
      .post('http://localhost:3002/upload', formData)
      .then((response) => {
        // File upload was successful
        console.log(response.data)
        setPhotoURL(response.data.payload) //Setting URL state to be the response data from the backend
      })
      .catch((error) => {
        // File upload failed
        console.error(error)
      })
  }

  return (
    isAuthenticated && (
      <>
        <h1 className="fnf-header">FRIENDS & FAMILY</h1>
        {!addButton && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown, which is essentially the Card component mapped over the familyAndFriendsList array to provide a card for each person.
          <>
            <div id="fnf-box">
              {familyAndFriendsList.map((item) => (
                <Card
                  key={item.fnf_id}
                  id={item.fnf_id}
                  name={item.fnf_name}
                  relationship={item.fnf_relationship}
                  image={item.fnf_photo}
                  age={item.fnf_age}
                  DOB={item.fnf_dob}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            <div>
              <button className="fnf-add-button" onClick={handleClick}>
                {' '}
                Add Member{' '}
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
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
            <FileUpload
              handleFileChange={handleFileChange}
              handleFileUpload={handleFileUpload}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          </div>
        )}
      </>
    )
  )
}

export default FriendsAndFamily
