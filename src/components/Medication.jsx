export class Medication {
    constructor(name, dose, recurring) {
        this.name = name;
        this.dose = dose;
        this.recurring = recurring;
    }

    isRecurring() {
        return this.recurring;
    }

    setFrequency(num) {
        this.recurrenceFrequency = num;
    }

    setDosageInstruction(str) {
        this.dosageInstructions = str;
    }
    toJSON() {
        return {
            name: this.name,
            dosage: this.dosage,
            recurring: this.recurring
        };
    }

    // Reconstruct a Medication instance from a plain object
    static fromJSON(json) {
        return new Medication(json.name, json.dosage);
    }
}

