YUI.add("arraylist",function(i,t){var n,u=i.Array,h=u.each;function e(t){t!==undefined?this._items=i.Lang.isArray(t)?t:u(t):this._items=this._items||[]}(n={item:function(t){return this._items[t]},each:function(n,e){return h(this._items,function(t,i){t=this.item(i),n.call(e||t,t,i,this)},this),this},some:function(n,e){return u.some(this._items,function(t,i){return t=this.item(i),n.call(e||t,t,i,this)},this)},indexOf:function(t){return u.indexOf(this._items,t)},size:function(){return this._items.length},isEmpty:function(){return!this.size()},toJSON:function(){return this._items}})._item=n.item,i.mix(e.prototype,n),i.mix(e,{addMethod:function(t,i){i=u(i),h(i,function(r){t[r]=function(){var e=u(arguments,0,!0),s=[];return h(this._items,function(t,i){var n=(t=this._item(i))[r].apply(t,e);n!==undefined&&n!==t&&(s[i]=n)},this),s.length?s:this}})}}),i.ArrayList=e},"@VERSION@",{requires:["yui-base"]});