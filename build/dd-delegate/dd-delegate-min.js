YUI.add("dd-delegate",function(a,e){var t=function(){t.superclass.constructor.apply(this,arguments)},n="container",o="nodes",s=a.Node.create("<div>Temp Node</div>");a.extend(t,a.Base,{_bubbleTargets:a.DD.DDM,dd:null,_shimState:null,_handles:null,_onNodeChange:function(e){this.set("dragNode",e.newVal)},_afterDragEnd:function(){a.DD.DDM._noShim=this._shimState,this.set("lastNode",this.dd.get("node")),this.get("lastNode").removeClass(a.DD.DDM.CSS_PREFIX+"-dragging"),this.dd._unprep(),this.dd.set("node",s)},_delMouseDown:function(e){var t=e.currentTarget,s=this.dd,n=t,i=this.get("dragConfig"),d=s.get("node");t.test(this.get(o))&&!t.test(this.get("invalid"))&&(this._shimState=a.DD.DDM._noShim,a.DD.DDM._noShim=!0,this.set("currentNode",t),d.inDoc()&&s._unprep(),s.set("node",t),i&&i.dragNode?n=i.dragNode:s.proxy&&(n=a.DD.DDM._proxy),s.set("dragNode",n),s._prep(),s.fire("drag:mouseDown",{ev:e}))},_onMouseEnter:function(){this._shimState=a.DD.DDM._noShim,a.DD.DDM._noShim=!0},_onMouseLeave:function(){a.DD.DDM._noShim=this._shimState},initializer:function(){this._handles=[];var e=this.get("dragConfig")||{},t=this.get(n);e.node=s.cloneNode(!0),(e.bubbleTargets=this).get("handles")&&(e.handles=this.get("handles")),this.dd=new a.DD.Drag(e),this.dd.after("drag:end",a.bind(this._afterDragEnd,this)),this.dd.on("dragNodeChange",a.bind(this._onNodeChange,this)),this.dd.after("drag:mouseup",function(){this._unprep()}),this._handles.push(a.delegate(a.DD.Drag.START_EVENT,a.bind(this._delMouseDown,this),t,this.get(o))),this._handles.push(a.on("mouseenter",a.bind(this._onMouseEnter,this),t)),this._handles.push(a.on("mouseleave",a.bind(this._onMouseLeave,this),t)),a.later(50,this,this.syncTargets),a.DD.DDM.regDelegate(this)},syncTargets:function(){var e,t,s;if(a.Plugin.Drop&&!this.get("destroyed"))return this.get("target")&&(e=a.one(this.get(n)).all(this.get(o)),t=this.dd.get("groups"),(s=this.get("dragConfig"))&&s.groups&&(t=s.groups),e.each(function(e){this.createDrop(e,t)},this)),this},createDrop:function(e,t){return e.drop||e.plug(a.Plugin.Drop,{useShim:!1,bubbleTargets:this}),e.drop.set("groups",t),e},destructor:function(){this.dd&&this.dd.destroy(),a.Plugin.Drop&&a.one(this.get(n)).all(this.get(o)).unplug(a.Plugin.Drop),a.Array.each(this._handles,function(e){e.detach()})}},{NAME:"delegate",ATTRS:{container:{value:"body"},nodes:{value:".dd-draggable"},invalid:{value:"input, select, button, a, textarea"},lastNode:{value:s},currentNode:{value:s},dragNode:{value:s},over:{value:!1},target:{value:!1},dragConfig:{value:null},handles:{value:null}}}),a.mix(a.DD.DDM,{_delegates:[],regDelegate:function(e){this._delegates.push(e)},getDelegate:function(t){var s=null;return t=a.one(t),a.Array.each(this._delegates,function(e){t.test(e.get(n))&&(s=e)},this),s}}),a.namespace("DD"),a.DD.Delegate=t},"@VERSION@",{requires:["dd-drag","dd-drop-plugin","event-mouseenter"]});