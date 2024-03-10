import React, { useState } from "react";
import axios from "axios";

const MedicationsPage = () => {
  const [date, setDate] = useState("");
  const [medicationName, setMedicationName] = useState('');
  const [medicationDose, setMedicationDose] = useState('');
  const [medicationRecurring, setMedicationRecurring] = useState(false);
  const [medications, setMedications] = useState([]);
  const [medicationsByDate, setMedicationsByDate] = useState({});

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const addMedication = (event) => {
    event.preventDefault();
    const newMedication = {
      name: medicationName,
      dose: medicationDose,
      recurring: medicationRecurring
    };
    // Update medications for the selected date
    const updatedMedications = medicationsByDate[date] ? [...medicationsByDate[date]] : [];
    updatedMedications.push(newMedication);

    setMedicationsByDate({
      ...medicationsByDate,
      [date]: updatedMedications,
    });

    setMedicationName('');
    setMedicationDose('');
    setMedicationRecurring(false);
  };

  const handleDoneClick = () => {
    if (!date) {
      console.error('Date is required');
      return;
    }

    // Adjusted to send the medications for the current date
    const entryData = {
      id: date,
      details: {
        medications: medicationsByDate[date],
      },
    };

    axios.post('http://localhost:3001/notes', entryData)
        .then(response => {
          console.log('Data saved:', response.data);
        })
        .catch(error => {
          console.error('There was an error saving the entry:', error);
        });
  };

  return (
    <div className="medications-container scrollable-content" style={{ maxWidth: '370px', margin: 'auto' }}>
  <div className="add-entry-container">
  <div class="rounded-box-meds">
    <div className="input-group">
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
      />
    </div>

    <div className="medication-section">
      <form onSubmit={addMedication}>

        <div className="form-group">
          <input
            type="text"
            placeholder="Medication Name"
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Dose"
            value={medicationDose}
            onChange={(e) => setMedicationDose(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Recurring:
            <input
              type="checkbox"
              checked={medicationRecurring}
              onChange={(e) => setMedicationRecurring(e.target.checked)}
            />
          </label>
          <button className="button-styles" type="submit">Add Medication</button>
        </div>


      </form>
      </div>

      {medications.length > 0 && (
        <ul>
          {medications.map((med, index) => (
            <li key={index}>{`${med.name}, ${med.dose}, Recurring: ${med.recurring ? 'Yes' : 'No'}`}</li>
          ))}
        </ul>
      )}
    </div>

    <div className="done-button">
      <button className="button-styles" onClick={handleDoneClick}>Done</button>
    </div>
  </div>
</div>

  );
};

export default MedicationsPage;
