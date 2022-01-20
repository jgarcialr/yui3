YUI.add("event-synthetic",function(c,e){var i=c.CustomEvent,r=c.Env.evt.dom_map,u=c.Array,t=c.Lang,o=t.isObject,l=t.isString,a=t.isArray,p=c.Selector.query,t=function(){};function d(e,t){this.handle=e,this.emitFacade=t}function h(e,t,n){this.handles=[],this.el=e,this.key=n,this.domkey=t}function f(){this._init.apply(this,arguments)}h.prototype={constructor:h,type:"_synth",fn:t,capture:!(d.prototype.fire=function(e){var t=u(arguments,0,!0),n=this.handle,i=n.evt,s=n.sub,r=s.context,a=s.filter,n=e||{};return this.emitFacade?(e&&e.preventDefault||(n=i._getFacade(),o(e)&&!e.preventDefault?(c.mix(n,e,!0),t[0]=n):t.unshift(n)),n.type=i.type,n.details=t.slice(),a&&(n.container=i.host)):a&&o(e)&&e.currentTarget&&t.shift(),s.context=r||n.currentTarget||i.host,n=i.fire.apply(i,t),e.prevented&&i.preventedFn&&i.preventedFn.apply(i,t),e.stopped&&i.stoppedFn&&i.stoppedFn.apply(i,t),s.context=r,n}),register:function(e){(e.evt.registry=this).handles.push(e)},unregister:function(e){for(var t=this.handles,n=r[this.domkey],i=t.length-1;0<=i;--i)if(t[i].sub===e){t.splice(i,1);break}t.length||(delete n[this.key],c.Object.size(n)||delete r[this.domkey])},detachAll:function(){for(var e=this.handles,t=e.length;0<=--t;)e[t].detach()}},c.mix(f,{Notifier:d,SynthRegistry:h,getRegistry:function(e,t,n){var i=e._node,s=c.stamp(i),e="event:"+s+t+"_synth",t=r[s];return n&&((t=t||(r[s]={}))[e]||(t[e]=new h(i,s,e))),t&&t[e]||null},_deleteSub:function(e){var t,n;e&&e.fn&&(t=this.eventDef,n=e.filter?"detachDelegate":"detach",this._subscribers=[],i.keepDeprecatedSubs&&(this.subscribers={}),t[n](e.node,e,this.notifier,e.filter),this.registry.unregister(e),delete e.fn,delete e.node,delete e.context)},prototype:{constructor:f,_init:function(){var e=this.publishConfig||(this.publishConfig={});this.emitFacade=!("emitFacade"in e)||e.emitFacade,e.emitFacade=!1},processArgs:t,on:t,detach:t,delegate:t,detachDelegate:t,_on:function(i,s){var e,r=[],t=i.slice(),a=this.processArgs(i,s),n=i[2],o=s?"delegate":"on",h=l(n)?p(n):u(n||c.one(c.config.win));return!h.length&&l(n)?e=c.on("available",function(){c.mix(e,c[o].apply(c,t),!0)},n):(c.Array.each(h,function(e){var t,n=i.slice();(e=c.one(e))&&(s&&(t=n.splice(3,1)[0]),n.splice(0,4,n[1],n[3]),this.preventDups&&this.getSubs(e,i,null,!0)||r.push(this._subscribe(e,o,n,a,t)))},this),1===r.length?r[0]:new c.EventHandle(r))},_subscribe:function(e,t,n,i,s){var r=new c.CustomEvent(this.type,this.publishConfig),a=r.on.apply(r,n),o=new d(a,this.emitFacade),h=f.getRegistry(e,this.type,!0),n=a.sub;return n.node=e,n.filter=s,i&&this.applyArgExtras(i,n),c.mix(r,{eventDef:this,notifier:o,host:e,currentTarget:e,target:e,el:e._node,_delete:f._deleteSub},!0),a.notifier=o,h.register(a),this[t](e,n,o,s),a},applyArgExtras:function(e,t){t._extra=e},_detach:function(e){var t,n,i,s,r,a=e[2],o=(l(a)?p:u)(a);for(e.splice(2,1),n=0,i=o.length;n<i;++n)if((t=c.one(o[n]))&&(s=this.getSubs(t,e)))for(r=s.length-1;0<=r;--r)s[r].detach()},getSubs:function(e,t,n,i){var s,r,a,o,e=f.getRegistry(e,this.type),h=[];if(e)for(s=e.handles,n=n||this.subMatch,r=0,a=s.length;r<a;++r)if(o=s[r],n.call(this,o.sub,t)){if(i)return o;h.push(s[r])}return h.length&&h},subMatch:function(e,t){return!t[1]||e.fn===t[1]}}},!0),c.SyntheticEvent=f,c.Event.define=function(e,t,n){var i,s;return e&&e.type?(i=e,n=t):t&&(i=c.merge({type:e},t)),i?!n&&c.Node.DOM_EVENTS[i.type]||(c.extend(n=function(){f.apply(this,arguments)},f,i),e=(s=new n).type,c.Node.DOM_EVENTS[e]=c.Env.evt.plugins[e]={eventDef:s,on:function(){return s._on(u(arguments))},delegate:function(){return s._on(u(arguments),!0)},detach:function(){return s._detach(u(arguments))}}):(l(e)||a(e))&&c.Array.each(u(e),function(e){c.Node.DOM_EVENTS[e]=1}),s}},"@VERSION@",{requires:["node-base","event-custom-complex"]});