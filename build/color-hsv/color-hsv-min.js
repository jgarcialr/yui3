YUI.add("color-hsv",function(c,o){Color={REGEX_HSV:/hsva?\(([.\d]*), ?([.\d]*)%, ?([.\d]*)%,? ?([.\d]*)?\)/,STR_HSV:"hsv({*}, {*}%, {*}%)",STR_HSVA:"hsva({*}, {*}%, {*}%, {*})",toHSV:function(o){return c.Color._convertTo(o,"hsv").toLowerCase()},toHSVA:function(o){return c.Color._convertTo(o,"hsva").toLowerCase()},_rgbToHsv:function(o,r){for(var o=c.Color.REGEX_RGB.exec(o),a=o[1]/255,e=o[2]/255,o=o[3]/255,t=Math.max(a,e,o),n=Math.min(a,e,o),s=t-n,h=t===n?0:t===a?60*(e-o)/s:t===e?60*(o-a)/s+120:60*(a-e)/s+240,o=0===t?0:1-n/t;h<0;)h+=360;return h%=360,h=Math.round(h),o=Math.round(100*o),a=Math.round(100*t),r?[h,o,a]:c.Color.fromArray([h,o,a],c.Color.TYPES.HSV)},_hsvToRgb:function(o,r){var a,e,t,o=c.Color.REGEX_HSV.exec(o),n=parseInt(o[1],10),s=parseInt(o[2],10)/100,h=parseInt(o[3],10)/100,o=Math.floor(n/60)%6,n=n/60-o,l=h*(1-s),C=h*(1-s*n),S=h*(1-s*(1-n));if(0==s)t=e=a=h;else switch(o){case 0:a=h,e=S,t=l;break;case 1:a=C,e=h,t=l;break;case 2:a=l,e=h,t=S;break;case 3:a=l,e=C,t=h;break;case 4:a=S,e=l,t=h;break;case 5:a=h,e=l,t=C}return a=Math.min(255,Math.round(256*a)),e=Math.min(255,Math.round(256*e)),t=Math.min(255,Math.round(256*t)),r?[a,e,t]:c.Color.fromArray([a,e,t],c.Color.TYPES.RGB)}},c.Color=c.mix(Color,c.Color),c.Color.TYPES=c.mix(c.Color.TYPES,{HSV:"hsv",HSVA:"hsva"}),c.Color.CONVERTS=c.mix(c.Color.CONVERTS,{hsv:"toHSV",hsva:"toHSVA"})},"@VERSION@",{requires:["color-base"]});