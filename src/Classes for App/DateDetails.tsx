import { Medication } from "./Medication";
import { Period } from "./Period";

export class DateDetails {
    private _day: Date;
    public cycle?: Period;
    public medi?: Medication;
    public other?: any[];

    constructor(day: Date = new Date(), cycle?: Period, medi?: Medication) {
        this._day = day;
        this.cycle = cycle;
        this.medi = medi;
    }

    // Accessor for _day
    get day(): Date {
        return this._day;
    }

    // Mutator for _day
    set day(value: Date) {
        this._day = value;
    }

    // Method to display date info
    displayDateInfo(): void {
        // Displaying _day in a human-readable format
        console.log(this._day.toDateString()); // "Fri Mar 09 2024"

        // Displaying _day in a locale-sensitive way
        console.log(this._day.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })); // "Friday, March 9, 2024"
    }
}

