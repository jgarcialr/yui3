YUI.add("datatable-core",function(_,t){var n=_.Attribute.INVALID_VALUE,e=_.Lang,a=e.isFunction,g=e.isObject,m=e.isArray,f=e.isString,s=e.isNumber,r=_.Array,i=_.Object.keys,e=_.namespace("DataTable").Core=function(){};e.ATTRS={columns:{validator:m,setter:"_setColumns",getter:"_getColumns"},recordType:{getter:"_getRecordType",setter:"_setRecordType"},data:{valueFn:"_initData",setter:"_setData",lazyAdd:!1},recordset:{setter:"_setRecordset",getter:"_getRecordset",lazyAdd:!1},columnset:{setter:"_setColumnset",getter:"_getColumnset",lazyAdd:!1}},_.mix(e.prototype,{getColumn:function(t){var e,n,a,i=g(t)&&!m(t)?t&&t._node?this.body.getColumn(t):t:this.get("columns."+t);if(i)return i;if(i=this.get("columns"),s(t)||m(t)){for(a=i,e=0,n=(t=r(t)).length-1;a&&e<n;++e)a=a[t[e]]&&a[t[e]].children;return a&&a[t[e]]||null}return null},getRecord:function(t){var e=this.data.getById(t)||this.data.getByClientId(t);return e||!(e=s(t)?this.data.item(t):e)&&this.view&&this.view.getRecord&&(e=this.view.getRecord.apply(this.view,arguments)),e||null},_allowAdHocAttrs:!0,_afterColumnsChange:function(t){this._setColumnMap(t.newVal)},_afterDataChange:function(t){var e=t.newVal;this.data=t.newVal,!this.get("columns")&&e.size()&&this._initColumns()},_afterRecordTypeChange:function(t){var e=this.data.toJSON();this.data.model=t.newVal,this.data.reset(e),!this.get("columns")&&e&&(e.length?this._initColumns():this.set("columns",i(t.newVal.ATTRS)))},_createRecordClass:function(t){var e,n,a;if(m(t))for(e={},n=0,a=t.length;n<a;++n)e[t[n]]={};else g(t)&&(e=t);return _.Base.create("record",_.Model,[],null,{ATTRS:e})},destructor:function(){new _.EventHandle(_.Object.values(this._eventHandles)).detach()},_getColumns:function(t,e){return 8<e.length?this._columnMap:t},_getColumnset:function(t,e){return this.get(e.replace(/^columnset/,"columns"))},_getRecordType:function(t){return t||this.data&&this.data.model},_initColumns:function(){var t,e=this.get("columns")||[];!e.length&&this.data.size()&&((t=this.data.item(0)).toJSON&&(t=t.toJSON()),this.set("columns",i(t))),this._setColumnMap(e)},_initCoreEvents:function(){this._eventHandles.coreAttrChanges=this.after({columnsChange:_.bind("_afterColumnsChange",this),recordTypeChange:_.bind("_afterRecordTypeChange",this),dataChange:_.bind("_afterDataChange",this)})},_initData:function(){var t=this.get("recordType"),e=new _.ModelList;return t&&(e.model=t),e},_initDataProperty:function(t){var e;this.data||(e=this.get("recordType"),t&&t.each&&t.toJSON?this.data=t:this.data=new _.ModelList,e&&(this.data.model=e),this.data.addTarget(this))},initializer:function(t){var e=t.data,n=t.columns;this._initDataProperty(e),n||((t=(t.recordType||t.data===this.data)&&this.get("recordType"))?n=i(t.ATTRS):m(e)&&e.length&&(n=i(e[0])),n&&this.set("columns",n)),this._initColumns(),this._eventHandles={},this._initCoreEvents()},_setColumnMap:function(t){var s={};!function r(t){for(var e,n,a=0,i=t.length;a<i;++a)(n=(e=t[a]).key)&&!s[n]&&(s[n]=e),(s[e._id]=e).children&&r(e.children)}(t),this._columnMap=s},_setColumns:function(t){var l={},d=[],c=[],u=_.Array.indexOf;return t&&function h(t,e){for(var n,a,i=[],s=0,r=t.length;s<r;++s)i[s]=n=f(t[s])?{key:t[s]}:function o(t){var e,n,a,i={};for(e in d.push(t),c.push(i),t)t.hasOwnProperty(e)&&(n=t[e],m(n)?i[e]=n.slice():g(n,!0)?(a=u(d,n),i[e]=-1===a?o(n):c[a]):i[e]=t[e]);return i}(t[s]),a=_.stamp(n),n.id||(n.id=a),n.field&&(n.name=n.field),e?n._parent=e:delete n._parent,n._id=(a=(a=n.name||n.key||n.id).replace(/\s+/,"-"),l[a]?a+=l[a]++:l[a]=1,a),m(n.children)&&(n.children=h(n.children,n));return i}(t)},_setColumnset:function(t){return this.set("columns",t),m(t)?t:n},_setData:function(t){return m(t=null===t?[]:t)?(this._initDataProperty(),this.data.reset(t,{silent:!0}),t=this.data):t&&t.each&&t.toJSON||(t=n),t},_setRecordset:function(t){var e;return t&&_.Recordset&&t instanceof _.Recordset&&(e=[],t.each(function(t){e.push(t.get("data"))}),t=e),this.set("data",t),t},_setRecordType:function(t){var e;return a(t)&&t.prototype.toJSON&&t.prototype.setAttrs?e=t:g(t)&&(e=this._createRecordClass(t)),e||n}})},"@VERSION@",{requires:["escape","model-list","node-event-delegate"]});