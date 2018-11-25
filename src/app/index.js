import React from 'react';
import Synthesize from './synthesize';
import Recognition from './recognize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VoiceList from './voiceList';
import Menu from './menu';
import './styles.scss';

export default function App({ store, state }) {
  const { errorMessage } = state;

  return (
    <div className="app">
      <Router basename={state.urlFolderPath}>
        <div className="app-container">
          <Menu />
          <Route exact path="/" render={() => <Synthesize state={state} store={store} /> } />
          <Route exact path="/recognize" render={() => <Recognition state={state} store={store} /> } />
          <Route exact path="/voiceList" render={() => <VoiceList state={state} store={store} /> } />
          {errorMessage ? <div className="app-error">{errorMessage}</div> : ''}
        </div>
      </Router>
    </div>
  );
}
