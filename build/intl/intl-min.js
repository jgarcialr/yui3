YUI.add("intl",function(a,n){var t={},r="yuiRootLang",o="yuiActiveLang",e=[];a.mix(a.namespace("Intl"),{_mod:function(n){return t[n]||(t[n]={}),t[n]},setLang:function(n,t){var e=this._mod(n),a=e[o],i=!!e[t];return i&&t!==a&&(e[o]=t,this.fire("intl:langChange",{module:n,prevVal:a,newVal:t===r?"":t})),i},getLang:function(n){n=this._mod(n)[o];return n===r?"":n},add:function(n,t,e){t=t||r,this._mod(n)[t]=e,this.setLang(n,t)},get:function(n,t,e){var n=this._mod(n),n=n[e=e||n[o]]||{};return t?n[t]:a.merge(n)},getAvailableLangs:function(n){var t=a.Env._loader,t=t&&t.moduleInfo[n],t=t&&t.lang;return t?t.concat():e}}),a.augment(a.Intl,a.EventTarget),a.Intl.publish("intl:langChange",{emitFacade:!0})},"@VERSION@",{requires:["intl-base","event-custom"]});