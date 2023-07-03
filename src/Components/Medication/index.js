import React from "react";
import { useState, useEffect } from "react";
import MedicationForm from "./MedicationForm";
import MedicationList from "./MedicationList";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

// const URL = "http://localhost:3002/api/medication/"
const URL = "https://memory-companion-backend.herokuapp.com/api/medication/"

function Medication() {
  // auth0 code
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // User is logged in, redirect to dashboard
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  // end auth0 code

  // hard coded some medication data to display on screen
  // const testInput = [
  //   {
  //     name: "Ibuprofen",
  //     dosageAmount: 2,
  //     dosageTime: "09:00",
  //     checked: false,
  //   },
  //   {
  //     name: "Paracetomol",
  //     dosageAmount: 2,
  //     dosageTime: "10:00",
  //     checked: false,
  //   },
  // ];

  const [medication, setMedication] = useState([]); // useState hook to set the medication array // array of objects
  const [addMedicationClicked, setAddMedicationClicked] = useState(false);

  // useEffect bellow is used to call the fetch medication list function when component is mounted
  useEffect(() => {
    fetchMedicationList();
  }, []);

  // || GET METHOD || //
  // The fetchMedicationList async function is used to fetch the list of medication from the server.
  // This can be called when the component is mounted, or when a new medication is added
  async function fetchMedicationList() { // async function to fetch medication list from server
    try {
      const response = await fetch(URL); // fetch request to server
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json(); // convert response to json
      console.log(`This is the data`, data);
      setMedication(Array.isArray(data.payload) ? data.payload : []); // set medication array to data payload
      console.log(`This is the data.payload`, data.payload);
    } catch (error) {
      console.error("error fetching medication list: ", error);
      setMedication([]);
    }

  }
// || POST METHOD || // 
  function addMedication(newMedication) {
    setMedication([...medication, newMedication]); // spread operator to add new medication to the array
    console.log(medication);
  }
  // create object using form data
  async function handleSubmit (event) {

    event.preventDefault(); // Prevents the form from refreshing the page
    // newMedication is used to populate new object with form data
    const newMedication = {
      user_id: 1,
      medication_name: event.target.name.value,
      scheduled_dosage: event.target.dosage.value,
      time_dosage: event.target.time.value,
    };
try {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
},
    body: JSON.stringify(newMedication),
  });
  if (response.ok) {
 const data = await response.json();
    console.log(`This is the data`, data);
    setMedication([...medication, data]);
    fetchMedicationList();
    console.log(`This is the data.payload`, data.payload);
  } else {
    throw new Error ("failed to add medication")
  }
 
} catch (error) {
  console.error("error fetching medication list: ", error);
 
}


    console.log(newMedication);
    addMedication(newMedication);
    setAddMedicationClicked(false);
    console.log("added: ", medication);
  };

  return (
    isAuthenticated && (
      <main>
        <h2 className="medication-header">MEDICATION</h2>

        {!addMedicationClicked && (
          <>
            <div className="medication-container">
              <h1 className="dosage-title">Your Dosage Today</h1>
              <table className="medication-table">
                <tr>
                  <th>Medication</th>
                  <th>Dosage</th>
                  <th>Time</th>
                  <th>Taken</th>
                </tr>

                {medication.map((item) => (
                  <MedicationList
                    name={item.medication_name}
                    dosageAmount={item.scheduled_dosage}
                    dosageTime={item.time_dosage.substring(0,5)}
                    checked={item.checked}
                  />
                ))}
              </table>
            </div>
          </>
        )}

        {!addMedicationClicked && (
          <button
            className="add-med-button"
            onClick={() => setAddMedicationClicked(!addMedicationClicked)}
          >
            Add Medication
          </button>
        )}

        {addMedicationClicked && <MedicationForm handleSubmit={handleSubmit} />}
      </main>
    )
  );
}

export default Medication;
