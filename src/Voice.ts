import { Frecuency } from "./Frecuency.js";

export default class Voice {
    private voice: OscillatorNode;
    private gain: GainNode;
    private frecuencies: Frecuency[];
    private audioContext: AudioContext;
    private volume: number;

    constructor(audioContext: AudioContext, volume: number = 0.5) {
        this.audioContext = audioContext;
        this.volume = volume;
        this.frecuencies = [];
        this.voice = this.audioContext.createOscillator();
        this.gain = this.audioContext.createGain();
        this.createOscillator();
    }

    private createOscillator() {
        this.voice = this.audioContext.createOscillator();
        this.gain = this.audioContext.createGain();
        this.gain.gain.value = this.volume;
        this.voice.connect(this.gain);
        this.gain.connect(this.audioContext.destination);
    }

    setVolume(volume: number) {
        this.gain.gain.value = volume;
    }

    addFrecuency(frecuency: number, duration: number) {
        this.frecuencies.push(new Frecuency(frecuency, duration));
    }

    start(): void {
      this._start(0);
    }

    private _start(freqIndex: number): void {
        if (freqIndex <= this.frecuencies.length - 1) {
            this.createOscillator();
            let frequency: Frecuency = this.frecuencies[freqIndex];           
            this.voice.frequency.value = frequency.value;
            this.voice.start();
            this.voice.stop(this.audioContext.currentTime + frequency.duration);
            this.voice.onended = () => this._start(freqIndex + 1);
        }
    }
}