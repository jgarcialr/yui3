YUI.add("createlink-base",function(o,e){var r={STRINGS:{PROMPT:"Please enter the URL for the link to point to:",DEFAULT:"http://"}};o.namespace("Plugin"),o.Plugin.CreateLinkBase=r,o.mix(o.Plugin.ExecCommand.COMMANDS,{createlink:function(e){var t,n,a=this.get("host").getInstance(),i=prompt(r.STRINGS.PROMPT,r.STRINGS.DEFAULT);return i&&(n=a.config.doc.createElement("div"),i=i.replace(/"/g,"").replace(/'/g,""),i=a.config.doc.createTextNode(i),n.appendChild(i),i=n.innerHTML,this.get("host")._execCommand(e,i),e=(n=new a.EditorSelection).getSelected(),!n.isCollapsed&&e.size()?((t=e.item(0).one("a"))&&e.item(0).replace(t),o.UA.gecko&&t.get("parentNode").test("span")&&t.get("parentNode").one("br.yui-cursor")&&t.get("parentNode").insert(t,"before")):this.get("host").execCommand("inserthtml",'<a href="'+i+'">'+i+"</a>")),t}})},"@VERSION@",{requires:["editor-base"]});