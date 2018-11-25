const synthesis = window.speechSynthesis;
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const GrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

/* TODO */
let recognition;

export default {

  /* Synthesis */

  setVoiceList({ state }) {
    if (!state.isSpeechSupported) {
      return {};
    }

    const voiceObjects = synthesis.getVoices();
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
    if (!state.isSpeechSupported) {
      return;
    }
    const { speachError, stopSpeaking, startSpeaking, clearSpeachError } = store;
    const { currentText, rate, pitch, voices } = state;
    const voiceIndex = voices.find((voice) => voice.isSelected).id;
    const selectedVoice = synthesis.getVoices()[voiceIndex];
    const utterance = new SpeechSynthesisUtterance(currentText);

    utterance.onend = stopSpeaking;
    utterance.onerror = (ev) => speachError(ev.error.message).stopSpeaking();

    utterance.voiceURI = selectedVoice.voiceURI;
    utterance.lang = selectedVoice.lang;
    utterance.pitch = pitch;
    utterance.rate = rate;

    clearSpeachError();

    synthesis.speak(utterance);

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
  },

  /* Recognition */

  setGrammar({ data: grammar }) {
    return {
      currentGrammar: grammar
    };
  },

  /* TODO https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition */
  /* TODO https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent */

  recognizeStart({ state, store }) { // eslint-disable-line max-statements
    const { maxAlternatives, currentGrammar } = state;
    const words = currentGrammar.split(' ').join(' | ');
    const grammarName = 'talkToMes';
    const grammarTerm = 'talkToMe';
    const grammar = `#JSGF V1.0; grammar ${grammarName}; public <${grammarTerm}> = ${words};`;

    recognition = new Recognition();
    const speechRecognitionList = new GrammarList();

    speechRecognitionList.addFromString(grammar, 1);

    recognition.grammars = speechRecognitionList;

    // recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = maxAlternatives;

    recognition.onresult = (ev) => store.setRecognitionResult(ev);
    recognition.onerror = (ev) => store.setRecognitionError(ev);

    recognition.onend = () => store.addRecognitonDiagnosis('End');
    recognition.onstart = () => store.addRecognitonDiagnosis('Start');

    recognition.onnomatch = () => store.addRecognitonDiagnosis('No match');

    recognition.onaudioend = () => store.addRecognitonDiagnosis('Audio end');
    recognition.onaudiostart = () => store.addRecognitonDiagnosis('Audio start');

    recognition.onsoundend = () => store.addRecognitonDiagnosis('Sound end');
    recognition.onsoundstart = () => store.addRecognitonDiagnosis('Sound start');

    recognition.onspeechend = () => store.recognizeStop();
    recognition.onspeechstart = () => store.addRecognitonDiagnosis('Speech start');

    store.startRecognizing();
    recognition.start();
  },

  setMaxAlternatives({ data: maxAlternatives }) {
    return {
      maxAlternatives
    };
  },

  recognizeStop({ store, state: { recognitionDiagnosis } }) {
    store.stopRecognizing();
    recognition.stop();
    store.addRecognitonDiagnosis('Speech end');
  },

  setRecognitionError({ data: ev, store, state: { recognitionDiagnosis } }) {
    store.stopRecognizing();
    store.addRecognitonDiagnosis(`Error occurred in recognition: ${ev.error}, ${ev.message}`);
  },

  setRecognitionResult({ data: ev, store }) {
    store.stopRecognizing();

    /* RecognitionResult doesn't serialize well. */
    const resultCount = ev.results.length;
    const results = [];

    for (let resultIndex = 0; resultIndex < resultCount; resultIndex++) {
      const speechRecognitionResult = ev.results.item(resultIndex);
      const alternativeCount = speechRecognitionResult.length;

      const items = [];

      for (let itemIndex = 0; itemIndex < alternativeCount; itemIndex++) {
        const speechRecognitionAlternative = speechRecognitionResult.item(itemIndex);

        items.push({
          transcript: speechRecognitionAlternative.transcript, // text
          confidence: speechRecognitionAlternative.confidence // 0 -1
        });
      }

      results.push({
        items
      });
    }

    store.addRecognitonDiagnosis('Result');

    return {
      recognitionResult: JSON.stringify(results, null, '  ')
    };
  },

  startRecognizing() {
    return {
      isRecognizing: true,
      recognitionResult: '',
      recognitionDiagnosis: []
    };
  },

  addRecognitonDiagnosis({ data: diagnosis, state: { recognitionDiagnosis } }) {
    return {
      recognitionDiagnosis: recognitionDiagnosis.concat(diagnosis)
    };
  },

  stopRecognizing() {
    return {
      isRecognizing: false
    };
  }

};
