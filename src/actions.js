const { speechSynthesis } = window;

export default {
  setVoiceList(){
    const voiceObjects = speechSynthesis.getVoices();
    const voices = voiceObjects
      .map((voiceObj, index)=>({
        id: index,
        label: voiceObj.lang + ' - ' + voiceObj.name,
        name: voiceObj.name,
        language: voiceObj.lang,
        voiceURI:voiceObj.voiceURI,
        isLocal: voiceObj.localService,
        isDefault: voiceObj.default,
        isSelected: !!voiceObj.default
      }))
      .sort((a,b) => a.label.localeCompare(b.label))

    return {
      voices: voices
    }
  },

  synthesize({ state, store }){
    const { speachError, stopSpeaking, startSpeaking, clearSpeachError } = store;
    const { currentText, rate, pitch, voices } = state;
    const voiceIndex = voices.find(voice => voice.isSelected).id;
    const voice = speechSynthesis.getVoices()[voiceIndex];
    const utterance = new SpeechSynthesisUtterance(currentText);

    utterance.onend = stopSpeaking;
    utterance.onerror = speachError;

    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;

    clearSpeachError();

    speechSynthesis.speak(utterance);

    startSpeaking();
  },

  setPitch({data: pitch}){
    return {
      pitch
    };
  },

  setRate({data: rate}){
    return {
      rate
    };
  },

  setText({data: currentText}){
    return {
      currentText
    }
  },

  setVoice({ state, data: voiceId }){

    return {
      voices: state.voices.map(voice => ({
        ...voice,
        isSelected: voice.id === voiceId
      }))
    }
  },

  startSpeaking(){
    return {
      isSpeaking: true
    }
  },

  stopSpeaking(){
    return {
      isSpeaking: false
    }
  },

  speachError(err){
    return {
      errorMessage: err.message
    }
  },

  clearSpeachError(){
    return {
      errorMessage: ''
    }
  }
}
