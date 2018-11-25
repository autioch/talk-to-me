import React from 'react';
import { Button } from 'antd';
import RangeWithInput from './rangeWithInput';
import Input from './input';
import VoiceSelect from './voiceSelect';
import './styles.scss';

const SPEECH_NOT_AVAILABLE = 'Sorry, speech synthesis is not available on this device.';

export default function Synthesize({ state, store }) {
  const { currentText, voices, rate, pitch, isSpeaking, isSpeechSupported } = state;
  const { setText, setVoice, synthesize, setPitch, setRate } = store;

  const canTalk = isSpeechSupported && currentText.length > 0 && !isSpeaking;

  return (
    <div className="app-content">
      <div className="synthesize">
        <h3 className="app-header">Enter text to be read</h3>
        <div className="synthesize-row">
          <Input value={currentText} onChange={setText}/>
        </div>
        <div className="synthesize-row">
          <VoiceSelect onChange={setVoice} voices={voices} />
        </div>
        <div className="synthesize-row">
          <RangeWithInput label="Pitch" onChange={setPitch} value= {pitch}/>
        </div>
        <div className="synthesize-row">
          <RangeWithInput label="Speed" onChange={setRate} value= {rate}/>
        </div>
        <div className="synthesize-action">
          <Button size="large" disabled={!canTalk} onClick={synthesize}>Talk to me!</Button>
          {isSpeaking ? <div className="synthesize__speach">Talking...</div> : ''}
        </div>
        {isSpeechSupported ? '' : <div className="app-error">{SPEECH_NOT_AVAILABLE}</div>}
      </div>
    </div>
  );
}
