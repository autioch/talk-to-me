const IS_DEVELOPMENT = true;

export default {
  currentText: 'Example text',
  voices: [],
  pitch: 1,
  rate: 1,
  isSpeaking: false,
  errorMessage: '',
  urlFolderPath: IS_DEVELOPMENT ? '' : '/talk-to-me'
}