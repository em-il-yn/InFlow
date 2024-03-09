class Medication {
    public name: string;
    public dose: number;
    public recurring: boolean;
    public recurrenceFrequency?: string;
    public dosageInstructions?: string;
    public startDate: Date;
    public endDate?: Date;
    public sideEffects: string[];

    constructor(name: string, dose: number, recurring: boolean) {
        this.name = name;
        this.dose = dose;
        this.recurring = recurring;
        this.recurrenceFrequency = '';
        this.dosageInstructions = '';
        this.startDate = new Date();
        this.endDate = new Date();
        this.sideEffects = [];
    }
}