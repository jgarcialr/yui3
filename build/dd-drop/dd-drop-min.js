YUI.add("dd-drop",function(h,t){var o="node",d=h.DD.DDM,n="offsetHeight",g="offsetWidth",e="drop:over",i="drop:enter",r="drop:exit",s=function(){this._lazyAddAttrs=!1,s.superclass.constructor.apply(this,arguments),h.on("domready",h.bind(function(){h.later(100,this,this._createShim)},this)),d._regTarget(this)};s.NAME="drop",s.ATTRS={node:{setter:function(t){var e=h.one(t);return e||h.error("DD.Drop: Invalid Node Given: "+t),e}},groups:{value:["default"],getter:function(){return this._groups?h.Object.keys(this._groups):(this._groups={},[])},setter:function(t){return this._groups=h.Array.hash(t),t}},padding:{value:"0",setter:function(t){return d.cssSizestoObject(t)}},lock:{value:!1,setter:function(t){return t?this.get(o).addClass(d.CSS_PREFIX+"-drop-locked"):this.get(o).removeClass(d.CSS_PREFIX+"-drop-locked"),t}},bubbles:{setter:function(t){return this.addTarget(t),t}},useShim:{value:!0,setter:function(t){return h.DD.DDM._noShim=!t,t}}},h.extend(s,h.Base,{_bubbleTargets:h.DD.DDM,addToGroup:function(t){return this._groups[t]=!0,this},removeFromGroup:function(t){return delete this._groups[t],this},_createEvents:function(){h.Array.each([e,i,r,"drop:hit"],function(t){this.publish(t,{type:t,emitFacade:!0,preventable:!1,bubbles:!0,queuable:!1,prefix:"drop"})},this)},_valid:null,_groups:null,shim:null,region:null,overTarget:null,inGroup:function(t){var e=this._valid=!1;return h.Array.each(t,function(t){this._groups[t]&&(e=!0,this._valid=!0)},this),e},initializer:function(){h.later(100,this,this._createEvents);var t,e=this.get(o);e.get("id")||(t=h.stamp(e),e.set("id",t)),e.addClass(d.CSS_PREFIX+"-drop"),this.set("groups",this.get("groups"))},destructor:function(){d._unregTarget(this),this.shim&&this.shim!==this.get(o)&&(this.shim.detachAll(),this.shim.remove(),this.shim=null),this.get(o).removeClass(d.CSS_PREFIX+"-drop"),this.detachAll()},_deactivateShim:function(){if(!this.shim)return!1;this.get(o).removeClass(d.CSS_PREFIX+"-drop-active-valid"),this.get(o).removeClass(d.CSS_PREFIX+"-drop-active-invalid"),this.get(o).removeClass(d.CSS_PREFIX+"-drop-over"),this.get("useShim")&&this.shim.setStyles({top:"-999px",left:"-999px",zIndex:"1"}),this.overTarget=!1},_activateShim:function(){if(!d.activeDrag)return!1;if(this.get(o)===d.activeDrag.get(o))return!1;if(this.get("lock"))return!1;var t=this.get(o);this.inGroup(d.activeDrag.get("groups"))?(t.removeClass(d.CSS_PREFIX+"-drop-active-invalid"),t.addClass(d.CSS_PREFIX+"-drop-active-valid"),d._addValid(this),this.overTarget=!1,this.get("useShim")||(this.shim=this.get(o)),this.sizeShim()):(d._removeValid(this),t.removeClass(d.CSS_PREFIX+"-drop-active-valid"),t.addClass(d.CSS_PREFIX+"-drop-active-invalid"))},sizeShim:function(){if(!d.activeDrag)return!1;if(this.get(o)===d.activeDrag.get(o))return!1;if(this.get("lock"))return!1;if(!this.shim)return h.later(100,this,this.sizeShim),!1;var t,e=this.get(o),i=e.get(n),r=e.get(g),s=e.getXY(),a=this.get("padding"),r=r+a.left+a.right,i=i+a.top+a.bottom;s[0]=s[0]-a.left,s[1]=s[1]-a.top,d.activeDrag.get("dragMode")===d.INTERSECT&&(i+=e=(t=d.activeDrag).get(o).get(n),r+=a=t.get(o).get(g),s[0]=s[0]-(a-t.deltaXY[0]),s[1]=s[1]-(e-t.deltaXY[1])),this.get("useShim")&&this.shim.setStyles({height:i+"px",width:r+"px",top:s[1]+"px",left:s[0]+"px"}),this.region={0:s[0],1:s[1],area:0,top:s[1],right:s[0]+r,bottom:s[1]+i,left:s[0]}},_createShim:function(){var t;d._pg?this.shim||(t=this.get("node"),this.get("useShim")&&((t=h.Node.create('<div id="'+this.get(o).get("id")+'_shim"></div>')).setStyles({height:this.get(o).get(n)+"px",width:this.get(o).get(g)+"px",backgroundColor:"yellow",opacity:".5",zIndex:"1",overflow:"hidden",top:"-900px",left:"-900px",position:"absolute"}),d._pg.appendChild(t),t.on("mouseover",h.bind(this._handleOverEvent,this)),t.on("mouseout",h.bind(this._handleOutEvent,this))),this.shim=t):h.later(10,this,this._createShim)},_handleTargetOver:function(){d.isOverTarget(this)?(this.get(o).addClass(d.CSS_PREFIX+"-drop-over"),d.activeDrop=this,(d.otherDrops[this]=this).overTarget?(d.activeDrag.fire("drag:over",{drop:this,drag:d.activeDrag}),this.fire(e,{drop:this,drag:d.activeDrag})):d.activeDrag.get("dragging")&&(this.overTarget=!0,this.fire(i,{drop:this,drag:d.activeDrag}),d.activeDrag.fire("drag:enter",{drop:this,drag:d.activeDrag}),d.activeDrag.get(o).addClass(d.CSS_PREFIX+"-drag-over"))):this._handleOut()},_handleOverEvent:function(){this.shim.setStyle("zIndex","999"),d._addActiveShim(this)},_handleOutEvent:function(){this.shim.setStyle("zIndex","1"),d._removeActiveShim(this)},_handleOut:function(t){d.isOverTarget(this)&&!t||this.overTarget&&(this.overTarget=!1,t||d._removeActiveShim(this),d.activeDrag&&(this.get(o).removeClass(d.CSS_PREFIX+"-drop-over"),d.activeDrag.get(o).removeClass(d.CSS_PREFIX+"-drag-over"),this.fire(r,{drop:this,drag:d.activeDrag}),d.activeDrag.fire("drag:exit",{drop:this,drag:d.activeDrag}),delete d.otherDrops[this]))}}),h.DD.Drop=s},"@VERSION@",{requires:["dd-drag","dd-ddm-drop"]});