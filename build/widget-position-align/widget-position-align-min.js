YUI.add("widget-position-align",function(o,t){var s=o.Lang,i="align",e="visible",a="offsetWidth",g="offsetHeight";function l(t){}l.ATTRS={align:{value:null},centered:{setter:"_setAlignCenter",lazyAdd:!1,value:!1},alignOn:{value:[],validator:o.Lang.isArray}},l.TL="tl",l.TR="tr",l.BL="bl",l.BR="br",l.TC="tc",l.RC="rc",l.BC="bc",l.LC="lc",l.CC="cc",l.prototype={initializer:function(){this._posNode||o.error("WidgetPosition needs to be added to the Widget, before WidgetPositionAlign is added"),o.after(this._bindUIPosAlign,this,"bindUI"),o.after(this._syncUIPosAlign,this,"syncUI")},_posAlignUIHandles:null,destructor:function(){this._detachPosAlignUIHandles()},_bindUIPosAlign:function(){this.after("alignChange",this._afterAlignChange),this.after("alignOnChange",this._afterAlignOnChange),this.after("visibleChange",this._syncUIPosAlign)},_syncUIPosAlign:function(){var t=this.get(i);this._uiSetVisiblePosAlign(this.get(e)),t&&this._uiSetAlign(t.node,t.points)},align:function(t,e){return arguments.length?this.set(i,{node:t,points:e}):this._syncUIPosAlign(),this},centered:function(t){return this.align(t,[l.CC,l.CC])},_getAlignToXY:function(t,e,i,n){var s;switch(e){case l.TL:s=[i,n];break;case l.TR:s=[i-t.get(a),n];break;case l.BL:s=[i,n-t.get(g)];break;case l.BR:s=[i-t.get(a),n-t.get(g)];break;case l.TC:s=[i-t.get(a)/2,n];break;case l.BC:s=[i-t.get(a)/2,n-t.get(g)];break;case l.LC:s=[i,n-t.get(g)/2];break;case l.RC:s=[i-t.get(a),n-t.get(g)/2];break;case l.CC:s=[i-t.get(a)/2,n-t.get(g)/2]}return s},_getAlignedXY:function(t,e){if(s.isArray(e)&&2===e.length){var i,n=this._getRegion(t);if(n){switch(e[1]){case l.TL:i=[n.left,n.top];break;case l.TR:i=[n.right,n.top];break;case l.BL:i=[n.left,n.bottom];break;case l.BR:i=[n.right,n.bottom];break;case l.TC:i=[n.left+Math.floor(n.width/2),n.top];break;case l.BC:i=[n.left+Math.floor(n.width/2),n.bottom];break;case l.LC:i=[n.left,n.top+Math.floor(n.height/2)];break;case l.RC:i=[n.right,n.top+Math.floor(n.height/2)];break;case l.CC:i=[n.left+Math.floor(n.width/2),n.top+Math.floor(n.height/2)]}return this._getAlignToXY(this._posNode,e[0],i[0],i[1])}}else o.error("align: Invalid Points Arguments")},_setAlignCenter:function(t){return t&&this.set(i,{node:!0===t?null:t,points:[l.CC,l.CC]}),t},_uiSetAlign:function(t,e){e=this._getAlignedXY(t,e);e&&this._doAlign(e)},_uiSetVisiblePosAlign:function(t){t?this._attachPosAlignUIHandles():this._detachPosAlignUIHandles()},_attachPosAlignUIHandles:function(){var i,n,s;this._posAlignUIHandles||(i=this.get("boundingBox"),n=o.bind(this._syncUIPosAlign,this),s=[],o.Array.each(this.get("alignOn"),function(t){var e=t.eventName,t=o.one(t.node)||i;e&&s.push(t.on(e,n))}),this._posAlignUIHandles=s)},_detachPosAlignUIHandles:function(){var t=this._posAlignUIHandles;t&&(new o.EventHandle(t).detach(),this._posAlignUIHandles=null)},_doAlign:function(t){t&&this.move(t)},_getRegion:function(t){var e;return t?(t=o.Node.one(t))&&(e=t.get("region")):e=this._posNode.get("viewportRegion"),e},_afterAlignChange:function(t){t=t.newVal;t&&this._uiSetAlign(t.node,t.points)},_afterAlignOnChange:function(t){this._detachPosAlignUIHandles(),this.get(e)&&this._attachPosAlignUIHandles()}},o.WidgetPositionAlign=l},"@VERSION@",{requires:["widget-position"]});