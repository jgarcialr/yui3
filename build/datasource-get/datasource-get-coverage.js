
var __cov__SyEdoxVfi3evTLAaD15Dg = (Function('return this'))();
if (!__cov__SyEdoxVfi3evTLAaD15Dg.__coverage__) { __cov__SyEdoxVfi3evTLAaD15Dg.__coverage__ = {}; }
__cov__SyEdoxVfi3evTLAaD15Dg = __cov__SyEdoxVfi3evTLAaD15Dg.__coverage__;
if (!(__cov__SyEdoxVfi3evTLAaD15Dg['build/datasource-get/datasource-get.js'])) {
   __cov__SyEdoxVfi3evTLAaD15Dg['build/datasource-get/datasource-get.js'] = {"path":"build/datasource-get/datasource-get.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":45}}},"2":{"name":"(anonymous_2)","line":16,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":23}}},"3":{"name":"(anonymous_3)","line":41,"loc":{"start":{"line":41,"column":19},"end":{"line":41,"column":31}}},"4":{"name":"(anonymous_4)","line":61,"loc":{"start":{"line":61,"column":45},"end":{"line":61,"column":64}}},"5":{"name":"(anonymous_5)","line":84,"loc":{"start":{"line":84,"column":23},"end":{"line":84,"column":36}}},"6":{"name":"(anonymous_6)","line":93,"loc":{"start":{"line":93,"column":23},"end":{"line":93,"column":35}}},"7":{"name":"(anonymous_7)","line":116,"loc":{"start":{"line":116,"column":23},"end":{"line":116,"column":39}}},"8":{"name":"(anonymous_8)","line":199,"loc":{"start":{"line":199,"column":19},"end":{"line":199,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":209,"column":59}},"2":{"start":{"line":16,"column":0},"end":{"line":18,"column":2}},"3":{"start":{"line":17,"column":4},"end":{"line":17,"column":56}},"4":{"start":{"line":21,"column":0},"end":{"line":204,"column":3}},"5":{"start":{"line":42,"column":8},"end":{"line":47,"column":24}},"6":{"start":{"line":57,"column":8},"end":{"line":57,"column":26}},"7":{"start":{"line":61,"column":8},"end":{"line":75,"column":10}},"8":{"start":{"line":62,"column":12},"end":{"line":62,"column":54}},"9":{"start":{"line":63,"column":12},"end":{"line":63,"column":58}},"10":{"start":{"line":65,"column":12},"end":{"line":66,"column":46}},"11":{"start":{"line":68,"column":12},"end":{"line":73,"column":13}},"12":{"start":{"line":69,"column":16},"end":{"line":69,"column":40}},"13":{"start":{"line":71,"column":16},"end":{"line":71,"column":43}},"14":{"start":{"line":78,"column":8},"end":{"line":78,"column":62}},"15":{"start":{"line":81,"column":8},"end":{"line":102,"column":11}},"16":{"start":{"line":85,"column":16},"end":{"line":85,"column":58}},"17":{"start":{"line":86,"column":16},"end":{"line":86,"column":62}},"18":{"start":{"line":88,"column":16},"end":{"line":88,"column":79}},"19":{"start":{"line":91,"column":16},"end":{"line":91,"column":43}},"20":{"start":{"line":94,"column":16},"end":{"line":94,"column":58}},"21":{"start":{"line":95,"column":16},"end":{"line":95,"column":62}},"22":{"start":{"line":97,"column":16},"end":{"line":97,"column":79}},"23":{"start":{"line":100,"column":16},"end":{"line":100,"column":43}},"24":{"start":{"line":104,"column":8},"end":{"line":104,"column":21}},"25":{"start":{"line":117,"column":8},"end":{"line":118,"column":56}},"26":{"start":{"line":200,"column":16},"end":{"line":200,"column":68}},"27":{"start":{"line":206,"column":0},"end":{"line":206,"column":42}}},"branchMap":{"1":{"line":65,"type":"binary-expr","locations":[{"start":{"line":65,"column":26},"end":{"line":65,"column":74}},{"start":{"line":66,"column":26},"end":{"line":66,"column":45}}]},"2":{"line":68,"type":"if","locations":[{"start":{"line":68,"column":12},"end":{"line":68,"column":12}},{"start":{"line":68,"column":12},"end":{"line":68,"column":12}}]},"3":{"line":88,"type":"binary-expr","locations":[{"start":{"line":88,"column":42},"end":{"line":88,"column":47}},{"start":{"line":88,"column":51},"end":{"line":88,"column":77}}]},"4":{"line":97,"type":"binary-expr","locations":[{"start":{"line":97,"column":42},"end":{"line":97,"column":47}},{"start":{"line":97,"column":51},"end":{"line":97,"column":77}}]}},"code":["(function () { YUI.add('datasource-get', function (Y, NAME) {","","/**"," * Provides a DataSource implementation which can be used to retrieve data via the Get Utility."," *"," * @module datasource"," * @submodule datasource-get"," */","","/**"," * Get Utility subclass for the DataSource Utility."," * @class DataSource.Get"," * @extends DataSource.Local"," * @constructor"," */","var DSGet = function() {","    DSGet.superclass.constructor.apply(this, arguments);","};","","","Y.DataSource.Get = Y.extend(DSGet, Y.DataSource.Local, {","    /**","     * Passes query string to Get Utility. Fires <code>response</code> event when","     * response is received asynchronously.","     *","     * @method _defRequestFn","     * @param e {EventFacade} Event Facade with the following properties:","     * <dl>","     * <dt>tId (Number)</dt> <dd>Unique transaction ID.</dd>","     * <dt>request (Object)</dt> <dd>The request.</dd>","     * <dt>callback (Object)</dt> <dd>The callback object with the following properties:","     *     <dl>","     *         <dt>success (Function)</dt> <dd>Success handler.</dd>","     *         <dt>failure (Function)</dt> <dd>Failure handler.</dd>","     *     </dl>","     * </dd>","     * <dt>cfg (Object)</dt> <dd>Configuration object.</dd>","     * </dl>","     * @protected","     */","    _defRequestFn: function(e) {","        var uri  = this.get(\"source\"),","            get  = this.get(\"get\"),","            guid = Y.guid().replace(/\\-/g, '_'),","            generateRequest = this.get( \"generateRequestCallback\" ),","            payload = e.details[0],","            self = this;","","        /**","         * Stores the most recent request id for validation against stale","         * response handling.","         *","         * @property _last","         * @type {String}","         * @protected","         */","        this._last = guid;","","        // Dynamically add handler function with a closure to the callback stack","        // for access to guid","        YUI.Env.DataSource.callbacks[guid] = function(response) {","            delete YUI.Env.DataSource.callbacks[guid];","            delete Y.DataSource.Local.transactions[e.tId];","","            var process = self.get('asyncMode') !== \"ignoreStaleResponses\" ||","                          self._last === guid;","","            if (process) {","                payload.data = response;","","                self.fire(\"data\", payload);","            } else {","            }","","        };","","        // Add the callback param to the request url","        uri += e.request + generateRequest.call( this, guid );","","","        Y.DataSource.Local.transactions[e.tId] = get.script(uri, {","            autopurge: true,","            // Works in Firefox only....","            onFailure: function (o) {","                delete YUI.Env.DataSource.callbacks[guid];","                delete Y.DataSource.Local.transactions[e.tId];","","                payload.error = new Error(o.msg || \"Script node data failure\");","","","                self.fire(\"data\", payload);","            },","            onTimeout: function(o) {","                delete YUI.Env.DataSource.callbacks[guid];","                delete Y.DataSource.Local.transactions[e.tId];","","                payload.error = new Error(o.msg || \"Script node data timeout\");","","","                self.fire(\"data\", payload);","            }","        });","","        return e.tId;","    },","","","    /**","     * Default method for adding callback param to url.  See","     * generateRequestCallback attribute.","     *","     * @method _generateRequest","     * @param guid {String} unique identifier for callback function wrapper","     * @protected","     */","     _generateRequest: function (guid) {","        return \"&\" + this.get(\"scriptCallbackParam\") +","                \"=YUI.Env.DataSource.callbacks.\" + guid;","    }","","}, {","","    /**","     * Class name.","     *","     * @property NAME","     * @type String","     * @static","     * @final","     * @value \"dataSourceGet\"","     */","    NAME: \"dataSourceGet\",","","","    ////////////////////////////////////////////////////////////////////////////","    //","    // DataSource.Get Attributes","    //","    ////////////////////////////////////////////////////////////////////////////","    ATTRS: {","        /**","         * Pointer to Get Utility.","         *","         * @attribute get","         * @type Y.Get","         * @default Y.Get","         */","        get: {","            value: Y.Get,","            cloneDefaultValue: false","        },","","        /**","         * Defines request/response management in the following manner:","         * <dl>","         *     <!--<dt>queueRequests</dt>","         *     <dd>If a request is already in progress, wait until response is","         *     returned before sending the next request.</dd>","         *     <dt>cancelStaleRequests</dt>","         *     <dd>If a request is already in progress, cancel it before","         *     sending the next request.</dd>-->","         *     <dt>ignoreStaleResponses</dt>","         *     <dd>Send all requests, but handle only the response for the most","         *     recently sent request.</dd>","         *     <dt>allowAll</dt>","         *     <dd>Send all requests and handle all responses.</dd>","         * </dl>","         *","         * @attribute asyncMode","         * @type String","         * @default \"allowAll\"","         */","        asyncMode: {","            value: \"allowAll\"","        },","","        /**","         * Callback string parameter name sent to the remote script. By default,","         * requests are sent to","         * &#60;URI&#62;?&#60;scriptCallbackParam&#62;=callbackFunction","         *","         * @attribute scriptCallbackParam","         * @type String","         * @default \"callback\"","         */","        scriptCallbackParam : {","            value: \"callback\"","        },","","        /**","         * Accepts the DataSource instance and a callback ID, and returns a callback","         * param/value string that gets appended to the script URI. Implementers","         * can customize this string to match their server's query syntax.","         *","         * @attribute generateRequestCallback","         * @type Function","         */","        generateRequestCallback : {","            value: function () {","                return this._generateRequest.apply(this, arguments);","            }","        }","    }","});","","YUI.namespace(\"Env.DataSource.callbacks\");","","","}, '@VERSION@', {\"requires\": [\"datasource-local\", \"get\"]});","","}());"]};
}
__cov__SyEdoxVfi3evTLAaD15Dg = __cov__SyEdoxVfi3evTLAaD15Dg['build/datasource-get/datasource-get.js'];
__cov__SyEdoxVfi3evTLAaD15Dg.s['1']++;YUI.add('datasource-get',function(Y,NAME){__cov__SyEdoxVfi3evTLAaD15Dg.f['1']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['2']++;var DSGet=function(){__cov__SyEdoxVfi3evTLAaD15Dg.f['2']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['3']++;DSGet.superclass.constructor.apply(this,arguments);};__cov__SyEdoxVfi3evTLAaD15Dg.s['4']++;Y.DataSource.Get=Y.extend(DSGet,Y.DataSource.Local,{_defRequestFn:function(e){__cov__SyEdoxVfi3evTLAaD15Dg.f['3']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['5']++;var uri=this.get('source'),get=this.get('get'),guid=Y.guid().replace(/\-/g,'_'),generateRequest=this.get('generateRequestCallback'),payload=e.details[0],self=this;__cov__SyEdoxVfi3evTLAaD15Dg.s['6']++;this._last=guid;__cov__SyEdoxVfi3evTLAaD15Dg.s['7']++;YUI.Env.DataSource.callbacks[guid]=function(response){__cov__SyEdoxVfi3evTLAaD15Dg.f['4']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['8']++;delete YUI.Env.DataSource.callbacks[guid];__cov__SyEdoxVfi3evTLAaD15Dg.s['9']++;delete Y.DataSource.Local.transactions[e.tId];__cov__SyEdoxVfi3evTLAaD15Dg.s['10']++;var process=(__cov__SyEdoxVfi3evTLAaD15Dg.b['1'][0]++,self.get('asyncMode')!=='ignoreStaleResponses')||(__cov__SyEdoxVfi3evTLAaD15Dg.b['1'][1]++,self._last===guid);__cov__SyEdoxVfi3evTLAaD15Dg.s['11']++;if(process){__cov__SyEdoxVfi3evTLAaD15Dg.b['2'][0]++;__cov__SyEdoxVfi3evTLAaD15Dg.s['12']++;payload.data=response;__cov__SyEdoxVfi3evTLAaD15Dg.s['13']++;self.fire('data',payload);}else{__cov__SyEdoxVfi3evTLAaD15Dg.b['2'][1]++;}};__cov__SyEdoxVfi3evTLAaD15Dg.s['14']++;uri+=e.request+generateRequest.call(this,guid);__cov__SyEdoxVfi3evTLAaD15Dg.s['15']++;Y.DataSource.Local.transactions[e.tId]=get.script(uri,{autopurge:true,onFailure:function(o){__cov__SyEdoxVfi3evTLAaD15Dg.f['5']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['16']++;delete YUI.Env.DataSource.callbacks[guid];__cov__SyEdoxVfi3evTLAaD15Dg.s['17']++;delete Y.DataSource.Local.transactions[e.tId];__cov__SyEdoxVfi3evTLAaD15Dg.s['18']++;payload.error=new Error((__cov__SyEdoxVfi3evTLAaD15Dg.b['3'][0]++,o.msg)||(__cov__SyEdoxVfi3evTLAaD15Dg.b['3'][1]++,'Script node data failure'));__cov__SyEdoxVfi3evTLAaD15Dg.s['19']++;self.fire('data',payload);},onTimeout:function(o){__cov__SyEdoxVfi3evTLAaD15Dg.f['6']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['20']++;delete YUI.Env.DataSource.callbacks[guid];__cov__SyEdoxVfi3evTLAaD15Dg.s['21']++;delete Y.DataSource.Local.transactions[e.tId];__cov__SyEdoxVfi3evTLAaD15Dg.s['22']++;payload.error=new Error((__cov__SyEdoxVfi3evTLAaD15Dg.b['4'][0]++,o.msg)||(__cov__SyEdoxVfi3evTLAaD15Dg.b['4'][1]++,'Script node data timeout'));__cov__SyEdoxVfi3evTLAaD15Dg.s['23']++;self.fire('data',payload);}});__cov__SyEdoxVfi3evTLAaD15Dg.s['24']++;return e.tId;},_generateRequest:function(guid){__cov__SyEdoxVfi3evTLAaD15Dg.f['7']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['25']++;return'&'+this.get('scriptCallbackParam')+'=YUI.Env.DataSource.callbacks.'+guid;}},{NAME:'dataSourceGet',ATTRS:{get:{value:Y.Get,cloneDefaultValue:false},asyncMode:{value:'allowAll'},scriptCallbackParam:{value:'callback'},generateRequestCallback:{value:function(){__cov__SyEdoxVfi3evTLAaD15Dg.f['8']++;__cov__SyEdoxVfi3evTLAaD15Dg.s['26']++;return this._generateRequest.apply(this,arguments);}}}});__cov__SyEdoxVfi3evTLAaD15Dg.s['27']++;YUI.namespace('Env.DataSource.callbacks');},'@VERSION@',{'requires':['datasource-local','get']});
