YUI.add("datasource-xmlschema",function(s,a){var e=function(){e.superclass.constructor.apply(this,arguments)};s.mix(e,{NS:"schema",NAME:"dataSourceXMLSchema",ATTRS:{schema:{}}}),s.extend(e,s.Plugin.Base,{initializer:function(a){this.doBefore("_defDataFn",this._beforeDefDataFn)},_beforeDefDataFn:function(a){var e=this.get("schema"),t=a.details[0],a=s.XML.parse(a.data.responseText)||a.data;return t.response=s.DataSchema.XML.apply.call(this,e,a)||{meta:{},results:a},this.get("host").fire("response",t),new s.Do.Halt("DataSourceXMLSchema plugin halted _defDataFn")}}),s.namespace("Plugin").DataSourceXMLSchema=e},"@VERSION@",{requires:["datasource-local","plugin","datatype-xml","dataschema-xml"]});