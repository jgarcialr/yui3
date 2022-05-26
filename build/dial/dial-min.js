YUI.add("dial",function(r,e){var s,t,a,i=!1;function n(e){n.superclass.constructor.apply(this,arguments)}function o(e){return r.ClassNameManager.getClassName(n.NAME,e)}r.UA.ie&&r.UA.ie<9&&(i=!0),s=r.Lang,t=r.Widget,a=r.Node,n.NAME="dial",n.ATTRS={min:{value:-220},max:{value:220},diameter:{value:100},handleDiameter:{value:.2},markerDiameter:{value:.1},centerButtonDiameter:{value:.5},value:{value:0,validator:function(e){return this._validateValue(e)}},minorStep:{value:1},majorStep:{value:10},stepsPerRevolution:{value:100},decimalPlaces:{value:0},strings:{valueFn:function(){return r.Intl.get("dial")}},handleDistance:{value:.75}},n.CSS_CLASSES={label:o("label"),labelString:o("label-string"),valueString:o("value-string"),northMark:o("north-mark"),ring:o("ring"),ringVml:o("ring-vml"),marker:o("marker"),markerVml:o("marker-vml"),markerMaxMin:o("marker-max-min"),centerButton:o("center-button"),centerButtonVml:o("center-button-vml"),resetString:o("reset-string"),handle:o("handle"),handleVml:o("handle-vml"),hidden:o("hidden"),dragging:r.ClassNameManager.getClassName("dd-dragging")},n.LABEL_TEMPLATE='<div class="'+n.CSS_CLASSES.label+'"><span id="" class="'+n.CSS_CLASSES.labelString+'">{label}</span><span class="'+n.CSS_CLASSES.valueString+'"></span></div>',!1===i?(n.RING_TEMPLATE='<div class="'+n.CSS_CLASSES.ring+'"><div class="'+n.CSS_CLASSES.northMark+'"></div></div>',n.MARKER_TEMPLATE='<div class="'+n.CSS_CLASSES.marker+" "+n.CSS_CLASSES.hidden+'"></div>',n.CENTER_BUTTON_TEMPLATE='<div class="'+n.CSS_CLASSES.centerButton+'"><div class="'+n.CSS_CLASSES.resetString+" "+n.CSS_CLASSES.hidden+'">{resetStr}</div></div>',n.HANDLE_TEMPLATE='<div class="'+n.CSS_CLASSES.handle+'" aria-labelledby="" aria-valuetext="" aria-valuemax="" aria-valuemin="" aria-valuenow="" role="slider"  tabindex="0" title="{tooltipHandle}">'):(n.RING_TEMPLATE='<div class="'+n.CSS_CLASSES.ring+" "+n.CSS_CLASSES.ringVml+'"><div class="'+n.CSS_CLASSES.northMark+'"></div><v:oval strokecolor="#ceccc0" strokeweight="1px"><v:fill type=gradient color="#8B8A7F" color2="#EDEDEB" angle="45"/></v:oval></div>',n.MARKER_TEMPLATE='<div class="'+n.CSS_CLASSES.markerVml+" "+n.CSS_CLASSES.hidden+'"><v:oval stroked="false"><v:fill opacity="20%" color="#000"/></v:oval></div>',n.CENTER_BUTTON_TEMPLATE='<div class="'+n.CSS_CLASSES.centerButton+" "+n.CSS_CLASSES.centerButtonVml+'"><v:oval strokecolor="#ceccc0" strokeweight="1px"><v:fill type=gradient color="#C7C5B9" color2="#fefcf6" colors="35% #d9d7cb, 65% #fefcf6" angle="45"/><v:shadow on="True" color="#000" opacity="10%" offset="2px, 2px"/></v:oval><div class="'+n.CSS_CLASSES.resetString+" "+n.CSS_CLASSES.hidden+'">{resetStr}</div></div>',n.HANDLE_TEMPLATE='<div class="'+n.CSS_CLASSES.handleVml+'" aria-labelledby="" aria-valuetext="" aria-valuemax="" aria-valuemin="" aria-valuenow="" role="slider"  tabindex="0" title="{tooltipHandle}"><v:oval stroked="false"><v:fill opacity="20%" color="#6C3A3A"/></v:oval></div>'),r.extend(n,t,{renderUI:function(){this._renderLabel(),this._renderRing(),this._renderMarker(),this._renderCenterButton(),this._renderHandle(),this.contentBox=this.get("contentBox"),this._originalValue=this.get("value"),this._minValue=this.get("min"),this._maxValue=this.get("max"),this._stepsPerRevolution=this.get("stepsPerRevolution"),this._minTimesWrapped=Math.floor(this._minValue/this._stepsPerRevolution-1),this._maxTimesWrapped=Math.floor(this._maxValue/this._stepsPerRevolution+1),this._timesWrapped=0,this._angle=this._getAngleFromValue(this.get("value")),this._prevAng=this._angle,this._setTimesWrappedFromValue(this._originalValue),this._handleNode.set("aria-valuemin",this._minValue),this._handleNode.set("aria-valuemax",this._maxValue)},_setBorderRadius:function(){this._ringNode.setStyles({WebkitBorderRadius:this._ringNodeRadius+"px",MozBorderRadius:this._ringNodeRadius+"px",borderRadius:this._ringNodeRadius+"px"}),this._handleNode.setStyles({WebkitBorderRadius:this._handleNodeRadius+"px",MozBorderRadius:this._handleNodeRadius+"px",borderRadius:this._handleNodeRadius+"px"}),this._markerNode.setStyles({WebkitBorderRadius:this._markerNodeRadius+"px",MozBorderRadius:this._markerNodeRadius+"px",borderRadius:this._markerNodeRadius+"px"}),this._centerButtonNode.setStyles({WebkitBorderRadius:this._centerButtonNodeRadius+"px",MozBorderRadius:this._centerButtonNodeRadius+"px",borderRadius:this._centerButtonNodeRadius+"px"})},_handleCenterButtonEnter:function(){this._resetString.removeClass(n.CSS_CLASSES.hidden)},_handleCenterButtonLeave:function(){this._resetString.addClass(n.CSS_CLASSES.hidden)},bindUI:function(){this.after("valueChange",this._afterValueChange);var e=this.get("boundingBox"),t=r.UA.opera?"press:":"down:",i=t+"38,40,33,34,35,36",s=t+"37,39",t=t+"37+meta,39+meta",a=r.DD.Drag;r.on("key",r.bind(this._onDirectionKey,this),e,i),r.on("key",r.bind(this._onLeftRightKey,this),e,s),e.on("key",this._onLeftRightKeyMeta,t,this),r.on("mouseenter",r.bind(this._handleCenterButtonEnter,this),this._centerButtonNode),r.on("mouseleave",r.bind(this._handleCenterButtonLeave,this),this._centerButtonNode),r.on("gesturemovestart",r.bind(this._resetDial,this),this._centerButtonNode),r.on("gesturemoveend",r.bind(this._handleCenterButtonMouseup,this),this._centerButtonNode),r.on(a.START_EVENT,r.bind(this._handleHandleMousedown,this),this._handleNode),r.on(a.START_EVENT,r.bind(this._handleMousedown,this),this._ringNode),r.on("gesturemoveend",r.bind(this._handleRingMouseup,this),this._ringNode),this._dd1=new a({node:this._handleNode,on:{"drag:drag":r.bind(this._handleDrag,this),"drag:start":r.bind(this._handleDragStart,this),"drag:end":r.bind(this._handleDragEnd,this)}}),r.bind(this._dd1.addHandle(this._ringNode),this)},_setTimesWrappedFromValue:function(e){e%this._stepsPerRevolution==0?this._timesWrapped=e/this._stepsPerRevolution:this._timesWrapped=Math.floor(e/this._stepsPerRevolution)},_getAngleFromHandleCenter:function(e,t){t=Math.atan((this._dialCenterY-t)/(this._dialCenterX-e))*(180/Math.PI);
return t=this._dialCenterX-e<0?t+90:t+90+180},_calculateDialCenter:function(){this._dialCenterX=this._ringNode.get("offsetWidth")/2,this._dialCenterY=this._ringNode.get("offsetHeight")/2},_handleRingMouseup:function(){this._handleNode.focus()},_handleCenterButtonMouseup:function(){this._handleNode.focus()},_handleHandleMousedown:function(){this._handleNode.focus()},_handleDrag:function(e){var t=parseInt(this._handleNode.getStyle("left"),10)+this._handleNodeRadius,i=parseInt(this._handleNode.getStyle("top"),10)+this._handleNodeRadius,t=this._getAngleFromHandleCenter(t,i);270<this._prevAng&&t<90?this._timesWrapped<this._maxTimesWrapped&&(this._timesWrapped=this._timesWrapped+1):this._prevAng<90&&270<t&&this._timesWrapped>this._minTimesWrapped&&(this._timesWrapped=this._timesWrapped-1),(i=this._getValueFromAngle(t))>this._maxValue+this._stepsPerRevolution?this._timesWrapped--:i<this._minValue-this._stepsPerRevolution&&this._timesWrapped++,this._prevAng=t,this._handleValuesBeyondMinMax(e,i)},_handleMousedown:function(e){if(this._ringNode.compareTo(e.target)){var t,i=this._getAngleFromValue(this._minValue),s=this._getAngleFromValue(this._maxValue),a=r.UA.ios?(n=e.clientX-this._ringNode.getX(),e.clientY-this._ringNode.getY()):(n=e.clientX+r.one("document").get("scrollLeft")-this._ringNode.getX(),e.clientY+r.one("document").get("scrollTop")-this._ringNode.getY()),n=this._getAngleFromHandleCenter(n,a);if(this._maxValue-this._minValue>this._stepsPerRevolution)180<Math.abs(this._prevAng-n)?this._timesWrapped>this._minTimesWrapped&&this._timesWrapped<this._maxTimesWrapped&&(this._timesWrapped=0<this._prevAng-n?this._timesWrapped+1:this._timesWrapped-1):this._timesWrapped===this._minTimesWrapped&&n-this._prevAng<180&&this._timesWrapped++;else if(this._maxValue-this._minValue===this._stepsPerRevolution)this._timesWrapped=n<i?1:0;else if(s<i)this._prevAng>=i&&n<=(i+s)/2?this._timesWrapped++:this._prevAng<=s&&(i+s)/2<n&&this._timesWrapped--;else if(n<i||s<n)return t=180<(a=((i+s)/2+180)%360)?s<n&&n<a?this.get("max"):this.get("min"):n<i&&a<n?this.get("min"):this.get("max"),this._prevAng=this._getAngleFromValue(t),this.set("value",t),void this._setTimesWrappedFromValue(t);(t=this._getValueFromAngle(n))>this._maxValue?this._prevAng=this._getAngleFromValue(this._maxValue):t<this._minValue?this._prevAng=this._getAngleFromValue(this._minValue):this._prevAng=n,this._handleValuesBeyondMinMax(e,t)}},_handleValuesBeyondMinMax:function(e,t){t>=this._minValue&&t<=this._maxValue?(this.set("value",t),e.currentTarget===this._ringNode&&this._dd1._handleMouseDownEvent(e)):t>this._maxValue?this.set("value",this._maxValue):t<this._minValue&&this.set("value",this._minValue)},_handleDragStart:function(e){this._markerNode.removeClass(n.CSS_CLASSES.hidden)},_handleDragEnd:function(){this._handleNode.transition({duration:.08,easing:"ease-in",left:this._setNodeToFixedRadius(this._handleNode,!0)[0]+"px",top:this._setNodeToFixedRadius(this._handleNode,!0)[1]+"px"},r.bind(function(){var e=this.get("value");e>this._minValue&&e<this._maxValue?this._markerNode.addClass(n.CSS_CLASSES.hidden):(this._setTimesWrappedFromValue(e),this._prevAng=this._getAngleFromValue(e))},this))},_setNodeToFixedRadius:function(e,t){var i=this._angle-90,s=Math.PI/180,a=Math.round(Math.sin(i*s)*this._handleDistance),i=Math.round(Math.cos(i*s)*this._handleDistance),s=e.get("offsetWidth");if(a-=.5*s,i-=.5*s,t)return[this._ringNodeRadius+i,this._ringNodeRadius+a];e.setStyle("left",this._ringNodeRadius+i+"px"),e.setStyle("top",this._ringNodeRadius+a+"px")},syncUI:function(){this._setSizes(),this._calculateDialCenter(),this._setBorderRadius(),this._uiSetValue(this.get("value")),this._markerNode.addClass(n.CSS_CLASSES.hidden),this._resetString.addClass(n.CSS_CLASSES.hidden)},_setSizes:function(){var e=this.get("diameter"),t=function(e,t,i){e.getElementsByTagName("oval").setStyle("width",t*i+"px"),e.getElementsByTagName("oval").setStyle("height",t*i+"px"),e.setStyle("width",t*i+"px"),e.setStyle("height",t*i+"px")};t(this._ringNode,e,1),t(this._handleNode,e,this.get("handleDiameter")),t(this._markerNode,e,this.get("markerDiameter")),t(this._centerButtonNode,e,this.get("centerButtonDiameter")),this._ringNodeRadius=.5*this._ringNode.get("offsetWidth"),this._handleNodeRadius=.5*this._handleNode.get("offsetWidth"),this._markerNodeRadius=.5*this._markerNode.get("offsetWidth"),this._centerButtonNodeRadius=.5*this._centerButtonNode.get("offsetWidth"),this._handleDistance=this._ringNodeRadius*this.get("handleDistance"),e=this._ringNodeRadius-this._centerButtonNodeRadius,this._centerButtonNode.setStyle("left",e+"px"),this._centerButtonNode.setStyle("top",e+"px"),t=this._centerButtonNodeRadius-.5*this._resetString.get("offsetWidth"),e=this._centerButtonNodeRadius-.5*this._resetString.get("offsetHeight"),this._resetString.setStyles({left:t+"px",top:e+"px"})},_renderLabel:function(){var e=this.get("contentBox"),t=e.one("."+n.CSS_CLASSES.label);t||(t=a.create(r.Lang.sub(n.LABEL_TEMPLATE,this.get("strings"))),e.append(t)),this._labelNode=t,this._valueStringNode=this._labelNode.one("."+n.CSS_CLASSES.valueString)},_renderRing:function(){var e=this.get("contentBox"),t=e.one("."+n.CSS_CLASSES.ring);t||(t=e.appendChild(n.RING_TEMPLATE)).setStyles({width:this.get("diameter")+"px",height:this.get("diameter")+"px"}),this._ringNode=t},_renderMarker:function(){var e=this.get("contentBox"),t=(t=e.one("."+n.CSS_CLASSES.marker))||e.one("."+n.CSS_CLASSES.ring).appendChild(n.MARKER_TEMPLATE);this._markerNode=t},_renderCenterButton:function(){var e=this.get("contentBox"),t=e.one("."+n.CSS_CLASSES.centerButton);t||(t=a.create(r.Lang.sub(n.CENTER_BUTTON_TEMPLATE,this.get("strings"))),e.one("."+n.CSS_CLASSES.ring).append(t)),this._centerButtonNode=t,this._resetString=this._centerButtonNode.one("."+n.CSS_CLASSES.resetString)},_renderHandle:function(){var e=n.CSS_CLASSES.label+r.guid(),t=this.get("contentBox"),i=t.one("."+n.CSS_CLASSES.handle);i||((i=a.create(r.Lang.sub(n.HANDLE_TEMPLATE,this.get(
"strings")))).setAttribute("aria-labelledby",e),this._labelNode.one("."+n.CSS_CLASSES.labelString).setAttribute("id",e),t.one("."+n.CSS_CLASSES.ring).append(i)),this._handleNode=i},_setLabelString:function(e){this.get("contentBox").one("."+n.CSS_CLASSES.labelString).setHTML(e)},_setResetString:function(e){this.get("contentBox").one("."+n.CSS_CLASSES.resetString).setHTML(e)},_setTooltipString:function(e){this._handleNode.set("title",e)},_onDirectionKey:function(e){switch(e.preventDefault(),e.charCode){case 38:this._incrMinor();break;case 40:this._decrMinor();break;case 36:this._setToMin();break;case 35:this._setToMax();break;case 33:this._incrMajor();break;case 34:this._decrMajor()}},_onLeftRightKey:function(e){switch(e.preventDefault(),e.charCode){case 37:this._decrMinor();break;case 39:this._incrMinor()}},_onLeftRightKeyMeta:function(e){switch(e.preventDefault(),e.charCode){case 37:this._setToMin();break;case 39:this._setToMax()}},_incrMinor:function(){var e=this.get("value")+this.get("minorStep"),e=Math.min(e,this.get("max"));this.set("value",+e.toFixed(this.get("decimalPlaces")))},_decrMinor:function(){var e=this.get("value")-this.get("minorStep"),e=Math.max(e,this.get("min"));this.set("value",+e.toFixed(this.get("decimalPlaces")))},_incrMajor:function(){var e=this.get("value")+this.get("majorStep"),e=Math.min(e,this.get("max"));this.set("value",+e.toFixed(this.get("decimalPlaces")))},_decrMajor:function(){var e=this.get("value")-this.get("majorStep"),e=Math.max(e,this.get("min"));this.set("value",+e.toFixed(this.get("decimalPlaces")))},_setToMax:function(){this.set("value",this.get("max"))},_setToMin:function(){this.set("value",this.get("min"))},_resetDial:function(e){e&&e.stopPropagation(),this.set("value",this._originalValue),this._resetString.addClass(n.CSS_CLASSES.hidden),this._handleNode.focus()},_getAngleFromValue:function(e){e=e%this._stepsPerRevolution/this._stepsPerRevolution*360;return e<0?360+e:e},_getValueFromAngle:function(e){e<0?e=360+e:0===e&&(e=360);e=e/360*this._stepsPerRevolution;return+(e+=this._timesWrapped*this._stepsPerRevolution).toFixed(this.get("decimalPlaces"))},_afterValueChange:function(e){this._uiSetValue(e.newVal)},_valueToDecimalPlaces:function(e){},_uiSetValue:function(e){this._angle=this._getAngleFromValue(e),!1===this._handleNode.hasClass(n.CSS_CLASSES.dragging)&&(this._setTimesWrappedFromValue(e),this._setNodeToFixedRadius(this._handleNode,!1),this._prevAng=this._getAngleFromValue(this.get("value"))),this._valueStringNode.setHTML(e.toFixed(this.get("decimalPlaces"))),this._handleNode.set("aria-valuenow",e),this._handleNode.set("aria-valuetext",e),this._setNodeToFixedRadius(this._markerNode,!1),e===this._maxValue||e===this._minValue?(this._markerNode.addClass(n.CSS_CLASSES.markerMaxMin),!0===i&&this._markerNode.getElementsByTagName("fill").set("color","#AB3232"),this._markerNode.removeClass(n.CSS_CLASSES.hidden)):(!0===i&&this._markerNode.getElementsByTagName("fill").set("color","#000"),this._markerNode.removeClass(n.CSS_CLASSES.markerMaxMin),!1===this._handleNode.hasClass(n.CSS_CLASSES.dragging)&&this._markerNode.addClass(n.CSS_CLASSES.hidden))},_validateValue:function(e){var t=this.get("min"),i=this.get("max");return s.isNumber(e)&&t<=e&&e<=i}}),r.Dial=n},"@VERSION@",{requires:["widget","dd-drag","event-mouseenter","event-move","event-key","transition","intl"],lang:["en","es","hu"],skinnable:!0});