YUI.add("datatable-datasource",function(a,t){function e(){e.superclass.constructor.apply(this,arguments)}a.mix(e,{NS:"datasource",NAME:"dataTableDataSource",ATTRS:{datasource:{setter:"_setDataSource"},initialRequest:{setter:"_setInitialRequest"}}}),a.extend(e,a.Plugin.Base,{_setDataSource:function(t){return t||new a.DataSource.Local(t)},_setInitialRequest:function(){},initializer:function(t){a.Lang.isUndefined(t.initialRequest)||this.load({request:t.initialRequest})},load:function(t){(t=t||{}).request=t.request||this.get("initialRequest"),t.callback=t.callback||{success:a.bind(this.onDataReturnInitializeTable,this),failure:a.bind(this.onDataReturnInitializeTable,this),argument:this.get("host").get("state")};var e=t.datasource||this.get("datasource");e&&e.sendRequest(t)},onDataReturnInitializeTable:function(t){t=t.response&&t.response.results||[];this.get("host").set("data",t)}}),a.namespace("Plugin").DataTableDataSource=e},"@VERSION@",{requires:["datatable-base","plugin","datasource-local"]});