(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(191)},113:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){},187:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(95),c={currentText:"Example text",voices:[],pitch:1,rate:1,isSpeaking:!1,errorMessage:"",urlFolderPath:"/talk-to-me"},s=a(105),r={setVoiceList:function(){return{voices:window.speechSynthesis.getVoices().map(function(e,t){return{id:t,label:"".concat(e.lang," - ").concat(e.name),name:e.name,language:e.lang,voiceURI:e.voiceURI,isLocal:e.localService,isDefault:e.default,isSelected:!!e.default}}).sort(function(e,t){return e.label.localeCompare(t.label)})}},synthesize:function(e){var t=e.state,a=e.store,n=a.speachError,c=a.stopSpeaking,s=a.startSpeaking,r=a.clearSpeachError,i=t.currentText,l=t.rate,o=t.pitch,u=t.voices.find(function(e){return e.isSelected}).id,m=window.speechSynthesis.getVoices()[u],v=new SpeechSynthesisUtterance(i);v.onend=c,v.onerror=n,v.voice=m,v.pitch=o,v.rate=l,r(),window.speechSynthesis.speak(v),s()},setPitch:function(e){return{pitch:e.data}},setRate:function(e){return{rate:e.data}},setText:function(e){return{currentText:e.data}},setVoice:function(e){var t=e.state,a=e.data;return{voices:t.voices.map(function(e){return Object(s.a)({},e,{isSelected:e.id===a})})}},startSpeaking:function(){return{isSpeaking:!0}},stopSpeaking:function(){return{isSpeaking:!1}},speachError:function(e){return{errorMessage:e.message}},clearSpeachError:function(){return{errorMessage:""}}},i=a(1),l=a.n(i),o=a(192),u=a(38),m=a(39),v=a(43),h=a(40),p=a(42),d=a(18),E=a(195),f=a(197),g=(a(113),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).state={inputValue:e.value},a.onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){var t=this;isNaN(e)||this.setState({inputValue:e},function(){return t.props.onChange(e)})}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setState({inputValue:e.value})}},{key:"render",value:function(){var e=this.state.inputValue;return l.a.createElement("div",{className:"c-range"},l.a.createElement("div",{className:"c-range__label"},this.props.label),l.a.createElement("div",{className:"c-range__track"},l.a.createElement(E.a,{min:.1,max:2,step:.1,onChange:this.onChange,value:e})),l.a.createElement("div",{className:"c-range__input"},l.a.createElement(f.a,{min:.1,max:2,step:.1,onChange:this.onChange,value:e})))}}]),t}(l.a.Component)),b=a(196).a.TextArea,_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).state={value:e.value},a.setText=a.setText.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"setText",value:function(e){var t=this,a=e.target.value;this.setState({value:a},function(){return t.props.onChange(a)})}},{key:"render",value:function(){return l.a.createElement(b,{rows:4,onChange:this.setText,placeholder:"Write to me!",value:this.state.value})}}]),t}(i.Component),N=a(194),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(h.a)(t).call(this,e))).state={value:e.value},a.setId=a.setId.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"setId",value:function(e){var t=this;this.setState({value:e},function(){return t.props.onChange(e)})}},{key:"render",value:function(){return l.a.createElement(N.a,{value:this.state.value,onChange:this.setId,className:"synthesize__language"},this.props.voices.map(function(e){return l.a.createElement(N.a.Option,{key:e.id,value:e.id},e.label)}))}}]),t}(i.Component);a(180);function k(e){var t=e.state,a=e.store,n=t.currentText,c=t.voices,s=t.rate,r=t.pitch,i=t.isSpeaking,u=a.setText,m=a.setVoice,v=a.synthesize,h=a.setPitch,p=a.setRate,d=c.find(function(e){return e.isSelected}),E=n.length>0&&!i;return l.a.createElement("div",{className:"app-content"},l.a.createElement("div",{className:"synthesize"},l.a.createElement("h3",{className:"app-header"},"Enter text to be read"),l.a.createElement("div",{className:"synthesize-row"},l.a.createElement(_,{value:n,onChange:u})),l.a.createElement("div",{className:"synthesize-row"},l.a.createElement(y,{value:d.id,onChange:m,voices:c})),l.a.createElement("div",{className:"synthesize-row"},l.a.createElement(g,{label:"Pitch",onChange:h,value:r})),l.a.createElement("div",{className:"synthesize-row"},l.a.createElement(g,{label:"Speed",onChange:p,value:s})),l.a.createElement("div",{className:"synthesize-action"},l.a.createElement(o.a,{size:"large",disabled:!E,onClick:v},"Talk to me!"),i?l.a.createElement("div",{className:"synthesize__speach"},"Talking..."):"")))}var S=a(198),O=a(193);function j(e){var t=e.voice;return l.a.createElement("div",{className:"voice-list__item"},l.a.createElement("div",{className:"voice-list__header"},l.a.createElement("h4",{className:"voice-list__label"},t.name),t.isLocal?l.a.createElement("div",{className:"voice-list__extra"},"local"):"",t.isDefault?l.a.createElement("div",{className:"voice-list__extra"},"default"):""),l.a.createElement("table",{className:"voice-list__table"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"voice-list__row"},l.a.createElement("td",{className:"voice-list__key"},"Language"),l.a.createElement("td",{className:"voice-list__value"},t.language)),l.a.createElement("tr",{className:"voice-list__row"},l.a.createElement("td",{className:"voice-list__key"},"URI"),l.a.createElement("td",{className:"voice-list__value"},t.voiceURI)))))}a(182);function x(e){var t=e.state;e.store;return l.a.createElement("div",{className:"app-content"},l.a.createElement("h3",{className:"app-header"},"Voices available on this device"),l.a.createElement("div",{className:"voice-list"},t.voices.map(function(e){return l.a.createElement(j,{key:e.id,voice:e})})))}var C=a(199);a(184);function w(){return l.a.createElement("div",{className:"app-menu"},l.a.createElement(C.a,{exact:!0,className:"app-menu__link",to:"/"},"Synthesize"),l.a.createElement(C.a,{exact:!0,className:"app-menu__link",to:"/voiceList"},"Voice list"))}a(187);a(189);var T=document.getElementById("root"),V=Object(n.createApp)(r,c,function(e){var t=e.store,a=e.state,n=a.errorMessage;return l.a.createElement("div",{className:"app"},l.a.createElement(S.a,{basename:a.urlFolderPath},l.a.createElement("div",{className:"app-container"},l.a.createElement(w,null),l.a.createElement(O.a,{exact:!0,path:"/",render:function(){return l.a.createElement(k,{state:a,store:t})}}),l.a.createElement(O.a,{exact:!0,path:"/voiceList",render:function(){return l.a.createElement(x,{state:a,store:t})}}),n?l.a.createElement("div",{className:"app-error"},n):"")))},T);V.setVoiceList(),void 0!==speechSynthesis.onvoiceschanged&&(speechSynthesis.onvoiceschanged=V.setVoiceList)}},[[108,2,1]]]);
//# sourceMappingURL=main.cdac1b86.chunk.js.map