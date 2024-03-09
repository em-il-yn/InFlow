export class Medication {
    public name: string;
    public dose: number;
    public recurring: boolean;
    public recurrenceFrequency?: number;
    public dosageInstructions?: string;


    constructor(name: string, dose: number, recurring: boolean) {
        this.name = name;
        this.dose = dose;
        this.recurring = recurring;
    }

    public isRecurring() {
        return this.recurring;
    }

    setFrequency(num: number) {
        this.recurrenceFrequency = num;
    }

    setDosageInstruction(str: string) {
        this.dosageInstructions = str;
    }
}