import React, { useState } from "react";
import axios from "axios";

const AddEntryPage = () => {
  const [flow, setFlow] = useState("");
  const [intensity, setIntensity] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [date, setDate] = useState(""); // State for the date

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

  const handleDateChange = (event) => { // Function to handle date change
    setDate(event.target.value);
  };

  const handleDoneClick = () => {
    const data = { selectedOptions };
    console.log(JSON.stringify(data));
    // You can save the JSON object or send it to a server here
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

  return (
<div className="entry-container scrollable-content">
  {/* Date selection input, styled and positioned at the start similar to the MedicationsPage */}
  <div className="input-group" style={{ margin: '20px 0' }}>
    <label htmlFor="date">Date:</label>
    <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
        style={{ marginLeft: '10px' }}
    />
  </div>
  {/* Flow 1 */}
  <div class="rounded-box">
  <div className="entry-text">FLOW</div>
  {/* Table 1 */}
  <table className="option-table">
    <tbody>
      {tableFlow.map(({ id, option }) => (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
              className="checkbox"
            />
            <label className="label">{option}</label>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>

  {/* Flow 2 */}
  <div class="rounded-box">
  <div className="entry-text">MOOD</div>
  {/* Table 2 */}
  <table className="option-table">
    <tbody>
      {tableMood.map(({ id, option }, index) => (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
              id={`checkbox-mood-${index}`}
              className="checkbox"
            />
            <label htmlFor={`checkbox-mood-${index}`} className="label">{option}</label>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>

  {/* Flow 3 */}
  <div class="rounded-box">
  <div className="entry-text">PAIN</div>
  {/* Table 3 */}
  <table className="option-table">
    <tbody>
      {tablePain.map(({ id, option }) => (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
              className="checkbox"
            />
            <label className="label">{option}</label>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div> 

    <button class="button-container button-styles" onClick={handleDoneClick}>Done</button>
</div>


  );
};

export default AddEntryPage;
