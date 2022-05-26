YUI.add("matrix",function(t,r){var n,u={_rounder:1e5,_round:function(t){return t=Math.round(t*u._rounder)/u._rounder},rad2deg:function(t){return t*(180/Math.PI)},deg2rad:function(t){return t*(Math.PI/180)},angle2rad:function(t){return t="string"==typeof t&&-1<t.indexOf("rad")?parseFloat(t):u.deg2rad(parseFloat(t))},convertTransformToArray:function(t){return[[t.a,t.c,t.dx],[t.b,t.d,t.dy],[0,0,1]]},getDeterminant:function(t){var r,n=0,a=t.length,e=0;if(2==a)return t[0][0]*t[1][1]-t[0][1]*t[1][0];for(;e<a;++e)r=t[e][0],e%2==0||0===e?n+=r*u.getDeterminant(u.getMinors(t,e,0)):n-=r*u.getDeterminant(u.getMinors(t,e,0));return n},inverse:function(t){var r,n,a,e=0,i=t.length,s=0,o=[];if(2===i)e=t[0][0]*t[1][1]-t[0][1]*t[1][0],n=[[t[1][1]*e,-t[1][0]*e],[-t[0][1]*e,t[0][0]*e]];else{for(e=u.getDeterminant(t);s<i;++s)for(o[s]=[],r=0;r<i;++r)a=u.getMinors(t,r,s),o[s][r]=u.getDeterminant(a),(s+r)%2!=0&&s+r!==0&&(o[s][r]*=-1);n=u.scalarMultiply(o,1/e)}return n},scalarMultiply:function(t,r){for(var n,a=0,e=t.length;a<e;++a)for(n=0;n<e;++n)t[a][n]=u._round(t[a][n]*r);return t},transpose:function(t){for(var r=t.length,n=0,a=0,e=[];n<r;++n)for(e[n]=[],a=0;a<r;++a)e[n].push(t[a][n]);return e},getMinors:function(t,r,n){for(var a,e,i=[],s=t.length,o=0;o<s;++o)if(o!==r){for(e=[],a=0;a<s;++a)a!==n&&e.push(t[o][a]);i.push(e)}return i},sign:function(t){return 0===t?1:t/Math.abs(t)},vectorMatrixProduct:function(t,r){for(var n,a,e=t.length,i=[],s=0;s<e;++s){for(n=a=0;n<e;++n)a+=t[s]*r[s][n];i[s]=a}return i},decompose:function(t){var r,n=parseFloat(t[0][0]),a=parseFloat(t[1][0]),e=parseFloat(t[0][1]),i=parseFloat(t[1][1]),s=parseFloat(t[0][2]),o=parseFloat(t[1][2]);return n*i-a*e!=0&&(i-=(a/=r=u._round(Math.sqrt(n*n+a*a)))*(a=u._round((n/=r)*e+a*i)),(e-=n*a)/(n=u._round(Math.sqrt(e*e+i*i))),a/=n,a=u._round(u.rad2deg(Math.atan(a))),[["translate",s,o],["rotate",u._round(u.rad2deg(Math.atan2(t[1][0],t[0][0])))],["skewX",a],["scale",r,n]])},getTransformArray:function(t){for(var r,n,a=/\s*([a-z]*)\(([\w,\.,\-,\s]*)\)/gi,e=[],i=u.transformMethods;n=a.exec(t);)i.hasOwnProperty(n[1])?((r=n[2].split(",")).unshift(n[1]),e.push(r)):"matrix"==n[1]&&(r=n[2].split(","),n=u.decompose([[r[0],r[2],r[4]],[r[1],r[3],r[5]],[0,0,1]]),e.push(n[0]),e.push(n[1]),e.push(n[2]),e.push(n[3]));return e},getTransformFunctionArray:function(t){var r;switch(t){case"skew":r=[t,0,0];break;case"scale":r=[t,1,1];break;case"scaleX":case"scaleY":r=[t,1];break;case"translate":r=[t,0,0];break;default:r=[t,0]}return r},compareTransformSequence:function(t,r){var n=0,a=t.length,e=a===r.length;if(e)for(;n<a;++n)if(t[n][0]!=r[n][0]){e=!1;break}return e},transformMethods:{rotate:"rotate",skew:"skew",skewX:"skewX",skewY:"skewY",translate:"translate",translateX:"translateX",translateY:"tranlsateY",scale:"scale",scaleX:"scaleX",scaleY:"scaleY"}};t.MatrixUtil=u,(n=function(t){this.init(t)}).prototype={_rounder:1e5,multiply:function(t,r,n,a,e,i){var s=this,o=s.a*t+s.c*r,t=s.b*t+s.d*r,r=s.a*n+s.c*a,n=s.b*n+s.d*a,a=s.a*e+s.c*i+s.dx,e=s.b*e+s.d*i+s.dy;return s.a=this._round(o),s.b=this._round(t),s.c=this._round(r),s.d=this._round(n),s.dx=this._round(a),s.dy=this._round(e),this},applyCSSText:function(t){var r,n,a=/\s*([a-z]*)\(([\w,\.,\-,\s]*)\)/gi;for(t=t.replace(/matrix/g,"multiply");n=a.exec(t);)"function"==typeof this[n[1]]&&(r=n[2].split(","),this[n[1]].apply(this,r))},getTransformArray:function(t){var r,n,a=/\s*([a-z]*)\(([\w,\.,\-,\s]*)\)/gi,e=[];for(t=t.replace(/matrix/g,"multiply");n=a.exec(t);)"function"==typeof this[n[1]]&&((r=n[2].split(",")).unshift(n[1]),e.push(r));return e},_defaults:{a:1,b:0,c:0,d:1,dx:0,dy:0},_round:function(t){return t=Math.round(t*this._rounder)/this._rounder},init:function(t){var r,n=this._defaults;for(r in t=t||{},n)n.hasOwnProperty(r)&&(this[r]=(r in t?t:n)[r]);this._config=t},scale:function(t,r){return this.multiply(t,0,0,r,0,0),this},skew:function(t,r){return r=r||0,(t=t||0)!==undefined&&(t=Math.tan(this.angle2rad(t))),r!==undefined&&(r=Math.tan(this.angle2rad(r))),this.multiply(1,r,t,1,0,0),this},skewX:function(t){return this.skew(t),this},skewY:function(t){return this.skew(null,t),this},toCSSText:function(){var t=this;return"matrix("+t.a+","+t.b+","+t.c+","+t.d+","+t.dx+","+t.dy+")"},toFilterText:function(){var t="progid:DXImageTransform.Microsoft.Matrix(";return t+("M11="+this.a+",M21="+this.b+",M12="+this.c+",M22="+this.d+',sizingMethod="auto expand")')+""},rad2deg:function(t){return t*(180/Math.PI)},deg2rad:function(t){return t*(Math.PI/180)},angle2rad:function(t){return t="string"==typeof t&&-1<t.indexOf("rad")?parseFloat(t):this.deg2rad(parseFloat(t))},rotate:function(t,r,n){var t=this.angle2rad(t),a=Math.sin(t),t=Math.cos(t);return this.multiply(t,a,0-a,t,0,0),this},translate:function(t,r){return t=parseFloat(t)||0,r=parseFloat(r)||0,this.multiply(1,0,0,1,t,r),this},translateX:function(t){return this.translate(t),this},translateY:function(t){return this.translate(null,t),this},identity:function(){var t,r=this._config,n=this._defaults;for(t in r)t in n&&(this[t]=n[t]);return this},getMatrixArray:function(){var t=this;return[[t.a,t.c,t.dx],[t.b,t.d,t.dy],[0,0,1]]},getContentRect:function(t,r,n,a){var n=isNaN(n)?0:n,a=isNaN(a)?0:a,t=n+t,r=a+r,e=this,i=e.a,s=e.b,o=e.c,u=e.d,h=e.dx,e=e.dy,c=i*n+o*a+h,f=s*n+u*a+e,l=i*t+o*a+h,a=s*t+u*a+e,d=i*n+o*r+h,n=s*n+u*r+e,i=i*t+o*r+h,o=s*t+u*r+e;return{left:Math.min(d,Math.min(c,Math.min(l,i))),right:Math.max(d,Math.max(c,Math.max(l,i))),top:Math.min(a,Math.min(o,Math.min(n,f))),bottom:Math.max(a,Math.max(o,Math.max(n,f)))}},getDeterminant:function(){return t.MatrixUtil.getDeterminant(this.getMatrixArray())},inverse:function(){return t.MatrixUtil.inverse(this.getMatrixArray())},transpose:function(){return t.MatrixUtil.transpose(this.getMatrixArray())},decompose:function(){return t.MatrixUtil.decompose(this.getMatrixArray())}},t.Matrix=n},"@VERSION@",{requires:["yui-base"]});