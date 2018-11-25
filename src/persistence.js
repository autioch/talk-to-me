const STORAGE_ID = 'talk-to-me-1.0.0';

function getSavedState() {
  let state;

  if (localStorage[STORAGE_ID]) {
    try {
      state = JSON.parse(localStorage[STORAGE_ID]);
      state.isSpeaking = false;
      state.errorMessage = '';
    } catch (err) {
      console.log('Failed to restore state'); // eslint-disable-line no-console
    }
  }

  return state;
}

function saveState(state) {
  const serialized = JSON.stringify(state);

  localStorage[STORAGE_ID] = serialized;
}

export {
  getSavedState,
  saveState
};
