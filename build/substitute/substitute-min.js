YUI.add("substitute",function(o,t){var f=o.Lang,l=/(~-(\d+)-~)/g,c=/\{LBRACE\}/g,O=/\{RBRACE\}/g,n=function(t,n,e,r){for(var s,i,u,g,p,a,d=[],b=t.length;!((s=t.lastIndexOf("{",b))<0)&&!((i=t.indexOf("}",s))<=s+1);)g=null,-1<(u=(a=p=t.substring(s+1,i)).indexOf(" "))&&(g=a.substring(u+1),a=a.substring(0,u)),u=n[a],e&&(u=e(a,u,g)),f.isObject(u)?u=o.dump?f.isArray(u)?o.dump(u,parseInt(g,10)):(-1<(a=(g=g||"").indexOf("dump"))&&(g=g.substring(4)),u.toString===Object.prototype.toString||-1<a?o.dump(u,parseInt(g,10)):u.toString()):u.toString():f.isUndefined(u)&&(u="~-"+d.length+"-~",d.push(p)),t=t.substring(0,s)+u+t.substring(i+1),r||(b=s-1);return t.replace(l,function(t,n,e){return"{"+d[parseInt(e,10)]+"}"}).replace(c,"{").replace(O,"}")};o.substitute=n,f.substitute=n},"@VERSION@",{requires:["yui-base"],optional:["dump"]});