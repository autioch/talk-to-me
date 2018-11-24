export default {
  setVoiceList() {
    const voiceObjects = window.speechSynthesis.getVoices();
    const voices = voiceObjects
      .map((voiceObj, index) => ({
        id: index,
        label: `${voiceObj.lang} - ${voiceObj.name}`,
        name: voiceObj.name,
        language: voiceObj.lang,
        voiceURI: voiceObj.voiceURI,
        isLocal: voiceObj.localService,
        isDefault: voiceObj.default,
        isSelected: !!voiceObj.default
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    return {
      voices
    };
  },

  synthesize({ state, store }) {
    const { speachError, stopSpeaking, startSpeaking, clearSpeachError } = store;
    const { currentText, rate, pitch, voices } = state;
    const voiceIndex = voices.find((voice) => voice.isSelected).id;
    const selectedVoice = window.speechSynthesis.getVoices()[voiceIndex];
    const utterance = new SpeechSynthesisUtterance(currentText);

    utterance.onend = stopSpeaking;
    utterance.onerror = (ev) => speachError(ev.error.message).stopSpeaking();

    utterance.voice = selectedVoice;
    utterance.pitch = pitch;
    utterance.rate = rate;

    clearSpeachError();

    window.speechSynthesis.speak(utterance);

    startSpeaking();
  },

  setPitch({ data: pitch }) {
    return {
      pitch
    };
  },

  setRate({ data: rate }) {
    return {
      rate
    };
  },

  setText({ data: currentText }) {
    return {
      currentText
    };
  },

  setVoice({ state, data: voiceId }) {
    return {
      voices: state.voices.map((voice) => ({
        ...voice,
        isSelected: voice.id === voiceId
      }))
    };
  },

  startSpeaking() {
    return {
      isSpeaking: true
    };
  },

  stopSpeaking() {
    return {
      isSpeaking: false
    };
  },

  speachError({ data: errorMessage }) {
    return {
      errorMessage
    };
  },

  clearSpeachError() {
    return {
      errorMessage: ''
    };
  }
};
