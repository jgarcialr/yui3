YUI.add("io-xdr",function(s,e){var r=s.publish("io:xdrReady",{fireOnce:!0}),n={},d={},a=s.config.doc,o=s.config.win,c=o&&o.XDomainRequest;function u(e,t,r){return"flash"===t&&(e.c.responseText=decodeURI(e.c.responseText)),"xml"===r&&(e.c.responseXML=s.DataType.XML.parse(e.c.responseText)),e}s.mix(s.IO.prototype,{_transport:{},_ieEvt:function(e,t){var r=this,a=e.id,i="timeout";e.c.onprogress=function(){d[a]=3},e.c.onload=function(){d[a]=4,r.xdrResponse("success",e,t)},e.c.onerror=function(){d[a]=4,r.xdrResponse("failure",e,t)},e.c.ontimeout=function(){d[a]=4,r.xdrResponse(i,e,t)},e.c[i]=t[i]||0},xdr:function(t,r,a){var i=this;return"flash"===a.xdr.use?(n[r.id]=a,o.setTimeout(function(){try{r.c.send(t,{id:r.id,uid:r.uid,method:a.method,data:a.data,headers:a.headers})}catch(e){i.xdrResponse("transport error",r,a),delete n[r.id]}},s.io.xdr.delay)):c?(i._ieEvt(r,a),r.c.open(a.method||"GET",t),setTimeout(function(){r.c.send(a.data)},0)):r.c.send(t,r,a),{id:r.id,abort:function(){return!!r.c&&r.c.abort(r.id,a)},isInProgress:function(){return!!r.c&&(e=r.id,c?4!==d[e.id]:e.c.isInProgress(e.id));var e},io:i}},xdrResponse:function(e,t,r){r=n[t.id]||r;var a=this,i=c?d:n,s=r.xdr.use,o=r.xdr.dataType;switch(e){case"start":a.start(t,r);break;case"success":a.success(u(t,s,o),r),delete i[t.id];break;case"timeout":case"abort":case"transport error":t.c={status:0,statusText:e};case"failure":a.failure(u(t,s,o),r),delete i[t.id]}},_xdrReady:function(e,t){s.fire(r,e,t)},transport:function(e){var t,r;"flash"===e.id&&(t=s.UA.ie?e.src+"?d="+(new Date).valueOf().toString():e.src,r=s.id,e=e.uid,r='<object id="io_swf" type="application/x-shockwave-flash" data="'+t+'" width="0" height="0"><param name="movie" value="'+t+'"><param name="FlashVars" value="yid='+r+"&uid="+e+'"><param name="allowScriptAccess" value="always"></object>',e=a.createElement("div"),a.body.appendChild(e),e.innerHTML=r,s.IO.transports.flash=function(){return a.getElementById("io_swf")})}}),s.io.xdrReady=function(e,t){var r=s.io._map[t];s.io.xdr.delay=0,r._xdrReady.apply(r,[e,t])},s.io.xdrResponse=function(e,t,r){var a=s.io._map[t.uid];a.xdrResponse.apply(a,[e,t,r])},s.io.transport=function(e){var t=s.io._map["io:0"]||new s.IO;e.uid=t._uid,t.transport.apply(t,[e])},s.io.xdr={delay:100}},"@VERSION@",{requires:["io-base","datatype-xml-parse"]});