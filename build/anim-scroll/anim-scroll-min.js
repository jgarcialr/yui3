YUI.add("anim-scroll",function(e,o){var c=Number;e.Anim.behaviors.scroll={set:function(e,o,r,l,n,s,t){e=e._node,t=[t(n,c(r[0]),c(l[0])-c(r[0]),s),t(n,c(r[1]),c(l[1])-c(r[1]),s)];t[0]&&e.set("scrollLeft",t[0]),t[1]&&e.set("scrollTop",t[1])},get:function(e){e=e._node;return[e.get("scrollLeft"),e.get("scrollTop")]}}},"@VERSION@",{requires:["anim-base"]});