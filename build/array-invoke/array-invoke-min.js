YUI.add("array-invoke",function(a,r){a.Array.invoke=function(r,n){var i=a.Array(arguments,2,!0),e=a.Lang.isFunction,u=[];return a.Array.each(a.Array(r),function(r,a){r&&e(r[n])&&(u[a]=r[n].apply(r,i))}),u}},"@VERSION@",{requires:["yui-base"]});