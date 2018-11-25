import { getSavedState } from './persistence';

const IS_DEVELOPMENT = false;

const defaultState = {
  currentText: 'Example text',
  voices: [],
  pitch: 1,
  rate: 1,
  isSpeaking: false,
  errorMessage: '',
  urlFolderPath: IS_DEVELOPMENT ? '' : '/talk-to-me'
};

const savedState = getSavedState();
const initialState = savedState || defaultState;

export default initialState;
