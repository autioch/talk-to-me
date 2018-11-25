import { getSavedState } from './persistence';

const IS_DEVELOPMENT = false;

const defaultState = {
  errorMessage: '',
  urlFolderPath: IS_DEVELOPMENT ? '' : '/talk-to-me',

  /* Synthesize */
  currentText: 'Test',
  voices: [],
  pitch: 1,
  rate: 1,
  isSpeaking: false,
  isSpeechSupported: !!window.speechSynthesis,

  /* Recognition */
  isRecognitionSupported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
  currentGrammar: 'aqua azure beige bisque black blue brown chocolate coral',
  isRecognizing: false,
  recognitionResult: '',
  recognitionDiagnosis: [],
  maxAlternatives: 2 // eslint-disable-line no-magic-numbers
};

const savedState = getSavedState();
const initialState = Object.assign({}, defaultState, savedState);

export default initialState;
