import { createApp } from 'pipe-and-gauge';
import initialState from './initialState';
import actions from './actions';
import App from './app';
import 'antd/dist/antd.css';

/* Catch all errors and display them, as this is research app :) */
window.onerror = (message) => alert(message); // eslint-disable-line no-alert

const el = document.getElementById('root');
const store = createApp(actions, initialState, App, el);

/* Set initial list of voices and trigger first render. */
store.setVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = store.setVoiceList;
}

/* Persist app state. */
store.subscribe(({ state }) => {
  const serialized = JSON.stringify(state);

  localStorage[state.STORAGE_ID] = serialized;
});

/* Replace previous event handler with a user friendly info. */
window.onerror = (message) => store.speachError(message);
