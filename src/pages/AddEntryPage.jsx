import React, { useState } from "react";
import styles from "../DataPage.module.css";
import axios from "axios";

const AddEntryPage = () => {
  const [flow, setFlow] = useState("");
  const [intensity, setIntensity] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [date, setDate] = useState("");

  // States for managing medication inputs
  const [medicationName, setMedicationName] = useState('');
  const [medicationDose, setMedicationDose] = useState('');
  const [medicationRecurring, setMedicationRecurring] = useState(false);
  const [medications, setMedications] = useState([]);

  const handleFlowChange = (event) => {
    setFlow(event.target.value);
  };

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selectedOption) => selectedOption !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const handleDoneClick = () => {
    // Ensure the date is not empty
    if (!date) {
      console.error('Date is required');
      return;
    }

    const entryData = {
      id: date,
      details: {
        selectedOptions,
        medications,
      },
    };

    axios.put(`http://localhost:3001/notes/${date}`, entryData)
        .then(response => {
          console.log('Data saved or updated:', response.data);
          // Implement post-save logic as needed, e.g., clearing form fields, showing success message
        })
        .catch(error => {
          console.error('There was an error saving the entry:', error);
        });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const checkboxes = [
    { id: 1, category: "Flow", option: 'Heavy', selected: selectedOptions.includes('Heavy') },
    { id: 2, category: "Flow", option: 'Medium', selected: selectedOptions.includes('Medium') },
    { id: 3, category: "Flow", option: 'Light', selected: selectedOptions.includes('Light') },
    { id: 4, category: "Flow", option: 'Spotting', selected: selectedOptions.includes('Spotting') },
    { id: 5, category: "Mood", option: 'Happy', selected: selectedOptions.includes('Happy') },
    { id: 6, category: "Mood", option: 'Sad', selected: selectedOptions.includes('Sad') },
    { id: 7, category: "Mood", option: 'Angry', selected: selectedOptions.includes('Angry') },
    { id: 8, category: "Mood", option: 'Fine', selected: selectedOptions.includes('Fine') },
    { id: 9, category: "Pain", option: 'Cramps', selected: selectedOptions.includes('Cramps') },
    { id: 10, category: "Pain", option: 'Breast', selected: selectedOptions.includes('Breast') },
    { id: 11, category: "Pain", option: 'Headache', selected: selectedOptions.includes('Headache') },
    { id: 12, category: "Pain", option: 'Body Ache', selected: selectedOptions.includes('Body Ache') },
  ];

  const tableFlow = [
    { option: 'Heavy' },
    { option: 'Medium' },
    { option: 'Light' },
    { option: 'Spotting' },
  ];

  const tableMood = [
    { option: 'Happy' },
    {  option: 'Sad' },
    {  option: 'Angy' },
    {  option: 'Fine' },

  ];

  const tablePain = [
    { option: 'Cramps' },
    {  option: 'Breast' },
    {  option: 'Headache' },
    {  option: 'Body Ache' },

  ];

  const addMedication = (event) => {
    event.preventDefault(); // Prevent form submission causing page reload

    // Temporary addition logic (replace with axios call to server as needed)
    const newMedication = {
      name: medicationName,
      dose: medicationDose,
      recurring: medicationRecurring
    };

    // Add the new medication to the state
    setMedications([...medications, newMedication]);

    // Reset medication input fields
    setMedicationName('');
    setMedicationDose('');
    setMedicationRecurring(false);
  };

  return (
      <div style={{color: "#6868AC", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        {/* Date Input */}
        <div style={{marginBottom: "1cm", marginLeft: "0.5cm"}}>
          <label htmlFor="date" style={{fontSize: "1em", fontWeight: "bold", color: "white"}}>Date:</label>
          <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              style={{marginLeft: "10px"}}
          />
        </div>

        {/* Flow 1 */}
        <div style={{
          fontSize: "1.2em",
          fontWeight: "bold",
          backgroundColor: "#6868AC",
          color: "white",
          width: "10cm",
          height: "0.75cm",
          marginBottom: "0.5cm",
          marginLeft: "0.5cm"
        }}>FLOW
        </div>
        {/* Table 1 */}
        <table style={{width: "70%", marginRight: "50px", borderCollapse: "collapse", marginLeft: "0.5cm"}}>
          <tbody>
          {tableFlow.map(({id, option}) => (
              <tr key={id}>
                <td>
                  <input
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleOptionChange(option)}
                  />
                </td>
                <td>{option}</td>
              </tr>
          ))}
          </tbody>
        </table>

        {/* Flow 1 */}
        <div style={{
          fontSize: "1.2em",
          fontWeight: "bold",
          backgroundColor: "#A9B4DD",
          color: "white",
          width: "10cm",
          height: "0.75cm",
          marginTop: "0.5cm",
          marginBottom: "0.5cm",
          marginLeft: "0.5cm"
        }}>MOOD
        </div>
        {/* Table 2 */}
        <table style={{width: "70%", marginRight: "50px", borderCollapse: "collapse", marginLeft: "0.5cm"}}>
          <tbody>
          {tableMood.map(({id, option}, index) => (
              <tr key={id}>
                <td>
                  <input
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleOptionChange(option)}
                      id={`checkbox-mood-${index}`}
                      className={styles.checkbox}
                  />
                  <label htmlFor={`checkbox-mood-${index}`} className={styles.label}></label>
                </td>
                <td>{option}</td>
              </tr>
          ))}
          </tbody>
        </table>

        {/* Flow 1 */}
        <div style={{
          fontSize: "1.2em",
          fontWeight: "bold",
          backgroundColor: "#9C7EAF",
          color: "white",
          width: "10cm",
          height: "0.75cm",
          marginTop: "0.5cm",
          marginBottom: "0.5cm",
          marginLeft: "0.5cm",

        }}>PAIN
        </div>
        {/* Table 1 */}
        <table style={{width: "70%", marginRight: "50px", borderCollapse: "collapse", marginLeft: "0.5cm"}}>
          <tbody>
          {tablePain.map(({id, option}) => (
              <tr key={id}>
                <td>
                  <input
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleOptionChange(option)}
                  />
                </td>
                <td>{option}</td>
              </tr>
          ))}
          </tbody>
        </table>

        {/* Medication input form */}
        <form onSubmit={addMedication}>
          <input
              type="text"
              placeholder="Medication Name"
              value={medicationName}
              onChange={(e) => setMedicationName(e.target.value)}
              required
          />
          <input
              type="text"
              placeholder="Dose"
              value={medicationDose}
              onChange={(e) => setMedicationDose(e.target.value)}
              required
          />
          <label>
            Recurring:
            <input
                type="checkbox"
                checked={medicationRecurring}
                onChange={(e) => setMedicationRecurring(e.target.checked)}
            />
          </label>
          <button type="submit">Add Medication</button>
        </form>

        {/* Display added medications */}
        {medications.length > 0 && (
            <ul>
              {medications.map((med, index) => (
                  <li key={index}>{`${med.name}, ${med.dose}, Recurring: ${med.recurring ? 'Yes' : 'No'}`}</li>
              ))}
            </ul>
        )}
        <div style={{display: "flex", justifyContent: "flex-end", marginRight: "10px"}}>
          <button onClick={handleDoneClick}>Done</button>
        </div>
      </div>

  );
};

export default AddEntryPage;
