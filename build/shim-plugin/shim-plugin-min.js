YUI.add("shim-plugin",function(t,i){function s(t){this.init(t)}s.TEMPLATE='<iframe class="'+(s.CLASS_NAME="yui-node-shim")+'" frameborder="0" title="Node Stacking Shim"src="javascript:false" tabindex="-1" role="presentation"style="position:absolute; z-index:-1;"></iframe>',s.prototype={init:function(t){this._host=t.host,this.initEvents(),this.insert(),this.sync()},initEvents:function(){this._resizeHandle=this._host.on("resize",this.sync,this)},getShim:function(){return this._shim||(this._shim=t.Node.create(s.TEMPLATE,this._host.get("ownerDocument")))},insert:function(){var t=this._host;this._shim=t.insertBefore(this.getShim(),t.get("firstChild"))},sync:function(){var t=this._shim,i=this._host;t&&t.setAttrs({width:i.getStyle("width"),height:i.getStyle("height")})},destroy:function(){var t=this._shim;t&&t.remove(!0),this._resizeHandle.detach()}},s.NAME="Shim",s.NS="shim",t.namespace("Plugin"),t.Plugin.Shim=s},"@VERSION@",{requires:["node-style","node-pluginhost"]});