YUI.add("series-bar",function(e,t){e.BarSeries=e.Base.create("barSeries",e.MarkerSeries,[e.Histogram],{_getMarkerDimensions:function(e,t,r,i){i={top:t+i};return e>=this._leftOrigin?(i.left=this._leftOrigin,i.calculatedSize=e-i.left):(i.left=e,i.calculatedSize=this._leftOrigin-e),i},updateMarkerState:function(e,t){if(this._markers&&this._markers[t]){var r,i,s,a=this._copyObject(this.get("styles").marker),o=this._getState(e),h=this.get("xcoords"),l=this.get("ycoords"),e=this._markers[t],g=this.get("seriesTypeCollection"),c=g?g.length:0,n=0,f=0,m=0,d=[],_=this.get("order"),o="off"!==o&&a[o]?a[o]:a;for(o.fill.color=this._getItemColor(o.fill.color,t),o.border.color=this._getItemColor(o.border.color,t),a=this._getMarkerDimensions(h[t],l[t],a.height,f),o.width=a.calculatedSize,o.height=Math.min(this._maxSize,o.height),e.set(o);m<c;++m)d[m]=l[t]+n,i=g[m].get("styles").marker,n+=Math.min(this._maxSize,i.height),m<_&&(f=n),f-=n/2;for(m=0;m<c;++m)(r=g[m].get("markers"))&&(s=r[t])&&s!==undefined&&s.set("y",d[m]-n/2)}}},{ATTRS:{type:{value:"bar"},direction:{value:"vertical"}}})},"@VERSION@",{requires:["series-marker","series-histogram-base"]});