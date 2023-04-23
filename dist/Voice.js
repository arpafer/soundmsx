import { Frecuency } from "./Frecuency.js";
export default class Voice {
    constructor(audioContext, volume = 0.5) {
        this.audioContext = audioContext;
        this.volume = volume;
        this.frecuencies = [];
        this.voice = this.audioContext.createOscillator();
        this.gain = this.audioContext.createGain();
        this.createOscillator();
    }
    createOscillator() {
        this.voice = this.audioContext.createOscillator();
        this.gain = this.audioContext.createGain();
        this.gain.gain.value = this.volume;
        this.voice.connect(this.gain);
        this.gain.connect(this.audioContext.destination);
    }
    setVolume(volume) {
        this.gain.gain.value = volume;
    }
    addFrecuency(frecuency, duration) {
        this.frecuencies.push(new Frecuency(frecuency, duration));
    }
    start() {
        this._start(0);
    }
    _start(freqIndex) {
        if (freqIndex <= this.frecuencies.length - 1) {
            this.createOscillator();
            let frequency = this.frecuencies[freqIndex];
            this.voice.frequency.value = frequency.value;
            this.voice.start();
            this.voice.stop(this.audioContext.currentTime + frequency.duration);
            this.voice.onended = () => this._start(freqIndex + 1);
        }
    }
}
