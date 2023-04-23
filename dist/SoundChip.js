import Voice from "./Voice.js";
const AudioContext = window.AudioContext;
class SoundChip {
    constructor() {
        this.audioContext = new AudioContext();
        this.voice1 = new Voice(this.audioContext, 0.5);
        this.voice2 = new Voice(this.audioContext, 0.3);
        this.voice3 = new Voice(this.audioContext, 0.2);
    }
    setVoiceFrequencies(voiceIndex, frecuencies) {
        for (let i = 0; i < frecuencies.length; i += 2) {
            let frecuency = frecuencies[i];
            let duration = frecuencies[i + 1];
            switch (voiceIndex) {
                case 1:
                    this.voice1.addFrecuency(frecuency, duration);
                    break;
                case 2:
                    this.voice2.addFrecuency(frecuency, duration);
                    break;
                case 3:
                    this.voice3.addFrecuency(frecuency, duration);
                    break;
            }
        }
    }
    setVoiceVolume(voiceIndex, volume) {
        switch (voiceIndex) {
            case 1:
                this.voice1.setVolume(volume);
                break;
            case 2:
                this.voice2.setVolume(volume);
                break;
            case 3:
                this.voice3.setVolume(volume);
                break;
        }
    }
    play(duration = 1) {
        // Iniciar la reproducción de los osciladores
        this.voice1.start();
    }
}
export default SoundChip;
