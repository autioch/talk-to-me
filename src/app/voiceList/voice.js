import React from 'react';

export default function Voice({voice}){

  return (
    <div className="voice-list__item">
    <div className="voice-list__header">
      <h4 className="voice-list__label">{voice.name}</h4>
      {voice.isLocal ? <div className="voice-list__extra">local</div> : ''}
      {voice.isDefault ? <div className="voice-list__extra">default</div> : ''}
    </div>
      <table className="voice-list__table">
        <tbody>
          <tr className="voice-list__row">
            <td className="voice-list__key">Language</td>
            <td className="voice-list__value">{voice.language}</td>
          </tr>
          <tr className="voice-list__row">
            <td className="voice-list__key">URI</td>
            <td className="voice-list__value">{voice.voiceURI}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
