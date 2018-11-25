import { getSavedState } from './persistence';

const IS_DEVELOPMENT = true;

const defaultState = {
  currentText: 'Example text',
  voices: [],
  pitch: 1,
  rate: 1,
  isSpeaking: false,
  isSpeechSupported: !!window.speechSynthesis,
  errorMessage: '',
  urlFolderPath: IS_DEVELOPMENT ? '' : '/talk-to-me'
};

const savedState = getSavedState();
const initialState = Object.assign({}, defaultState, savedState);

export default initialState;
