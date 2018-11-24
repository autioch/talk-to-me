(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(191)},113:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){},187:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(95),c={currentText:"Example text",voices:[],pitch:1,rate:1,isSpeaking:!1,errorMessage:"",urlFolderPath:"/talk-to-me"},s=a(105),r=window.speechSynthesis,i={setVoiceList:function(){return{voices:r.getVoices().map(function(e,t){return{id:t,label:e.lang+" - "+e.name,name:e.name,language:e.lang,voiceURI:e.voiceURI,isLocal:e.localService,isDefault:e.default,isSelected:!!e.default}}).sort(function(e,t){return e.label.localeCompare(t.label)})}},synthesize:function(e){var t=e.state,a=e.store,n=a.speachError,c=a.stopSpeaking,s=a.startSpeaking,i=a.clearSpeachError,l=t.currentText,o=t.rate,u=t.pitch,m=t.voices.find(function(e){return e.isSelected}).id,v=r.getVoices()[m],p=new SpeechSynthesisUtterance(l);p.onend=c,p.onerror=n,p.voice=v,p.pitch=u,p.rate=o,i(),r.speak(p),s()},setPitch:function(e){return{pitch:e.data}},setRate:function(e){return{rate:e.data}},setText:function(e){return{currentText:e.data}},setVoice:function(e){var t=e.state,a=e.data;return{voices:t.voices.map(function(e){return Object(s.a)({},e,{isSelected:e.id===a})})}},startSpeaking:function(){return{isSpeaking:!0}},stopSpeaking:function(){return{isSpeaking:!1}},speachError:function(e){return{errorMessage:e.message}},clearSpeachError:function(){return{errorMessage:""}}},l=a(1),o=a.n(l),u=a(192),m=a(38),v=a(39),p=a(43),h=a(40),d=a(42),E=a(195),f=a(197),g=(a(113),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){isNaN(e)||a.setState({inputValue:e},function(){return a.props.onChange(e)})},a.state={inputValue:e.value},a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setState({inputValue:e.value})}},{key:"render",value:function(){var e=this.state.inputValue;return o.a.createElement("div",{className:"c-range"},o.a.createElement("div",{className:"c-range__label"},this.props.label),o.a.createElement("div",{className:"c-range__track"},o.a.createElement(E.a,{min:.1,max:2,step:.1,onChange:this.onChange,value:e})),o.a.createElement("div",{className:"c-range__input"},o.a.createElement(f.a,{min:.1,max:2,step:.1,onChange:this.onChange,value:e})))}}]),t}(o.a.Component)),b=a(25),_=a(196).a.TextArea,N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={value:e.value},a.setText=a.setText.bind(Object(b.a)(Object(b.a)(a))),a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"setText",value:function(e){var t=this,a=e.target.value;this.setState({value:a},function(){return t.props.onChange(a)})}},{key:"render",value:function(){return o.a.createElement(_,{rows:4,onChange:this.setText,placeholder:"Write to me!",value:this.state.value})}}]),t}(l.Component),k=a(194),y=k.a.Option,S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={value:e.value},a.setId=a.setId.bind(Object(b.a)(Object(b.a)(a))),a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"setId",value:function(e){var t=this;this.setState({value:e},function(){return t.props.onChange(e)})}},{key:"render",value:function(){return o.a.createElement(k.a,{value:this.state.value,onChange:this.setId,className:"synthesize__language"},this.props.voices.map(function(e){return o.a.createElement(y,{key:e.id,value:e.id},e.label)}))}}]),t}(l.Component);a(180);function x(e){var t=e.state,a=e.store,n=t.currentText,c=t.voices,s=t.rate,r=t.pitch,i=t.isSpeaking,l=a.setText,m=a.setVoice,v=a.synthesize,p=a.setPitch,h=a.setRate,d=c.find(function(e){return e.isSelected}),E=n.length>0&&!i;return o.a.createElement("div",{className:"app-content"},o.a.createElement("div",{className:"synthesize"},o.a.createElement("h3",{className:"app-header"},"Enter text to be read"),o.a.createElement("div",{className:"synthesize-row"},o.a.createElement(N,{value:n,onChange:l})),o.a.createElement("div",{className:"synthesize-row"},o.a.createElement(S,{value:d.id,onChange:m,voices:c})),o.a.createElement("div",{className:"synthesize-row"},o.a.createElement(g,{label:"Pitch",onChange:p,value:r})),o.a.createElement("div",{className:"synthesize-row"},o.a.createElement(g,{label:"Speed",onChange:h,value:s})),o.a.createElement("div",{className:"synthesize-action"},o.a.createElement(u.a,{size:"large",disabled:!E,onClick:v},"Talk to me!"),i?o.a.createElement("div",{className:"synthesize__speach"},"Talking..."):"")))}var O=a(198),j=a(193);function C(e){var t=e.voice;return o.a.createElement("div",{className:"voice-list__item"},o.a.createElement("div",{className:"voice-list__header"},o.a.createElement("h4",{className:"voice-list__label"},t.name),t.isLocal?o.a.createElement("div",{className:"voice-list__extra"},"local"):"",t.isDefault?o.a.createElement("div",{className:"voice-list__extra"},"default"):""),o.a.createElement("table",{className:"voice-list__table"},o.a.createElement("tbody",null,o.a.createElement("tr",{className:"voice-list__row"},o.a.createElement("td",{className:"voice-list__key"},"Language"),o.a.createElement("td",{className:"voice-list__value"},t.language)),o.a.createElement("tr",{className:"voice-list__row"},o.a.createElement("td",{className:"voice-list__key"},"URI"),o.a.createElement("td",{className:"voice-list__value"},t.voiceURI)))))}a(182);function w(e){var t=e.state;e.store;return o.a.createElement("div",{className:"app-content"},o.a.createElement("h3",{className:"app-header"},"Voices available on this device"),o.a.createElement("div",{className:"voice-list"},t.voices.map(function(e){return o.a.createElement(C,{key:e.id,voice:e})})))}var T=a(199);a(184);function V(){return o.a.createElement("div",{className:"app-menu"},o.a.createElement(T.a,{exact:!0,className:"app-menu__link",to:"/"},"Synthesize"),o.a.createElement(T.a,{exact:!0,className:"app-menu__link",to:"/voiceList"},"Voice list"))}a(187);a(189);var z=document.getElementById("root"),I=Object(n.createApp)(i,c,function(e){var t=e.store,a=e.state,n=a.errorMessage;return o.a.createElement("div",{className:"app"},o.a.createElement(O.a,{basename:a.urlFolderPath},o.a.createElement("div",{className:"app-container"},o.a.createElement(V,null),o.a.createElement(j.a,{exact:!0,path:"/",render:function(){return o.a.createElement(x,{state:a,store:t})}}),o.a.createElement(j.a,{exact:!0,path:"/voiceList",render:function(){return o.a.createElement(w,{state:a,store:t})}}),n?o.a.createElement("div",{className:"app-error"},n):"")))},z);I.setVoiceList(),void 0!==speechSynthesis.onvoiceschanged&&(speechSynthesis.onvoiceschanged=I.setVoiceList)}},[[108,2,1]]]);
//# sourceMappingURL=main.ae0bf67b.chunk.js.map