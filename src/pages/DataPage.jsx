import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import localData from '../../db.json';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const DataPage = () => {
    const [data, setData] = useState([]);
    // Removed fetch-related states and functions

    useEffect(() => {
        // Directly set data from the imported JSON
        setData(localData.notes || []);
    }, []);

    const processDataForDisplay = () => {
        return data.map(note => ({
            date: note.id,
            selectedOptions: note.details.selectedOptions.join(", "),
            medications: note.details.medications.map(med => `${med.name} (${med.dose})`).join(", "),
            medicationCount: note.details.medications.length,
            painLevel: note.details.selectedOptions.includes("Body Ache") ? 1 : 0 // Simplified pain level calculation
            // Adjust the above line based on how you want to calculate pain level
        }));
    };

    const processedData = processDataForDisplay();

    // Setup for the graph
    const graphData = {
        labels: processedData.map(item => item.date),
        datasets: [
            {
                label: 'Number of Medications',
                data: processedData.map(item => item.medicationCount),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Pain Level',
                data: processedData.map(item => item.painLevel),
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Selected Options</th>
                    <th>Medications</th>
                </tr>
                </thead>
                <tbody>
                {processedData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.selectedOptions}</td>
                        <td>{item.medications}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Line data={graphData} />
        </div>
    );
};

export default DataPage;
