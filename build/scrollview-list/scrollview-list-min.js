YUI.add("scrollview-list",function(s,t){var i=s.ClassNameManager.getClassName,a="scrollview",e=i(a,"list"),l=i(a,"item");function n(){n.superclass.constructor.apply(this,arguments)}n.NAME="pluginList",n.NS="list",n.ATTRS={isAttached:{value:!1,validator:s.Lang.isBoolean}},s.namespace("Plugin").ScrollViewList=s.extend(n,s.Plugin.Base,{initializer:function(){this._host=this.get("host"),this.afterHostEvent("render",this._addClassesToList)},_addClassesToList:function(){var s,t;this.get("isAttached")||(t=this._host.get("contentBox")).hasChildNodes()&&(s=t.all("> ul"),t=t.all("> ul > li"),s.each(function(s){s.addClass(e)}),t.each(function(s){s.addClass(l)}),this.set("isAttached",!0),this._host.syncUI())}})},"@VERSION@",{requires:["plugin","classnamemanager"],skinnable:!0});