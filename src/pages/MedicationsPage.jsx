import {useEffect, useState} from "react";
import {Medication} from "../components/Medication.jsx";
import axios from "axios";

const MedicationsPage = () => {
    const [medications, setMedications] = useState([]);
    // States for form inputs
    const [name, setName] = useState('');
    const [dose, setDose] = useState('');
    const [recurring, setRecurring] = useState(false);

    // axios.get('http://localhost:3001/notes')
    //     .then(response => {
    //         const notes = response.data
    //setNotes(response.data)
    //ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}
        //     })

    // Mock function to simulate fetching medications from an API
    const fetchMedications = () => {
        return [
            new Medication('Amoxicillin', '500mg', true),
            new Medication('Ibuprofen', '200mg', false),
        ];

        // addNote = event => {
        //     event.preventDefault()
        //     const noteObject = {
        //         content: newNote,
        //         important: Math.random() < 0.5,
        //     }
        //
        //     axios
        //         .post('http://localhost:3001/notes', noteObject)
        //         .then(response => {
        //             console.log(response)
        //         })
        // }
    };

    useEffect(() => {
        const meds = fetchMedications();
        setMedications(meds);
    }, []);

    const addMedication = () => {
        // Construct the new medication object from the state
        const medicationData = { name, dose, recurring };

        // Post the new medication data to the server
        axios.post('http://localhost:3001/notes', medicationData)
            .then(response => {
                // Assuming response.data contains the newly added medication object
                // with all necessary properties (including any id if applicable)
                const updatedMedication = response.data;

                // Update the medications state with the new medication
                // This will trigger a re-render and should update the table
                setMedications(currentMeds => [...currentMeds, updatedMedication]);

                // Reset the form fields
                setName('');
                setDose('');
                setRecurring(false);
            })
            .catch(error => {
                console.error("There was an error saving the medication: ", error);
            });
    };

    return (
        <div>
            <p>I am the medications page!</p>
            {/* Form for adding new medication */}
            <form onSubmit={addMedication}>
                <input
                    type="text"
                    placeholder="Medication Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Dose"
                    value={dose}
                    onChange={(e) => setDose(e.target.value)}
                    required
                />
                <label>
                    Recurring:
                    <input
                        type="checkbox"
                        checked={recurring}
                        onChange={(e) => setRecurring(e.target.checked)}
                    />
                </label>
                <button type="button" onClick={addMedication}>Add New Medication</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Dose</th>
                    <th>Recurring</th>
                    <th>Frequency (hours)</th>
                    <th>Dosage Instructions</th>
                </tr>
                </thead>
                <tbody>
                {medications.map((medication, index) => (
                    <tr key={index}>
                        <td>{medication.name}</td>
                        <td>{medication.dose}</td>
                        <td>{medication.recurring ? 'Yes' : 'No'}</td>
                        {/* Ensure other cells are correctly filled */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicationsPage;
