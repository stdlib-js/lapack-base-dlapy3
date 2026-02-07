"use strict";var x=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var n=x(function(h,b){
var i=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/lapack-base-dlamch/dist'),m=require('@stdlib/math-base-special-maxn/dist'),o=require('@stdlib/math-base-special-sqrt/dist'),t=require('@stdlib/math-base-special-abs2/dist');function p(v,a,c){var q,e,s,u,r;return q=l("O"),e=i(v),s=i(a),u=i(c),r=m(e,s,u),r===0||r>q?e+s+u:r*o(t(e/r)+t(s/r)+t(u/r))}b.exports=p
});var d=n();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
