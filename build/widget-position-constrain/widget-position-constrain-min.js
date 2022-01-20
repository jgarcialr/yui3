YUI.add("widget-position-constrain",function(t,n){var l,e="constrain",i=t.Node,o="region";function s(t){}s.ATTRS={constrain:{value:null,setter:"_setConstrain"},preventOverlap:{value:!1}},l=s._PREVENT_OVERLAP={x:{tltr:1,blbr:1,brbl:1,trtl:1},y:{trbr:1,tlbl:1,bltl:1,brtr:1}},s.prototype={initializer:function(){this._posNode||t.error("WidgetPosition needs to be added to the Widget, before WidgetPositionConstrain is added"),t.after(this._bindUIPosConstrained,this,"bindUI")},getConstrainedXY:function(t,n){n=n||this.get(e);var i=this._getRegion(!0===n?null:n),n=this._posNode.get(o);return[this._constrain(t[0],"x",n,i),this._constrain(t[1],"y",n,i)]},constrain:function(t,n){var n=n||this.get(e);n&&(t=t||this.get("xy"),(n=this.getConstrainedXY(t,n))[0]===t[0]&&n[1]===t[1]||this.set("xy",n,{constrained:!0}))},_setConstrain:function(t){return!0===t?t:i.one(t)},_constrain:function(t,n,i,e){var o,s;return e&&(this.get("preventOverlap")&&(t=this._preventOverlap(t,n,i,e)),s=(o="x"==n)?e.width:e.height,n=o?i.width:i.height,i=o?e.left:e.top,e=o?e.right-n:e.bottom-n,(t<i||e<t)&&(!(n<s)||t<i?t=i:e<t&&(t=e))),t},_preventOverlap:function(t,n,i,e){var o,s,r,a,h,g=this.get("align"),d="x"===n;return g&&g.points&&l[n][g.points.join("")]&&((g=this._getRegion(g.node))&&(o=d?i.width:i.height,s=d?g.left:g.top,r=d?g.right:g.bottom,a=d?g.left-e.left:g.top-e.top,h=d?e.right-g.right:e.bottom-g.bottom),s<t?h<o&&o<a&&(t=s-o):a<o&&o<h&&(t=r)),t},_bindUIPosConstrained:function(){this.after("constrainChange",this._afterConstrainChange),this._enableConstraints(this.get(e))},_afterConstrainChange:function(t){this._enableConstraints(t.newVal)},_enableConstraints:function(t){t?(this.constrain(),this._cxyHandle=this._cxyHandle||this.on("constrain|xyChange",this._constrainOnXYChange)):this._cxyHandle&&(this._cxyHandle.detach(),this._cxyHandle=null)},_constrainOnXYChange:function(t){t.constrained||(t.newVal=this.getConstrainedXY(t.newVal))},_getRegion:function(t){var n;return t?(t=i.one(t))&&(n=t.get(o)):n=this._posNode.get("viewportRegion"),n}},t.WidgetPositionConstrain=s},"@VERSION@",{requires:["widget-position"]});