import React from 'react';
import Voice from './voice';
import './styles.scss';

export default function VoiceList({ state, store }){
  return (
    <div className="app-content">
      <h3 className="app-header">Voices available on this device</h3>
      <div className="voice-list">
        {state.voices.map(voice => <Voice key={voice.id} voice={voice} />)}
      </div>
    </div>
  )
}
