YUI.add("cache-base",function(t,e){var n=t.Lang,s=t.Lang.isDate,i=function(){i.superclass.constructor.apply(this,arguments)};t.mix(i,{NAME:"cache",ATTRS:{max:{value:0,setter:"_setMax"},size:{readOnly:!0,getter:"_getSize"},uniqueKeys:{value:!1},expires:{value:0,validator:function(e){return t.Lang.isDate(e)||t.Lang.isNumber(e)&&0<=e}},entries:{readOnly:!0,getter:"_getEntries"}}}),t.extend(i,t.Base,{_entries:null,initializer:function(e){this.publish("add",{defaultFn:this._defAddFn}),this.publish("flush",{defaultFn:this._defFlushFn}),this._entries=[]},destructor:function(){this._entries=[]},_setMax:function(e){var t=this._entries;if(0<e){if(t)for(;t.length>e;)t.shift()}else e=0,this._entries=[];return e},_getSize:function(){return this._entries.length},_getEntries:function(){return this._entries},_defAddFn:function(e){var t=this._entries,i=e.entry,s=this.get("max");for(this.get("uniqueKeys")&&(e=this._position(e.entry.request),n.isValue(e)&&t.splice(e,1));s&&t.length>=s;)t.shift();t[t.length]=i},_defFlushFn:function(e){var t=this._entries,e=e.details[0];e&&n.isValue(e.request)?(e=this._position(e.request),n.isValue(e)&&t.splice(e,1)):this._entries=[]},_isMatch:function(e,t){return(!t.expires||new Date<t.expires)&&e===t.request},_position:function(e){var t=this._entries,i=t.length-1;if(null===this.get("max")||0<this.get("max"))for(;0<=i;i--)if(this._isMatch(e,t[i]))return i;return null},add:function(e,t){var i=this.get("expires");this.get("initialized")&&(null===this.get("max")||0<this.get("max"))&&(n.isValue(e)||n.isNull(e)||n.isUndefined(e))&&this.fire("add",{entry:{request:e,response:t,cached:new Date,expires:s(i)?i:i?new Date((new Date).getTime()+this.get("expires")):null}})},flush:function(e){this.fire("flush",{request:n.isValue(e)?e:null})},retrieve:function(e){var t,i=this._entries,s=i.length;return 0<s&&(null===this.get("max")||0<this.get("max"))&&(this.fire("request",{request:e}),t=this._position(e),n.isValue(t))?(e=i[t],this.fire("retrieve",{entry:e}),t<s-1&&(i.splice(t,1),i[i.length]=e),e):null}}),t.Cache=i},"@VERSION@",{requires:["base"]});