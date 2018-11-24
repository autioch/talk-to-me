const { speechSynthesis } = window;

function getVoiceLabel(voiceObj){
  const label = voiceObj.name;//.replace(/(google|microsoft)/i, '').trim();
  const language = voiceObj.lang;

  return language + ' - ' + label.charAt(0).toUpperCase() + label.slice(1);
}


function getVoices(){
  const voiceObjects = speechSynthesis.getVoices();
  const voices = voiceObjects
    .map((voiceObj, index)=>({
      id: index,
      label: getVoiceLabel(voiceObj),
      name: voiceObj.name,
      language: voiceObj.lang,
      voiceURI:voiceObj.voiceURI,
      isLocal: voiceObj.localService,
      isDefault: voiceObj.default,
      isSelected: !!voiceObj.default
    }))
    .sort((a,b) => a.label.localeCompare(b.label))

    return voices;
}


export {
  getVoices
}
