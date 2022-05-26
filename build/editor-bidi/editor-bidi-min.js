YUI.add("editor-bidi",function(d,e){var u=function(){u.superclass.constructor.apply(this,arguments)},E="host",h="dir",n="bidiContextChange",t="style";d.extend(u,d.Base,{lastDirection:null,firstEvent:null,_checkForChange:function(){var e=this.get(E),t=e.getInstance(),i=new t.EditorSelection;i.isCollapsed?(i=u.blockParent(i.focusNode,!1,t.EditorSelection.ROOT))&&(t=i.getStyle("direction"))!==this.lastDirection&&(e.fire(n,{changedTo:t}),this.lastDirection=t):(e.fire(n,{changedTo:"select"}),this.lastDirection=null)},_afterNodeChange:function(e){(this.firstEvent||u.EVENTS[e.changedType])&&(this._checkForChange(),this.firstEvent=!1)},_afterMouseUp:function(){this._checkForChange(),this.firstEvent=!1},initializer:function(){var e=this.get(E);this.firstEvent=!0,e.after("nodeChange",d.bind(this._afterNodeChange,this)),e.after("dom:mouseup",d.bind(this._afterMouseUp,this))}},{EVENTS:{"backspace-up":!0,"pageup-up":!0,"pagedown-down":!0,"end-up":!0,"home-up":!0,"left-up":!0,"up-up":!0,"right-up":!0,"down-up":!0,"delete-up":!0},BLOCKS:d.EditorSelection.BLOCKS,DIV_WRAPPER:"<DIV></DIV>",blockParent:function(e,t,i){var n,r;return i=i||d.EditorSelection.ROOT,(e=e||i).test(u.BLOCKS)||(e=e.ancestor(u.BLOCKS)),t&&e.compareTo(i)&&(n=d.Node.create(u.DIV_WRAPPER),e.get("children").each(function(e,t){0===t?r=e:n.append(e)}),r.replace(n),n.prepend(r),e=n),e},_NODE_SELECTED:"bidiSelected",addParents:function(e,t){var i,n,r;for(tester=function(e){if(!e.getData(u._NODE_SELECTED))return!(r=!1)},t=t||d.EditorSelection.ROOT,i=0;i<e.length;i+=1)e[i].setData(u._NODE_SELECTED,!0);for(i=0;i<e.length;i+=1)n=e[i].get("parentNode"),t.compareTo(n)||n.getData(u._NODE_SELECTED)||(r=!0,n.get("children").some(tester),r&&(e.push(n),n.setData(u._NODE_SELECTED,!0)));for(i=0;i<e.length;i+=1)e[i].clearData(u._NODE_SELECTED);return e},NAME:"editorBidi",NS:"editorBidi",ATTRS:{host:{value:!1}},RE_TEXT_ALIGN:/text-align:\s*\w*\s*;/,removeTextAlign:function(e){return e&&(e.getAttribute(t).match(u.RE_TEXT_ALIGN)&&e.setAttribute(t,e.getAttribute(t).replace(u.RE_TEXT_ALIGN,"")),e.hasAttribute("align")&&e.removeAttribute("align")),e}}),d.namespace("Plugin"),d.Plugin.EditorBidi=u,d.Plugin.ExecCommand.COMMANDS.bidi=function(e,i){var t,n,r,o,a=this.getInstance(),c=new a.EditorSelection,s=this.get(E).get(E).editorBidi,l=a.EditorSelection.ROOT;if(s)return a.EditorSelection.filterBlocks(),t=c.isCollapsed?(t=(t=u.blockParent(c.anchorNode,!1,l))||l.one(a.EditorSelection.BLOCKS),t=u.removeTextAlign(t),i||(o=t.getAttribute(h),i=o&&"ltr"!==o?"ltr":"rtl"),t.setAttribute(h,i),d.UA.ie&&1===(n=t.all("br.yui-cursor")).size()&&1===t.get("childNodes").size()&&n.remove(),t):(n=c.getSelected(),r=[],n.each(function(e){r.push(u.blockParent(e,!1,l))}),(r=a.all(u.addParents(r,l))).each(function(e){var t=i;e=u.removeTextAlign(e),t=t||((o=e.getAttribute(h))&&"ltr"!==o?"ltr":"rtl"),e.setAttribute(h,t)}),r),s._checkForChange(),t;d.error("bidi execCommand is not available without the EditorBiDi plugin.")}},"@VERSION@",{requires:["editor-base"]});