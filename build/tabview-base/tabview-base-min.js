YUI.add("tabview-base",function(b,e){var a=b.ClassNameManager.getClassName,t="tabview",s="tab",i="panel",n="selected",l={},d=function(){this.init.apply(this,arguments)};d.NAME="tabviewBase",d._classNames={tabview:a(t),tabviewPanel:a(t,i),tabviewList:a(t,"list"),tab:a(s),tabLabel:a(s,"label"),tabPanel:a(s,i),selectedTab:a(s,n),selectedPanel:a(s,i,n)},d._queries={tabview:"."+d._classNames.tabview,tabviewList:"> ul",tab:"> ul > li",tabLabel:"> ul > li > a",tabviewPanel:"> div",tabPanel:"> div > div",selectedTab:"> ul > ."+d._classNames.selectedTab,selectedPanel:"> div ."+d._classNames.selectedPanel},b.mix(d.prototype,{init:function(e){this._node=(e=e||l).host||b.one(e.node),this.refresh()},initClassNames:function(t){var s=b.TabviewBase._classNames;b.Object.each(b.TabviewBase._queries,function(e,a){s[a]&&(e=this.all(e),(e=t!==undefined?e.item(t):e)&&e.addClass(s[a]))},this._node),this._node.addClass(s.tabview)},_select:function(e){var a=b.TabviewBase._classNames,t=b.TabviewBase._queries,s=this._node,i=s.one(t.selectedTab),n=s.one(t.selectedPanel),l=s.all(t.tab).item(e),e=s.all(t.tabPanel).item(e);i&&i.removeClass(a.selectedTab),n&&n.removeClass(a.selectedPanel),l&&l.addClass(a.selectedTab),e&&e.addClass(a.selectedPanel)},initState:function(){var e=b.TabviewBase._queries,a=this._node,t=a.one(e.selectedTab),t=t?a.all(e.tab).indexOf(t):0;this._select(t)},_scrubTextNodes:function(){this._node.one(b.TabviewBase._queries.tabviewList).get("childNodes").each(function(e){3===e.get("nodeType")&&e.remove()})},refresh:function(){this._scrubTextNodes(),this.initClassNames(),this.initState(),this.initEvents()},tabEventName:"click",initEvents:function(){this._node.delegate(this.tabEventName,this.onTabEvent,b.TabviewBase._queries.tab,this)},onTabEvent:function(e){e.preventDefault(),this._select(this._node.all(b.TabviewBase._queries.tab).indexOf(e.currentTarget))},destroy:function(){this._node.detach(this.tabEventName)}}),b.TabviewBase=d},"@VERSION@",{requires:["node-event-delegate","classnamemanager"]});