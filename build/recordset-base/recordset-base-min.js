YUI.add("recordset-base",function(r,e){var t,s,i=r.Base.create("record",r.Base,[],{_setId:function(){return r.guid()},initializer:function(){},destructor:function(){},getValue:function(e){return e===undefined?this.get("data"):this.get("data")[e]}},{ATTRS:{id:{valueFn:"_setId"},data:{value:null}}});r.Record=i,t=r.ArrayList,s=r.Lang,i=r.Base.create("recordset",r.Base,[],{initializer:function(){this._items||(this._items=[]),this.publish({add:{defaultFn:this._defAddFn},remove:{defaultFn:this._defRemoveFn},empty:{defaultFn:this._defEmptyFn},update:{defaultFn:this._defUpdateFn}}),this._buildHashTable(this.get("key")),this.after(["recordsChange","add","remove","update","empty"],this._updateHash)},getRecord:function(e){return s.isString(e)?this.get("table")[e]:s.isNumber(e)?this._items[e]:null},getRecordByIndex:function(e){return this._items[e]},getRecordsByIndex:function(e,t){var i=0,n=[];for(t=s.isNumber(t)&&0<t?t:1;i<t;i++)n.push(this._items[e+i]);return n},getLength:function(){return this.size()},getValuesByKey:function(e){for(var t=0,i=this._items.length,n=[];t<i;t++)n.push(this._items[t].getValue(e));return n},add:function(e,t){var i=[],n=0,t=s.isNumber(t)&&-1<t?t:this._items.length;if(s.isArray(e))for(;n<e.length;n++)i[n]=this._changeToRecord(e[n]);else s.isObject(e)&&(i[0]=this._changeToRecord(e));return this.fire("add",{added:i,index:t}),this},remove:function(e,t){var i;return e=-1<e?e:this._items.length-1,i=this._items.slice(e,e+(t=0<t?t:1)),this.fire("remove",{removed:i,range:t,index:e}),this},empty:function(){return this.fire("empty",{}),this},update:function(e,t){for(var i=0,n=s.isArray(e)?e:[e],e=this._items.slice(t,t+n.length);i<n.length;i++)n[i]=this._changeToRecord(n[i]);return this.fire("update",{updated:n,overwritten:e,index:t}),this},_defAddFn:function(e){this._items.splice.apply(this._items,[e.index,0].concat(e.added))},_defRemoveFn:function(e){this._items.splice(e.index,e.range||1)},_defUpdateFn:function(e){for(var t=0;t<e.updated.length;t++)this._items[e.index+t]=this._changeToRecord(e.updated[t])},_defEmptyFn:function(e){this._items=[]},_updateHash:function(e){var t="_hash",i=e.type.replace(/.*:/,"");(e=this[t+=i.charAt(0).toUpperCase()+i.slice(1)]&&this[t](this.get("table"),this.get("key"),e))&&this.set("table",e)},_hashRecordsChange:function(e,t,i){return this._buildHashTable(t)},_buildHashTable:function(e){return this._hashAdd({},e,{added:this._items})},_hashAdd:function(e,t,i){for(var n=i.added,r=0,s=i.added.length;r<s;++r)e[n[r].get(t)]=n[r];return e},_hashRemove:function(e,t,i){for(var n=i.removed.length-1;0<=n;--n)delete e[i.removed[n].get(t)];return e},_hashUpdate:function(e,t,i){return i.overwritten&&i.overwritten.length&&(e=this._hashRemove(e,t,{removed:i.overwritten})),this._hashAdd(e,t,{added:i.updated})},_hashEmpty:function(){return{}},_initHashTable:function(){return this._hashAdd({},this.get("key"),{added:this._items||[]})},_changeToRecord:function(e){return e instanceof r.Record?e:new r.Record({data:e})},_setRecords:function(e){if(!r.Lang.isArray(e))return r.Attribute.INVALID_VALUE;for(var t=[],i=0,n=e.length;i<n;++i)t[i]=this._changeToRecord(e[i]);return this._items=t}},{ATTRS:{records:{lazyAdd:!1,getter:function(){return r.Array(this._items)},setter:"_setRecords"},table:{valueFn:"_initHashTable"},key:{value:"id",readOnly:!0}}}),r.augment(i,t),r.Recordset=i},"@VERSION@",{requires:["base","arraylist"]});