const IS_DEVELOPMENT = false;

const STORAGE_ID = 'talk-to-me-1.0.0';

const defaultState = {
  currentText: 'Example text',
  voices: [],
  pitch: 1,
  rate: 1,
  isSpeaking: false,
  errorMessage: '',
  urlFolderPath: IS_DEVELOPMENT ? '' : '/talk-to-me',
  STORAGE_ID
};

/* Try to restore state from previous session. */
let initialState = defaultState;

if (localStorage[STORAGE_ID]) {
  try {
    initialState = JSON.parse(localStorage[STORAGE_ID]);
    initialState.isSpeaking = false;
    initialState.errorMessage = '';
  } catch (err) {
    console.log('Failed to restore state'); // eslint-disable-line no-console
  }
}

export default initialState;
