YUI.add("scrollview-paginator",function(_,e){var t=_.ClassNameManager.getClassName,s="scrollview",i=t(s,"hidden"),a=t(s,"paged"),l=_.ScrollView?_.ScrollView.UI_SRC:"ui",c="index",h="scrollX",g="scrollY",d="total",f="disabled",u="axis",x="x",m="y";function v(){v.superclass.constructor.apply(this,arguments)}_.extend(v,_.Plugin.Base,{initializer:function(e){var t=this,s=t.get("host");t._pageDims=[],t._pageBuffer=1,t._optimizeMemory=!1,t._host=s,t._bb=s._bb,t._cb=s._cb,t._cIndex=t.get(c),t._cAxis=t.get(u),e._optimizeMemory&&(t._optimizeMemory=e._optimizeMemory),e._pageBuffer&&(t._pageBuffer=e._pageBuffer),t._bindAttrs()},_bindAttrs:function(){var e=this;e.after({indexChange:e._afterIndexChange,axisChange:e._afterAxisChange}),e.beforeHostMethod("scrollTo",e._beforeHostScrollTo),e.beforeHostMethod("_mousewheel",e._beforeHostMousewheel),e.beforeHostMethod("_flick",e._beforeHostFlick),e.afterHostMethod("_onGestureMoveEnd",e._afterHostGestureMoveEnd),e.afterHostMethod("_uiDimensionsChange",e._afterHostUIDimensionsChange),e.afterHostMethod("syncUI",e._afterHostSyncUI),e.afterHostEvent("render",e._afterHostRender),e.afterHostEvent("scrollEnd",e._afterHostScrollEnded)},_afterHostRender:function(){var e=this,t=e._bb,s=e._host,i=e._cIndex,o=e._cAxis,r=e._getPageNodes().size(),n=e._pageDims[i];o.y?s._maxScrollX=n.maxScrollX:o.x&&(s._maxScrollY=n.maxScrollY),e.set(d,r),0!==i&&e.scrollToIndex(i,0),t.addClass(a),e._optimize()},_afterHostSyncUI:function(){var e=this,t=e._host,s=e._getPageNodes().size();e.set(d,s),e._cAxis===undefined&&e._set(u,t.get(u))},_afterHostUIDimensionsChange:function(){var r=this,e=r._host._getScrollDims(),n=e.offsetWidth,a=e.offsetHeight;r._getPageNodes().each(function(e,t){var s=e.get("scrollWidth"),i=e.get("scrollHeight"),o=Math.max(0,s-n),e=Math.max(0,i-a);r._pageDims[t]?(r._pageDims[t].maxScrollX=o,r._pageDims[t].maxScrollY=e):r._pageDims[t]={scrollX:0,scrollY:0,maxScrollX:o,maxScrollY:e,width:s,height:i}})},_beforeHostScrollTo:function(e,t,s,i,o){var r=this,n=r._host._gesture,a=r._cIndex,l=r._cAxis,r=r._getPageNodes();return n&&((n=n.axis)===m?e=null:t=null,!1===l[n]&&(o=r.item(a))),new _.Do.AlterArgs("new args",[e,t,s,i,o])},_afterHostGestureMoveEnd:function(){var e,t,s,i,o,r,n,a;this._host._gesture.flick||(o=(a=(e=this)._host)._gesture,t=e._cIndex,n=e._cAxis,o=0<(i=o[(r=(s=o.axis)===x)?"deltaX":"deltaY"]),r=e._pageDims[t][r?"width":"height"]/2,r=Math.abs(i)>=r,n=n[s],a=a.rtl,n&&(r?e[a===o?"prev":"next"]():e.scrollToIndex(e.get(c))))},_beforeHostMousewheel:function(e){var t=this._host._bb,s=e.wheelDelta<0,i=this._cAxis;if(t.contains(e.target)&&i.y)return this[s?"next":"prev"](),e.preventDefault(),new _.Do.Prevent},_beforeHostFlick:function(e){if(this._host.get(f))return!1;if(this._host._isOutOfBounds())return new _.Do.Prevent;var t=this._host,s=t._gesture,i=this.get(u),o=e.flick,r=o.velocity,n=o.axis||!1,e=r<0,r=i[n],t=t.rtl;return s&&(s.flick=o),r&&(this[t===e?"prev":"next"](),i[n])?new _.Do.Prevent:void 0},_afterHostScrollEnded:function(){var e=this,t=e._host,s=e._cIndex,i=t.get(h),t=t.get(g);e._cAxis.y?e._pageDims[s].scrollX=i:e._pageDims[s].scrollY=t,e._optimize()},_afterIndexChange:function(e){var t=this,s=t._host,i=e.newVal,o=t._pageDims[i],r=s._cAxis,n=t._cAxis;t._cIndex=i,r.x&&r.y&&(n.y?(s._maxScrollX=o.maxScrollX,s.set(h,o.scrollX,{src:l})):n.x&&(s._maxScrollY=o.maxScrollY,s.set(g,o.scrollY,{src:l}))),e.src!==l&&t.scrollToIndex(i)},_optimize:function(){if(!this._optimizeMemory)return!1;var e=this._cIndex,e=this._getStage(e);this._showNodes(e.visible),this._hideNodes(e.hidden)},_getStage:function(e){var t=this._pageBuffer,s=this.get(d),i=this._getPageNodes(),o=Math.max(0,e-t),t=Math.min(s,e+1+t);return{visible:i.splice(o,t-o),hidden:i}},_showNodes:function(e){e&&e.removeClass(i).setStyle("visibility","")},_hideNodes:function(e){e&&e.addClass(i).setStyle("visibility","hidden")},_getPageNodes:function(){var e=this._host._cb,t=this.get("selector");return t?e.all(t):e.get("children")},next:function(){var e=this._host,t=this._cIndex+1,s=this.get(d);e.get(f)||s<=t||this.set(c,t)},prev:function(){var e=this._host,t=this._cIndex-1;e.get(f)||t<0||this.set(c,t)},scrollTo:function(){return this.scrollToIndex.apply(this,arguments)},scrollToIndex:function(e,t,s){var i=this,o=i._host,r=i._getPageNodes().item(e),n=i._cAxis.x?h:g,a=r.get(n==h?"offsetLeft":"offsetTop");t=t!==undefined?t:v.TRANSITION.duration,s=s!==undefined?s:v.TRANSITION.easing,i.set(c,e,{src:l}),i._showNodes(r),o.set(n,a,{duration:t,easing:s})},_axisSetter:function(e){if(_.Lang.isString(e))return{x:!!e.match(/x/i),y:!!e.match(/y/i)}},_afterAxisChange:function(e){this._cAxis=e.newVal}},{NAME:"pluginScrollViewPaginator",NS:"pages",ATTRS:{axis:{setter:"_axisSetter",writeOnce:"initOnly"},selector:{value:null},index:{value:0},total:{value:0}},TRANSITION:{duration:300,easing:"ease-out"}}),_.namespace("Plugin").ScrollViewPaginator=v},"@VERSION@",{requires:["plugin","classnamemanager"]});