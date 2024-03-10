export class Period{
    public _flow: string | null;
    public _isPeriod: boolean;

    constructor() {
        this._isPeriod = false;
        this._flow = null;
    }

    public get isPeriod(): boolean {
        return this._isPeriod;
    }

    public set isPeriod(value: boolean) {
        this._isPeriod = value;
    }

    public get flow(): string | null {
        return this._flow;
    }

    public set flow(value: string | null) {
        this._flow = value;
    }
}