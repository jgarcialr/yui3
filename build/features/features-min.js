YUI.add("features",function(r,e){var t,o={};r.mix(r.namespace("Features"),{tests:o,add:function(e,t,n){o[e]=o[e]||{},o[e][t]=n},all:function(n,a){var e=o[n],i=[];return e&&r.Object.each(e,function(e,t){i.push(t+":"+(r.Features.test(n,t,a)?1:0))}),i.length?i.join(";"):""},test:function(e,t,n){n=n||[];var a,i,e=o[e],t=e&&e[t];return t&&(a=t.result,r.Lang.isUndefined(a)&&((e=t.ua)&&(a=r.UA[e]),!(i=t.test)||e&&!a||(a=i.apply(r,n)),t.result=a)),a}}),(t=r.Features.add)("load","0",{name:"app-transitions-native",test:function(e){e=e.config.doc,e=e?e.documentElement:null;return!(!e||!e.style)&&("MozTransition"in e.style||"WebkitTransition"in e.style||"transition"in e.style)},trigger:"app-transitions"}),t("load","1",{name:"autocomplete-list-keys",test:function(e){return!(e.UA.ios||e.UA.android)},trigger:"autocomplete-list"}),t("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),t("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,a=e.config.win,i=e.config.doc;return n("style","computedStyle",{test:function(){return a&&"getComputedStyle"in a}}),n("style","opacity",{test:function(){return i&&"opacity"in i.documentElement.style}}),!t("style","opacity")&&!t("style","computedStyle")},trigger:"dom-style"}),t("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),t("load","5",{name:"event-base-ie",test:function(e){e=e.config.doc&&e.config.doc.implementation;return e&&!e.hasFeature("Events","2.0")},trigger:"node-base"}),t("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,e=e.config.defaultGraphicEngine&&"canvas"==e.config.defaultGraphicEngine,n=t&&t.createElement("canvas");return(!(t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))||e)&&n&&n.getContext&&n.getContext("2d")},trigger:"graphics"}),t("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,e=e.config.defaultGraphicEngine&&"canvas"==e.config.defaultGraphicEngine,n=t&&t.createElement("canvas");return(!(t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"))||e)&&n&&n.getContext&&n.getContext("2d")},trigger:"graphics"}),t("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,e=!e.config.defaultGraphicEngine||"canvas"!=e.config.defaultGraphicEngine,n=t&&t.createElement("canvas");return t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(e||!n)},trigger:"graphics"}),t("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,e=!e.config.defaultGraphicEngine||"canvas"!=e.config.defaultGraphicEngine,n=t&&t.createElement("canvas");return t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(e||!n)},trigger:"graphics"}),t("load","10",{name:"graphics-vml",test:function(e){var e=e.config.doc,t=e&&e.createElement("canvas");return e&&!e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!t||!t.getContext||!t.getContext("2d"))},trigger:"graphics"}),t("load","11",{name:"graphics-vml-default",test:function(e){var e=e.config.doc,t=e&&e.createElement("canvas");return e&&!e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!t||!t.getContext||!t.getContext("2d"))},trigger:"graphics"}),t("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),t("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),t("load","14",{name:"json-parse-shim",test:function(e){var t=e.config.global.JSON,t="[object JSON]"===Object.prototype.toString.call(t)&&t,e=!1!==e.config.useNativeJSONParse&&!!t;if(e)try{e=t.parse('{"ok":false}',function(e,t){return"ok"===e||t}).ok}catch(n){e=!1}return!e},trigger:"json-parse"}),t("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,t="[object JSON]"===Object.prototype.toString.call(t)&&t,e=!1!==e.config.useNativeJSONStringify&&!!t;if(e)try{e="0"===t.stringify(0)}catch(n){e=!1}return!e},trigger:"json-stringify"}),t("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),t("load","17",{name:"selector-css2",test:function(e){e=e.config.doc;return e&&!("querySelectorAll"in e)},trigger:"selector"}),t("load","18",{name:"transition-timer",test:function(e){var e=e.config.doc,e=e?e.documentElement:null,t=!0;return t=e&&e.style?!("MozTransition"in e.style||"WebkitTransition"in e.style||"transition"in e.style):t},trigger:"transition"}),t("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),t("load","20",{name:"yql-jsonp",test:function(e){return!e.UA.nodejs&&!e.UA.winjs},trigger:"yql"}),t("load","21",{name:"yql-nodejs",trigger:"yql",ua:"nodejs"}),t("load","22",{name:"yql-winjs",trigger:"yql",ua:"winjs"})},"@VERSION@",{requires:["yui-base"]});