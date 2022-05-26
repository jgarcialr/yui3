YUI.add("widget-buttons",function(r,t){var l=r.Array,e=r.Lang,s=r.Object,h=r.Plugin.Button,n=r.Widget,o=r.WidgetStdMod,u=r.ClassNameManager.getClassName,d=e.isArray,i=e.isNumber,_=e.isString,a=e.isValue;function f(t){return t.getDOMNode}function B(){this._buttonsHandles={}}B.ATTRS={buttons:{getter:"_getButtons",setter:"_setButtons",value:{}},defaultButton:{readOnly:!0,value:null}},B.CLASS_NAMES={button:u("button"),buttons:n.getClassName("buttons"),primary:u("button","primary")},B.HTML_PARSER={buttons:function(t){return this._parseButtons(t)}},B.NON_BUTTON_NODE_CFG=["action","classNames","context","events","isDefault","section"],B.prototype={BUTTONS:{},BUTTONS_TEMPLATE:"<span />",DEFAULT_BUTTONS_SECTION:o.FOOTER,initializer:function(){this._stdModNode||r.error("WidgetStdMod must be added to a Widget before WidgetButtons."),this._mapButtons(this.get("buttons")),this._updateDefaultButton(),this.after({buttonsChange:r.bind("_afterButtonsChange",this),defaultButtonChange:r.bind("_afterDefaultButtonChange",this)}),r.after(this._bindUIButtons,this,"bindUI"),r.after(this._syncUIButtons,this,"syncUI")},destructor:function(){s.each(this._buttonsHandles,function(t){t.detach()}),delete this._buttonsHandles,delete this._buttonsMap,delete this._defaultButton},addButton:function(t,e,n){var o,u=this.get("buttons");return f(t)||(t=this._mergeButtonConfig(t),e=e||t.section),o=u[e=e||this.DEFAULT_BUTTONS_SECTION]||(u[e]=[]),i(n)||(n=o.length),o.splice(n,0,t),n=l.indexOf(o,t),this.set("buttons",u,{button:t,section:e,index:n,src:"add"}),this},getButton:function(t,e){var n,o;if(a(t))return n=this._buttonsMap,e=e||this.DEFAULT_BUTTONS_SECTION,i(t)?(o=this.get("buttons"))[e]&&o[e][t]:1<arguments.length?n[e+":"+t]:n[t]},removeButton:function(n,o){if(!a(n))return this;var u,t=this.get("buttons");return i(n)?(o=o||this.DEFAULT_BUTTONS_SECTION,u=n,n=t[o][u]):(_(n)&&(n=this.getButton.apply(this,arguments)),s.some(t,function(t,e){if(-1<(u=l.indexOf(t,n)))return o=e,!0})),n&&-1<u&&(t[o].splice(u,1),this.set("buttons",t,{button:n,section:o,index:u,src:"remove"})),this},_bindUIButtons:function(){var t=r.bind("_afterContentChangeButtons",this);this.after({visibleChange:r.bind("_afterVisibleChangeButtons",this),headerContentChange:t,bodyContentChange:t,footerContentChange:t})},_createButton:function(t){var e,n,o,u,s,i,a;if(f(t))return r.one(t.getDOMNode()).plug(h);for(e=r.merge({context:this,events:"click",label:t.value},t),n=r.merge(e),u=0,s=(o=B.NON_BUTTON_NODE_CFG).length;u<s;u+=1)delete n[o[u]];return t=h.createNode(n),i=e.context,a=e.action,_(a)&&(a=r.bind(a,i)),a=t.on(e.events,a,i),this._buttonsHandles[r.stamp(t,!0)]=a,t.setData("name",this._getButtonName(e)),t.setData("default",this._getButtonDefault(e)),l.each(l(e.classNames),t.addClass,t),t},_getButtonContainer:function(t,e){var t=o.SECTION_CLASS_NAMES[t],n=B.CLASS_NAMES.buttons,t=this.get("contentBox").one("."+t+" ."+n);return!t&&e&&(t=r.Node.create(this.BUTTONS_TEMPLATE)).addClass(n),t},_getButtonDefault:function(t){t=f(t)?t.getData("default"):t.isDefault;return _(t)?"true"===t.toLowerCase():!!t},_getButtonName:function(t){t=f(t)?t.getData("name")||t.get("name"):t&&(t.name||t.type);return t},_getButtons:function(t){var n={};return s.each(t,function(t,e){n[e]=t.concat()}),n},_mapButton:function(t,e){var n=this._buttonsMap,o=this._getButtonName(t),u=this._getButtonDefault(t);o&&(n[o]=t,n[e+":"+o]=t),u&&(this._defaultButton=t)},_mapButtons:function(t){this._buttonsMap={},this._defaultButton=null,s.each(t,function(t,e){for(var n=0,o=t.length;n<o;n+=1)this._mapButton(t[n],e)},this)},_mergeButtonConfig:function(t){var e,n;return(t=_(t)?{name:t}:r.merge(t)).srcNode&&(n=(e=t.srcNode).get("tagName").toLowerCase(),n=e.get("input"===n?"value":"text"),e={disabled:!!e.get("disabled"),isDefault:this._getButtonDefault(e),name:this._getButtonName(e)},n&&(e.label=n),r.mix(t,e,!1,null,0,!0)),n=this._getButtonName(t),(e=this.BUTTONS&&this.BUTTONS[n])&&r.mix(t,e,!1,null,0,!0),t},_parseButtons:function(t){var o="."+B.CLASS_NAMES.button,u=null;return l.each(["header","body","footer"],function(t){var e,n=this._getButtonContainer(t),n=n&&n.all(o);n&&!n.isEmpty()&&(e=[],n.each(function(t){e.push({srcNode:t})}),(u=u||{})[t]=e)},this),u},_setButtons:function(t){var i=this.DEFAULT_BUTTONS_SECTION,a={};function e(t,e){if(d(t))for(var n,o,u=0,s=t.length;u<s;u+=1)o=e,f(n=t[u])||(n=this._mergeButtonConfig(n),o=o||n.section),n=this._createButton(n),(a[o=o||i]||(a[o]=[])).push(n)}return d(t)?e.call(this,t):s.each(t,e,this),a},_syncUIButtons:function(){this._uiSetButtons(this.get("buttons")),this._uiSetDefaultButton(this.get("defaultButton")),this._uiSetVisibleButtons(this.get("visible"))},_uiInsertButton:function(t,e,n){var o=B.CLASS_NAMES.button,u=this._getButtonContainer(e,!0),o=u.all("."+o);u.insertBefore(t,o.item(n)),this.setStdModContent(e,u,"after")},_uiRemoveButton:function(t,e,n){var o=r.stamp(t,this),u=this._buttonsHandles,s=u[o];s&&s.detach(),delete u[o],t.remove(),(n=n||{}).preserveContent||(s=this._getButtonContainer(e),o=B.CLASS_NAMES.button,s&&s.all("."+o).isEmpty()&&(s.remove(),this._updateContentButtons(e)))},_uiSetButtons:function(h){var d=B.CLASS_NAMES.button;l.each(["header","body","footer"],function(e){var t,n,o,u,s=h[e]||[],i=s.length,a=this._getButtonContainer(e,i),r=!1;if(a){for(t=a.all("."+d),n=0;n<i;n+=1)o=s[n],-1<(u=t.indexOf(o))?(t.splice(u,1),u!==n&&(a.insertBefore(o,n+1),r=!0)):(a.appendChild(o),r=!0);if(t.each(function(t){this._uiRemoveButton(t,e,{preserveContent:!0}),r=!0},this),0===i)return a.remove(),void this._updateContentButtons(e);r&&this.setStdModContent(e,a,"after")}},this)},_uiSetDefaultButton:function(t,e){var n=B.CLASS_NAMES.primary;t&&t.addClass(n),e&&e.removeClass(n)},_uiSetVisibleButtons:function(t){!t||(t=this.get("defaultButton"))&&t.focus()},_unMapButton:function(t,e){var n=this._buttonsMap,o=this._getButtonName(t);o&&(n[o]===t&&delete n[o],n[e=e+":"+o]===t&&delete n[e]),this._defaultButton===t&&(this._defaultButton=null)},
_updateDefaultButton:function(){var t=this._defaultButton;this.get("defaultButton")!==t&&this._set("defaultButton",t)},_updateContentButtons:function(t){var e=this.getStdModNode(t).get("childNodes");this.set(t+"Content",e.isEmpty()?null:e,{src:"buttons"})},_afterButtonsChange:function(t){var e,n=t.newVal,o=t.section,u=t.index,s=t.src;return"add"===s?(e=n[o][u],this._mapButton(e,o),this._updateDefaultButton(),void this._uiInsertButton(e,o,u)):"remove"===s?(e=t.button,this._unMapButton(e,o),this._updateDefaultButton(),void this._uiRemoveButton(e,o)):(this._mapButtons(n),this._updateDefaultButton(),void this._uiSetButtons(n))},_afterContentChangeButtons:function(t){var e=t.src,t=t.stdModPosition;t&&t!==o.REPLACE||"buttons"===e||e===n.UI_SRC||this._uiSetButtons(this.get("buttons"))},_afterDefaultButtonChange:function(t){this._uiSetDefaultButton(t.newVal,t.prevVal)},_afterVisibleChangeButtons:function(t){this._uiSetVisibleButtons(t.newVal)}},r.WidgetButtons=B},"@VERSION@",{requires:["button-plugin","cssbutton","widget-stdmod"]});