YUI.add("template-micro",function(r,e){var u=r.namespace("Template.Micro");u.options={code:/<%([\s\S]+?)%>/g,escapedOutput:/<%=([\s\S]+?)%>/g,rawOutput:/<%==([\s\S]+?)%>/g,stringEscape:/\\|'|\r|\n|\t|\u2028|\u2029/g,stringReplace:{"\\":"\\\\","'":"\\'","\r":"\\r","\n":"\\n","\t":"\\t","\u2028":"\\u2028","\u2029":"\\u2029"}},u.compile=function(e,n){var t=[];return n=r.merge(u.options,n),e="var $b='', $v=function (v){return v || v === 0 ? v : $b;}, $t='"+e.replace(/\ufffe|\uffff/g,"").replace(n.rawOutput,function(e,n){return"￾"+(t.push("'+\n$v("+n+")+\n'")-1)+"￿"}).replace(n.escapedOutput,function(e,n){return"￾"+(t.push("'+\n$e($v("+n+"))+\n'")-1)+"￿"}).replace(n.code,function(e,n){return"￾"+(t.push("';\n"+n+"\n$t+='")-1)+"￿"}).replace(n.stringEscape,function(e){return n.stringReplace[e]||""}).replace(/\ufffe(\d+)\uffff/g,function(e,n){return t[parseInt(n,10)]}).replace(/\n\$t\+='';\n/g,"\n")+"';\nreturn $t;",n.precompile?"function (Y, $e, data) {\n"+e+"\n}":this.revive(new Function("Y","$e","data",e))},u.precompile=function(e,n){return(n=n||{}).precompile=!0,this.compile(e,n)},u.render=function(e,n,t){return this.compile(e,t)(n)},u.revive=function(n){return function(e){return n.call(e=e||{},r,r.Escape.html,e)}}},"@VERSION@",{requires:["escape"]});