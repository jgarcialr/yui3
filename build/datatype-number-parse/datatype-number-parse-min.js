YUI.add("datatype-number-parse",function(a,e){var p=a.Escape.regex,t="\\s*";a.mix(a.namespace("Number"),{_buildParser:a.cached(function(e,r,a,n){var s,u=[];return e&&u.push("^"+t+p(e)+t),r&&u.push(t+p(r)+t+"$"),a&&u.push(p(a)+"(?=\\d)"),s=new RegExp("(?:"+u.join("|")+")","g"),"."===n&&(n=null),function(e){return e=e.replace(s,""),n?e.replace(n,"."):e}}),parse:function(e,r){return e="number"!=typeof(e="string"==typeof(e=r&&"string"==typeof e?this._buildParser(r.prefix,r.suffix,r.thousandsSeparator,r.decimalSeparator)(e):e)&&""!==a.Lang.trim(e)?+e:e)||!isFinite(e)?null:e}}),a.namespace("Parsers").number=a.Number.parse,a.namespace("DataType"),a.DataType.Number=a.Number},"@VERSION@",{requires:["escape"]});