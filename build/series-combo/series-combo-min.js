YUI.add("series-combo",function(t,e){t.ComboSeries=t.Base.create("comboSeries",t.CartesianSeries,[t.Fills,t.Lines,t.Plots],{drawSeries:function(){this.get("showAreaFill")&&this.drawFill.apply(this,this._getClosingPoints()),this.get("showLines")&&this.drawLines(),this.get("showMarkers")&&this.drawPlots()},_toggleVisible:function(e){var t,s,i,r;if(this.get("showAreaFill")&&this._path&&this._path.set("visible",e),this.get("showLines")&&this._lineGraphic&&this._lineGraphic.set("visible",e),this.get("showMarkers")&&(t=this.get("markers")))for(r=0,i=t.length;r<i;++r)(s=t[r])&&s.set("visible",e)},_getDefaultStyles:function(){var e=t.ComboSeries.superclass._getDefaultStyles();return e.line=this._getLineDefaults(),e.marker=this._getPlotDefaults(),e.area=this._getAreaDefaults(),e}},{ATTRS:{type:{value:"combo"},showAreaFill:{value:!1},showLines:{value:!0},showMarkers:{value:!0},marker:{lazyAdd:!1,getter:function(){return this.get("styles").marker},setter:function(e){this.set("styles",{marker:e})}},line:{lazyAdd:!1,getter:function(){return this.get("styles").line},setter:function(e){this.set("styles",{line:e})}},area:{lazyAdd:!1,getter:function(){return this.get("styles").area},setter:function(e){this.set("styles",{area:e})}}}})},"@VERSION@",{requires:["series-cartesian","series-line-util","series-plot-util","series-fill-util"]});