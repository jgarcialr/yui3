YUI.add("node-event-delegate",function(n,e){n.Node.prototype.delegate=function(e){var t=n.Array(arguments,0,!0),a=n.Lang.isObject(e)&&!n.Lang.isArray(e)?1:2;return t.splice(a,0,this._node),n.delegate.apply(n,t)}},"@VERSION@",{requires:["node-base","event-delegate"]});