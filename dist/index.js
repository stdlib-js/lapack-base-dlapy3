"use strict";var x=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=x(function(h,n){
var t=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/lapack-base-dlamch/dist'),m=require('@stdlib/math-base-special-maxn/dist'),o=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/math-base-special-abs2/dist');function p(v,r,i){var b,e,s,u,a;return b=l("O"),e=t(v),s=t(r),u=t(i),a=m(e,s,u),a===0||a>b?e+s+u:a*o(q(e/a)+q(s/a)+q(u/a))}n.exports=p
});var d=c();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
