import React from 'react';
import Synthesize from './synthesize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VoiceList from './voiceList';
import Menu from './menu';
import './styles.scss';

const NOT_AVAILABLE = 'Sorry, speech synthesis is not available on this device.';

export default function App({ store, state }) {
  const { errorMessage, isSpeechSupported } = state;

  return (
    <div className="app">
      <Router basename={state.urlFolderPath}>
        <div className="app-container">
          <Menu />
          <Route exact path="/" render={() => <Synthesize state={state} store={store} /> } />
          <Route exact path="/voiceList" render={() => <VoiceList state={state} store={store} /> } />
          {errorMessage ? <div className="app-error">{errorMessage}</div> : ''}
          {isSpeechSupported ? '' : <div className="app-error">{NOT_AVAILABLE}</div>}
        </div>
      </Router>
    </div>
  );
}
