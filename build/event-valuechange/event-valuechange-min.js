YUI.add("event-valuechange",function(c,e){var d="_valuechange",u="value",_="nodeName",g={POLL_INTERVAL:50,TIMEOUT:1e4,_poll:function(e,t){var n,a,o,i,r=e._node,l=t.e,s=e._data&&e._data[d],u=0;r&&s?(a=s.prevVal,t=s.nodeName,s.isEditable?o=r.innerHTML:"input"===t||"textarea"===t?o=r.value:"select"===t&&(o=(r=r.options[r.selectedIndex]).value||r.text),o!==a&&(s.prevVal=o,n={_event:l,currentTarget:l&&l.currentTarget||e,newVal:o,prevVal:a,target:l&&l.target||e},c.Object.some(s.notifiers,function(e){var t=e.handle.evt;if((1!==u||t.el===i)&&e.fire(n),e=t&&t._facade?t._facade.stopped:0,u<e&&1===(u=e)&&(i=t.el),2===u)return!0}),g._refreshTimeout(e))):g._stopPolling(e)},_refreshTimeout:function(e,t){var n;e._node&&(n=e.getData(d),g._stopTimeout(e),n.timeout=setTimeout(function(){g._stopPolling(e,t)},g.TIMEOUT))},_startPolling:function(e,t,n){var a,o;if(e.test("input,textarea,select")||(o=g._isEditable(e))){if((a=e.getData(d))||(a={nodeName:e.get(_).toLowerCase(),isEditable:o,prevVal:o?e.getDOMNode().innerHTML:e.get(u)},e.setData(d,a)),a.notifiers||(a.notifiers={}),a.interval){if(!n.force)return void(a.notifiers[c.stamp(t)]=t);g._stopPolling(e,t)}a.notifiers[c.stamp(t)]=t,a.interval=setInterval(function(){g._poll(e,n)},g.POLL_INTERVAL),g._refreshTimeout(e,t)}},_stopPolling:function(e,t){var n;e._node&&(n=e.getData(d)||{},clearInterval(n.interval),delete n.interval,g._stopTimeout(e),t?n.notifiers&&delete n.notifiers[c.stamp(t)]:n.notifiers={})},_stopTimeout:function(e){e=e.getData(d)||{};clearTimeout(e.timeout),delete e.timeout},_isEditable:function(e){e=e._node;return"true"===e.contentEditable||""===e.contentEditable},_onBlur:function(e,t){g._stopPolling(e.currentTarget,t)},_onFocus:function(e,t){var n=e.currentTarget,a=n.getData(d);a||(a={isEditable:g._isEditable(n),nodeName:n.get(_).toLowerCase()},n.setData(d,a)),a.prevVal=a.isEditable?n.getDOMNode().innerHTML:n.get(u),g._startPolling(n,t,{e:e})},_onKeyDown:function(e,t){g._startPolling(e.currentTarget,t,{e:e})},_onKeyUp:function(e,t){229!==e.charCode&&197!==e.charCode||g._startPolling(e.currentTarget,t,{e:e,force:!0})},_onMouseDown:function(e,t){g._startPolling(e.currentTarget,t,{e:e})},_onSubscribe:function(e,t,n,a){var o,i,r,l={blur:g._onBlur,focus:g._onFocus,keydown:g._onKeyDown,keyup:g._onKeyUp,mousedown:g._onMouseDown},s=n._valuechange={};a?(s.delegated=!0,s.getNodes=function(){return i=e.all("input,textarea,select").filter(a),r=e.all('[contenteditable="true"],[contenteditable=""]').filter(a),i.concat(r)},s.getNodes().each(function(e){e.getData(d)||e.setData(d,{nodeName:e.get(_).toLowerCase(),isEditable:g._isEditable(e),prevVal:o?e.getDOMNode().innerHTML:e.get(u)})}),n._handles=c.delegate(l,e,a,null,n)):(o=g._isEditable(e),(e.test("input,textarea,select")||o)&&(e.getData(d)||e.setData(d,{nodeName:e.get(_).toLowerCase(),isEditable:o,prevVal:o?e.getDOMNode().innerHTML:e.get(u)}),n._handles=e.on(l,null,null,n)))},_onUnsubscribe:function(e,t,n){var a=n._valuechange;n._handles&&n._handles.detach(),a.delegated?a.getNodes().each(function(e){g._stopPolling(e,n)}):g._stopPolling(e,n)}},t={detach:g._onUnsubscribe,on:g._onSubscribe,delegate:g._onSubscribe,detachDelegate:g._onUnsubscribe,publishConfig:{emitFacade:!0}};c.Event.define("valuechange",t),c.Event.define("valueChange",t),c.ValueChange=g},"@VERSION@",{requires:["event-focus","event-synthetic"]});