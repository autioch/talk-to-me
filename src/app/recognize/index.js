/* eslint max-len: [1, 150] */
import React from 'react';
import { Button } from 'antd';
import Input from './input';
import MaxAlternatives from './maxAlternatives';
import './styles.scss';

const RECOGNITION_NOT_AVAILABLE = 'Sorry, speech recognition is not available on this device.';

export default function Recognition({ state, store }) {
  const { currentGrammar, maxAlternatives, isRecognizing, recognitionResult, recognitionDiagnosis, isRecognitionSupported } = state;
  const { setGrammar, setMaxAlternatives, recognizeStart, recongnizeStop } = store;

  const canRecognize = isRecognitionSupported && currentGrammar.length > 0 && !isRecognizing;

  return (
    <div className="app-content">
      <div className="synthesize">
        <h3 className="app-header">Enter words that should be recognized. Should be separated by space.</h3>
        <div className="synthesize-row">
          <Input value={currentGrammar} onChange={setGrammar}/>
        </div>
        <div className="synthesize-row">
          <MaxAlternatives value={maxAlternatives} onChange={setMaxAlternatives}/>
        </div>
        <div className="synthesize-row">
          <pre>
            {recognitionResult}
          </pre>
        </div>
        <div className="synthesize-row">
          {recognitionDiagnosis.map((item, index) => <div key={index}>{item}</div>)}
        </div>
        <div className="synthesize-action">
          {isRecognizing ? '' : <Button size="large" disabled={!canRecognize} onClick={recognizeStart}>Listen to me!</Button>}
          {isRecognizing ? <Button size="large" disabled={!canRecognize} onClick={recongnizeStop}>Stop!</Button> : ''}
          {isRecognizing ? <div className="synthesize__speach">Listening...</div> : ''}
        </div>
        {isRecognitionSupported ? '' : <div className="app-error">{RECOGNITION_NOT_AVAILABLE}</div>}
      </div>
    </div>
  );
}
