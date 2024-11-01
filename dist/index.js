"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(B,m){
var d=require('@stdlib/math-base-special-abs/dist');function R(e,r,a,i){var v,t,n,s,u;if(e<1)return-1;if(t=0,e===1)return t;for(v=d(r[i]),n=i+a,u=1;u<e;u++)s=d(r[n]),s>v&&(t=u,v=s),n+=a;return t}m.exports=R
});var c=o(function(C,f){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=q();function E(e,r,a){var i=_(e,a);return b(e,r,a,i)}f.exports=E
});var j=o(function(D,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),g=q();O(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),x,l=k(h(__dirname,"./native.js"));w(l)?x=z:x=l;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
