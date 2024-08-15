"use strict";var o=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var m=o(function(A,x){
var f=require('@stdlib/math-base-special-abs/dist');function R(i,a,n){var u,e,t,v,r;if(i<1||n<=0)return-1;if(e=0,i===1)return e;if(n===1){for(u=f(a[0]),r=1;r<i;r++)v=f(a[r]),v>u&&(e=r,u=v);return e}for(u=f(a[0]),t=n,r=1;r<i;r++)v=f(a[t]),v>u&&(e=r,u=v),t+=n;return e}x.exports=R
});var p=o(function(B,c){
var d=require('@stdlib/math-base-special-abs/dist');function _(i,a,n,u){var e,t,v,r,s;if(i<1)return-1;if(t=0,i===1)return t;for(e=d(a[u]),v=u+n,s=1;s<i;s++)r=d(a[v]),r>e&&(t=s,e=r),v+=n;return t}c.exports=_
});var b=o(function(C,j){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),O=p();E(y,"ndarray",O);j.exports=y
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=b(),q,l=h(g(__dirname,"./native.js"));k(l)?q=w:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
