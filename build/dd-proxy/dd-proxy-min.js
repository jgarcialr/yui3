YUI.add("dd-proxy",function(o,e){var t,r=o.DD.DDM,s="node",d="dragNode",n="host",i=function(){i.superclass.constructor.apply(this,arguments)};i.NAME="DDProxy",i.NS="proxy",i.ATTRS={host:{},moveOnEnd:{value:!0},hideOnEnd:{value:!0},resizeFrame:{value:!0},positionProxy:{value:!0},borderStyle:{value:"1px solid #808080"},cloneNode:{value:!1}},t={_hands:null,_init:function(){if(!r._proxy)return r._createFrame(),void o.on("domready",o.bind(this._init,this));this._hands||(this._hands=[]);var e,t,i=this.get(n);i.get(d).compareTo(i.get(s))&&r._proxy&&i.set(d,r._proxy),o.Array.each(this._hands,function(e){e.detach()}),e=r.on("ddm:start",o.bind(function(){r.activeDrag===i&&r._setFrame(i)},this)),t=r.on("ddm:end",o.bind(function(){i.get("dragging")&&(this.get("moveOnEnd")&&i.get(s).setXY(i.lastXY),this.get("hideOnEnd")&&i.get(d).setStyle("display","none"),this.get("cloneNode")&&(i.get(d).remove(),i.set(d,r._proxy)))},this)),this._hands=[e,t]},initializer:function(){this._init()},destructor:function(){var e=this.get(n);o.Array.each(this._hands,function(e){e.detach()}),e.set(d,e.get(s))},clone:function(){var e=this.get(n),t=e.get(s),i=t.cloneNode(!0);return i.all('input[type="radio"]').removeAttribute("name"),delete i._yuid,i.setAttribute("id",o.guid()),i.setStyle("position","absolute"),t.get("parentNode").appendChild(i),e.set(d,i),i}},o.namespace("Plugin"),o.extend(i,o.Base,t),o.Plugin.DDProxy=i,o.mix(r,{_createFrame:function(){var e,t;r._proxy||(r._proxy=!0,e=o.Node.create("<div></div>"),t=o.one("body"),e.setStyles({position:"absolute",display:"none",zIndex:"999",top:"-999px",left:"-999px"}),t.prepend(e),e.set("id",o.guid()),e.addClass(r.CSS_PREFIX+"-proxy"),r._proxy=e)},_setFrame:function(e){var t=e.get(s),i=e.get(d),o="auto",n=r.activeDrag.get("activeHandle");"auto"===(o=n?n.getStyle("cursor"):o)&&(o=r.get("dragCursor")),i.setStyles({visibility:"hidden",display:"block",cursor:o,border:e.proxy.get("borderStyle")}),e.proxy.get("cloneNode")&&(i=e.proxy.clone()),e.proxy.get("resizeFrame")&&i.setStyles({height:t.get("offsetHeight")+"px",width:t.get("offsetWidth")+"px"}),e.proxy.get("positionProxy")&&i.setXY(e.nodeXY),i.setStyle("visibility","visible")}})},"@VERSION@",{requires:["dd-drag"]});