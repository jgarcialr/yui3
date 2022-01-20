YUI.add("series-pie",function(N,t){var m=N.config.doc,A=(0,N.ClassNameManager.getClassName)("seriesmarker");N.PieSeries=N.Base.create("pieSeries",N.SeriesBase,[N.Plots],{_map:null,_image:null,_setMap:function(){var t,e="pieHotSpotMapi_"+Math.round(1e5*Math.random()),a=this.get("graph"),a=a?a.get("contentBox"):this.get("graphic").get("node");if(this._image){for(a.removeChild(this._image);this._areaNodes&&0<this._areaNodes.length;)t=this._areaNodes.shift(),this._map.removeChild(t);a.removeChild(this._map)}this._image=m.createElement("img"),this._image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAABCAYAAAD9yd/wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJJREFUeNpiZGBgSGPAAgACDAAIkABoFyloZQAAAABJRU5ErkJggg==",a.appendChild(this._image),this._image.style.position="absolute",this._image.style.left="0px",this._image.style.top="0px",this._image.setAttribute("usemap","#"+e),this._image.style.zIndex=3,this._image.style.opacity=0,this._image.setAttribute("alt","imagemap"),this._map=m.createElement("map"),a.appendChild(this._map),this._map.setAttribute("name",e),this._map.setAttribute("id",e),this._areaNodes=[]},_categoryDisplayName:null,_valueDisplayName:null,addListeners:function(){var t=this.get("categoryAxis"),e=this.get("valueAxis");t&&(t.after("dataReady",N.bind(this._categoryDataChangeHandler,this)),t.after("dataUpdate",N.bind(this._categoryDataChangeHandler,this))),e&&(e.after("dataReady",N.bind(this._valueDataChangeHandler,this)),e.after("dataUpdate",N.bind(this._valueDataChangeHandler,this))),this.after("categoryAxisChange",this.categoryAxisChangeHandler),this.after("valueAxisChange",this.valueAxisChangeHandler),this._stylesChangeHandle=this.after("stylesChange",this._updateHandler),this._visibleChangeHandle=this.after("visibleChange",this._handleVisibleChange)},validate:function(){this.draw(),this._renderered=!0},_categoryAxisChangeHandler:function(){var t=this.get("categoryAxis");t.after("dataReady",N.bind(this._categoryDataChangeHandler,this)),t.after("dataUpdate",N.bind(this._categoryDataChangeHandler,this))},_valueAxisChangeHandler:function(){var t=this.get("valueAxis");t.after("dataReady",N.bind(this._valueDataChangeHandler,this)),t.after("dataUpdate",N.bind(this._valueDataChangeHandler,this))},GUID:"pieseries",_categoryDataChangeHandler:function(){this._rendered&&this.get("categoryKey")&&this.get("valueKey")&&this.draw()},_valueDataChangeHandler:function(){this._rendered&&this.get("categoryKey")&&this.get("valueKey")&&this.draw()},getTotalValues:function(){return this.get("valueAxis").getTotalByKey(this.get("valueKey"))},draw:function(){var t=this.get("width"),e=this.get("height");isFinite(t)&&isFinite(e)&&0<t&&0<e&&(this._rendered=!0,this._drawing?this._callLater=!0:(this._drawing=!0,this._callLater=!1,this.drawSeries(),this._drawing=!1,this._callLater?this.draw():this.fire("drawingComplete")))},drawPlots:function(){for(var t,e,a,i,s=this.get("valueAxis").getDataByKey(this.get("valueKey")).concat(),r=0,h=s.length,l=this.get("styles").marker,n=l.fill.colors,o=l.fill.alphas||["1"],g=l.border.colors,c=[l.border.weight],d=[l.border.alpha],u=c.concat(),p=g.concat(),_=d.concat(),y=l.padding,l=this.get("graphic"),l=Math.min(l.get("width"),l.get("height")),f=l-(y.left+y.right),m=l-(y.top+y.bottom),A=-90,v=f/2,C=m/2,M=Math.min(v,C),b=0,D=0,x=this.get("graphOrder")||0,H="canvasGraphic"===N.Graphic.NAME;b<h;++b)a=parseFloat(s[b]),s.push(a),isNaN(a)||(r+=a);for(t=n?n.concat():null,e=o?o.concat():null,this._createMarkerCache(),H&&(this._setMap(),this._image.width=f,this._image.height=m),b=0;b<h;b++)a=s[b],D=0===r?360/s.length:a/r*360,t&&t.length<1&&(t=n.concat()),e&&e.length<1&&(e=o.concat()),(u=u&&u.length<1?c.concat():u)&&p.length<1&&(p=g.concat()),_&&_.length<1&&(_=d.concat()),i=u?u.shift():null,A+=D,i={border:{color:p?p.shift():null,weight:i,alpha:_?_.shift():null},fill:{color:t?t.shift():this._getDefaultColor(b,"slice"),alpha:e?e.shift():null},type:"pieslice",arc:D,radius:M,startAngle:A,cx:v,cy:C,width:f,height:m},this.getMarker(i,x,b),H&&this._addHotspot(i,x,b);this._clearMarkerCache()},_setStyles:function(t){return t.marker||(t={marker:t}),t=this._parseMarkerStyles(t),N.PieSeries.superclass._mergeStyles.apply(this,[t,this._getDefaultStyles()])},_addHotspot:function(t,e,a){for(var i,s=m.createElement("area"),r=1,h=t.cx,l=t.cy,n=t.arc,o=t.startAngle-n,g=t.startAngle,c=t.radius,d=h+Math.cos(o/180*Math.PI)*c,u=l+Math.sin(o/180*Math.PI)*c,t=h+Math.cos(g/180*Math.PI)*c,g=l+Math.sin(g/180*Math.PI)*c,p=Math.floor(n/10)-1,_=n/Math.floor(n/10)/180*Math.PI,y=Math.atan((u-l)/(d-h)),f=h+", "+l+", "+d+", "+u,r=1;r<=p;++r)i=_*r,Math.cos(y+i),Math.sin(y+i),o<=90?(f+=", "+(h+c*Math.cos(y+_*r)),f+=", "+(l+c*Math.sin(y+_*r))):(f+=", "+(h-c*Math.cos(y+_*r)),f+=", "+(l-c*Math.sin(y+_*r)));f+=", "+t+", "+g,f+=", "+h+", "+l,this._map.appendChild(s),s.setAttribute("class",A),s.setAttribute("id","hotSpot_"+e+"_"+a),s.setAttribute("shape","polygon"),s.setAttribute("coords",f),this._areaNodes.push(s)},updateMarkerState:function(t,e){var a,i;this._markers[e]&&(a=this._getState(t),i=this._markers[e],t=this.get("styles").marker,t="off"!==a&&t[a]?t[a]:t,(t=this._mergeStyles(t,{})).fill.color=t.fill.colors[e%t.fill.colors.length],t.fill.alpha=t.fill.alphas[e%t.fill.alphas.length],i.set(t))},_createMarker:function(t){var e=this.get("graphic"),t=this._copyObject(t),e=e.addShape(t);return e.addClass(A),e},_clearMarkerCache:function(){for(var t,e=this._markerCache.length,a=0;a<e;++a)(t=this._markerCache[a])&&t.destroy();this._markerCache=[]},_getPlotDefaults:function(){var t={padding:{top:0,left:0,right:0,bottom:0},fill:{alphas:["1"]},border:{weight:0,alpha:1}};return t.fill.colors=this._defaultSliceColors,t.border.colors=this._defaultBorderColors,t}},{ATTRS:{type:{value:"pie"},order:{},graph:{},categoryAxis:{value:null,validator:function(t){return t!==this.get("categoryAxis")}},valueAxis:{value:null,validator:function(t){return t!==this.get("valueAxis")}},categoryKey:{value:null,validator:function(t
){return t!==this.get("categoryKey")}},valueKey:{value:null,validator:function(t){return t!==this.get("valueKey")}},categoryDisplayName:{setter:function(t){return this._categoryDisplayName=t},getter:function(){return this._categoryDisplayName||this.get("categoryKey")}},valueDisplayName:{setter:function(t){return this._valueDisplayName=t},getter:function(){return this._valueDisplayName||this.get("valueKey")}},slices:null}})},"@VERSION@",{requires:["series-base","series-plot-util"]});