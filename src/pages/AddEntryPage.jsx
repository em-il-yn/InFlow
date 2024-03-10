import React, { useState } from "react";
import styles from "../DataPage.module.css"


const AddEntryPage = () => {
  const [flow, setFlow] = useState("");
  const [intensity, setIntensity] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

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
      <div style={{color: "#6868AC", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
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

        <div style={{display: "flex", justifyContent: "flex-end", marginRight: "10px"}}>
          <button onClick={handleDoneClick}>Done</button>
        </div>
      </div>

  );
};

export default AddEntryPage;
