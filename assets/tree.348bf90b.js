import{d as p,l as x,m as v,n as _,o as y,c as k,a as M}from"./vendor.d489b90e.js";const T={flex:"~","flex-col":"","items-center":"","justify-center":""},E=p({setup(B){const s=x(),n=v(()=>s.value.getContext("2d")),r=450,l=450;function f(t,e){n.value.beginPath(),n.value.moveTo(t.x,t.y),n.value.lineTo(e.x,e.y),n.value.stroke()}function g(t){const e=c(t);f(t.start,e)}function c(t){return{x:t.start.x+t.length*Math.cos(t.angle),y:t.start.y+t.length*Math.sin(t.angle)}}const a=[];function o(t,e){if(e===8)return;g(t);const h=c(t);a.push(()=>o({start:h,length:t.length*.75,angle:t.angle+Math.random()},e+1)),a.push(()=>o({start:h,length:t.length*.75,angle:t.angle-Math.random()},e+1))}function d(){n.value.strokeStyle="#1D9A6C";const t={x:r/2,y:l};o({start:t,length:100,angle:-Math.PI/2},0)}function m(){const t=[...a];a.length=0,t.forEach(e=>e())}let i=0;function u(){requestAnimationFrame(()=>{i+=1,i%10===0&&m(),u()})}return u(),_(()=>{d()}),(t,e)=>(y(),k("div",T,[M("canvas",{ref_key:"el",ref:s,width:r,height:l,border:""},null,512)]))}});export{E as default};
