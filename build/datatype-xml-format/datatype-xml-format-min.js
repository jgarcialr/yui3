YUI.add("datatype-xml-format",function(e,a){var t=e.Lang;e.mix(e.namespace("XML"),{format:function(e){try{if(!t.isUndefined(e.getXml))return e.getXml();if(!t.isUndefined(XMLSerializer))return(new XMLSerializer).serializeToString(e)}catch(a){return e&&e.xml?e.xml:t.isValue(e)&&e.toString?e.toString():""}}}),e.namespace("DataType"),e.DataType.XML=e.XML},"@VERSION@");