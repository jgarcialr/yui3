YUI.add("datatable-foot",function(a,t){a.namespace("DataTable").FooterView=a.Base.create("tableFooter",a.View,[],{TFOOT_TEMPLATE:'<tfoot class="{className}"/>',getClassName:function(){var t=this.host,e=t&&t.constructor.NAME||this.constructor.NAME;return t&&t.getClassName?t.getClassName.apply(t,arguments):a.ClassNameManager.getClassName.apply(a.ClassNameManager,[e].concat(a.Array(arguments,0,!0)))},render:function(){var t=this.tfootNode||(this.tfootNode=this._createTFootNode());return this.host&&this.host._theadNode&&this.host._theadNode.insert(t,"after"),this},_createTFootNode:function(){return a.Node.create(a.Lang.sub(this.TFOOT_TEMPLATE,{className:this.getClassName("foot")}))},initializer:function(t){this.host=t&&t.host}})},"@VERSION@",{requires:["datatable-core","view"]});