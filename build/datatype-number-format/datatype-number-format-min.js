YUI.add("datatype-number-format",function(a,e){var p=a.Lang;a.mix(a.namespace("Number"),{format:function(a,e){if(p.isNumber(a)){var r,t,i,n,u=a<0,f=a+"",m=(e=e||{}).decimalPlaces,s=e.decimalSeparator||".",o=e.thousandsSeparator;if(p.isNumber(m)&&0<=m&&m<=20&&(f=a.toFixed(m)),"."!==s&&(f=f.replace(".",s)),o){for(r=-1<(r=f.lastIndexOf(s))?r:f.length,t=f.substring(r),i=0,n=r;0<n;n--)i%3==0&&n!==r&&(!u||1<n)&&(t=o+t),t=f.charAt(n-1)+t,i++;f=t}return f=e.prefix?e.prefix+f:f,f=e.suffix?f+e.suffix:f}return p.isValue(a)&&a.toString?a.toString():""}}),a.namespace("DataType"),a.DataType.Number=a.Number},"@VERSION@");