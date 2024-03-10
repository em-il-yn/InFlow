export class Maps {
    // Declare the property with its type
    medicationMap: Map<string, any[]> = new Map<string, any[]>();

    // Alternatively, you can initialize the property inside the constructor
    constructor() {
        this.medicationMap = new Map<string, any[]>();
    }
}
