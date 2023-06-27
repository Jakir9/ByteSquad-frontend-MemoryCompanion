import React from "react";
import { useState, useEffect } from "react";
import MedicationForm from "./MedicationForm";
import MedicationList from "./MedicationList";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

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
  const testInput = [
    {
      name: "Ibuprofen",
      dosageAmount: 2,
      dosageTime: "09:00",
      checked: false,
    },
    {
      name: "Paracetomol",
      dosageAmount: 2,
      dosageTime: "10:00",
      checked: false,
    },
  ];

  const [medication, setMedication] = useState(testInput); // useState hook to set the medication array // array of objects
  const [addMedicationClicked, setAddMedicationClicked] = useState(false);

  function addMedication(newMedication) {
    setMedication([...medication, newMedication]); // spread operator to add new medication to the array
    console.log(medication);
  }
  // create object using form data
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page
    // newMedication is used to populate new object with form data
    let newMedication = {
      name: event.target.name.value,
      dosageAmount: event.target.dosage.value,
      dosageTime: event.target.time.value,
    };

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
                    name={item.name}
                    dosageAmount={item.dosageAmount}
                    dosageTime={item.dosageTime}
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
