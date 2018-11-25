const STORAGE_ID = 'talk-to-me-1.0.0';

const PERSISTED_PROPS = ['currentText', 'currentGrammar', 'pitch', 'rate', 'maxAlternatives'];

function getSavedState() {
  let state;

  if (localStorage[STORAGE_ID]) {
    try {
      const deserialized = JSON.parse(localStorage[STORAGE_ID]);

      state = PERSISTED_PROPS.reduce((obj, prop) => {
        const value = deserialized[prop];

        if (value) {
          Object.assign(obj, {
            [prop]: deserialized[prop]
          });
        }

        return obj;
      }, {});
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
