import {useEffect, useState} from "react";
import {Medication} from "../components/Medication.jsx";

const MedicationsPage = () => {
    const [medications, setMedications] = useState([]);
    // States for form inputs
    const [name, setName] = useState('');
    const [dose, setDose] = useState('');
    const [recurring, setRecurring] = useState(false);

    // Mock function to simulate fetching medications from an API
    const fetchMedications = () => {
        return [
            new Medication('Amoxicillin', '500mg', true),
            new Medication('Ibuprofen', '200mg', false),
        ];
    };

    useEffect(() => {
        const meds = fetchMedications();
        setMedications(meds);
    }, []);

    const addMedication = (e) => {
        e.preventDefault(); // Prevent form from submitting the traditional way
        const newMed = new Medication(name, dose, recurring);
        setMedications(currentMeds => [...currentMeds, newMed]);
        // Optionally clear form fields after submission
        setName('');
        setDose('');
        setRecurring(false);
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
                <button type="submit">Add New Medication</button>
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
                        <td>{medication.isRecurring() ? 'Yes' : 'No'}</td>
                        <td>{medication.recurrenceFrequency || 'N/A'}</td>
                        <td>{medication.dosageInstructions || 'N/A'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicationsPage;
