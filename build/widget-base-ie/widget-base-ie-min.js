YUI.add("widget-base-ie",function(e,t){var o="offsetHeight",a=e.UA.ie,g=a<7,d=e.Widget.getClassName("tmp","forcesize"),n=e.Widget.getClassName("content","expanded");e.Widget.prototype._uiSizeCB=function(e){var t=this.get("boundingBox"),s=this.get("contentBox"),i=this._bbs;i===undefined&&(this._bbs=i=!(a&&a<8&&"BackCompat"!=t.get("ownerDocument").get("compatMode"))),i?s.toggleClass(n,e):e?(g&&t.addClass(d),s.set(o,t.get(o)),g&&t.removeClass(d)):s.setStyle("height","")}},"@VERSION@",{requires:["widget-base"]});