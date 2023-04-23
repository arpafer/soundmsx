import MusicalNote from "./MusicalNote.js";
import SoundChip from "./SoundChip.js";
let sound = new SoundChip();
sound.setVoiceFrequencies(1, [MusicalNote.Do1, 1, MusicalNote.Do2, 1, MusicalNote.Do3, 1,
    MusicalNote.Do4, 1, MusicalNote.Do5, 1, MusicalNote.Do6, 1,
    MusicalNote.Do7, 1, MusicalNote.Do8, 1]);
sound.play();
//sound.playReMayor();
//sound.play();
