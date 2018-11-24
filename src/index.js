import {createApp} from 'pipe-and-gauge';
import initialState from './initialState';
import actions from './actions';
import App from './app';
import 'antd/dist/antd.css';

const el = document.getElementById('root');

const store = createApp(actions, initialState, App, el);

store.setVoiceList();


if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = store.setVoiceList;
}
