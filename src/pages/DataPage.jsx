import React, { useState, useEffect } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import localData from '../../db.json';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const DataPage = () => {
    //basic line graph
    // const [data, setData] = useState([]);
    // const [selectedMedication, setSelectedMedication] = useState('');
    // // Removed fetch-related states and functions
    //
    // useEffect(() => {
    //     // Directly set data from the imported JSON
    //     setData(localData.notes || []);
    // }, []);
    //
    // const processDataForDisplay = () => {
    //     return data.map(note => ({
    //         date: note.id,
    //         selectedOptions: note.details.selectedOptions.join(", "),
    //         medications: note.details.medications.map(med => `${med.name} (${med.dose})`).join(", "),
    //         medicationCount: note.details.medications.length,
    //         painLevel: note.details.selectedOptions.includes("Body Ache") ? 1 : 0 // Simplified pain level calculation
    //         // Adjust the above line based on how you want to calculate pain level
    //     }));
    // };
    //
    // const processedData = processDataForDisplay();
    // const uniqueMedications = [...new Set(data.flatMap(note => note.details.medications.map(med => med.name)))];
    //
    // // Setup for the graph
    // const graphData = {
    //     labels: processedData.map(item => item.date),
    //     datasets: [
    //         {
    //             label: 'Number of Medications',
    //             data: processedData.map(item => item.medicationCount),
    //             fill: false,
    //             borderColor: 'rgb(75, 192, 192)',
    //             tension: 0.1
    //         },
    //         {
    //             label: 'Pain Level',
    //             data: processedData.map(item => item.painLevel),
    //             fill: false,
    //             borderColor: 'rgb(255, 99, 132)',
    //             tension: 0.1
    //         }
    //     ]
    // };
    //
    // return (
    //     <div>
    //         <table>
    //             <thead>
    //             <tr>
    //                 <th>Date</th>
    //                 <th>Selected Options</th>
    //                 <th>Medications</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {processedData.map((item, index) => (
    //                 <tr key={index}>
    //                     <td>{item.date}</td>
    //                     <td>{item.selectedOptions}</td>
    //                     <td>{item.medications}</td>
    //                 </tr>
    //             ))}
    //             </tbody>
    //         </table>
    //         <Line data={graphData} />
    //     </div>
    // );

    //this is option with a drop down:
    //
    // const [data, setData] = useState([]);
    // const [selectedMedication, setSelectedMedication] = useState('');
    //
    // useEffect(() => {
    //     setData(localData.notes || []);
    // }, []);
    //
    // const uniqueMedications = [...new Set(data.flatMap(note => note.details.medications.map(med => med.name)))];
    //
    // const processDataForDisplay = () => {
    //     return data
    //         .filter(note => note.details.medications.some(med => med.name === selectedMedication))
    //         .map(note => ({
    //             date: note.id,
    //             painLevel: note.details.selectedOptions.includes("Body Ache") ? 1 : 0 // Simplified pain level calculation
    //         }));
    // };
    //
    // const processedData = processDataForDisplay();
    //
    // const graphData = {
    //     labels: processedData.map(item => item.date),
    //     datasets: [
    //         {
    //             label: `Pain Level for ${selectedMedication}`,
    //             data: processedData.map(item => item.painLevel),
    //             fill: false,
    //             borderColor: 'rgb(255, 99, 132)',
    //             tension: 0.1
    //         }
    //     ]
    // };
    //
    // return (
    //     <div>
    //         <div>
    //             <label htmlFor="medication-select">Choose a medication:</label>
    //             <select
    //                 id="medication-select"
    //                 value={selectedMedication}
    //                 onChange={(e) => setSelectedMedication(e.target.value)}
    //             >
    //                 <option value="">Select a medication</option>
    //                 {uniqueMedications.map((medication, index) => (
    //                     <option key={index} value={medication}>
    //                         {medication}
    //                     </option>
    //                 ))}
    //             </select>
    //         </div>
    //
    //         {selectedMedication && <Line data={graphData} />}
    //     </div>
    // );

    //this is bar chart:
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(localData.notes || []);
    }, []);

    // Adjusted function to calculate average pain level more accurately
    const calculateAveragePainPerMedication = () => {
        const medicationPainLevels = {}; // Stores cumulative pain levels for each medication
        const medicationCounts = {}; // Stores counts for each medication occurrence

        data.forEach(note => {
            const painSymptoms = note.details.selectedOptions;
            // Calculate pain level based on the number of specific symptoms reported
            const painLevel = painSymptoms.reduce((acc, symptom) => {
                if (["Cramps", "Breast", "Headache", "Body Ache"].includes(symptom)) {
                    return acc + 1; // Increase pain level for each symptom found
                }
                return acc;
            }, 0);

            note.details.medications.forEach(med => {
                if (medicationPainLevels[med.name]) {
                    medicationPainLevels[med.name] += painLevel;
                    medicationCounts[med.name] += 1;
                } else {
                    medicationPainLevels[med.name] = painLevel;
                    medicationCounts[med.name] = 1;
                }
            });
        });

        // Calculate average pain level for each medication
        const averagePainLevels = Object.keys(medicationPainLevels).map(medication => ({
            medication,
            averagePain: medicationPainLevels[medication] / medicationCounts[medication]
        }));

        return averagePainLevels;
    };

    const averagePainPerMedication = calculateAveragePainPerMedication();

    const chartData = {
        labels: averagePainPerMedication.map(item => item.medication),
        datasets: [
            {
                label: 'Average Pain Level',
                data: averagePainPerMedication.map(item => item.averagePain),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div>
            <h2>Average Pain Level by Medication</h2>
            <Bar data={chartData} options={{
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Average Pain Level'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Medication'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Pain Level Correlation with Medications'
                    }
                },
            }} />
        </div>
    );
 };

export default DataPage;
