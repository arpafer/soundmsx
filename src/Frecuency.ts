export class Frecuency {
    private _value: number;
    private _duration: number;

    constructor(_value: number, _duration: number) {
        this._value = _value;
        this._duration = _duration;
    }

    get value(): number {
        return this._value;
    }

    get duration(): number {
        return this._duration;
    }
}