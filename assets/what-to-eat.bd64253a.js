import{d as v,l as c,m,o as u,c as l,a as i,t as h,f as x,p as d,q as C}from"./vendor.d489b90e.js";function E(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var f=["\u51C9\u76AE","\u5364\u7C89","\u53F0\u6E7E\u5364\u8089\u996D","\u5496\u55B1\u996D","\u5AE9\u725B\u4E94\u65B9","\u5BFF\u53F8","\u65B0\u7586\u7092\u7C73\u7C89","\u65E5\u5F0F\u62C9\u9762","\u65E5\u5F0F\u70E7\u8089\u996D","\u6740\u732A\u7C89","\u6865\u5934\u6392\u9AA8","\u6C34\u716E\u8089\u7247","\u6C34\u997A","\u6C49\u5821\u85AF\u6761","\u6CB9\u70B8\u70E7\u70E4","\u6D4F\u9633\u84B8\u83DC","\u6D77\u5357\u6930\u5B50\u9E21","\u6F6E\u6C55\u7802\u9505\u7CA5","\u706B\u9505","\u706B\u9505\u9E21","\u7092\u7C89","\u7092\u996D","\u70E4\u51B7\u9762","\u70E4\u8089\u62CC\u996D","\u70E7\u814A\u996D","\u714E\u997A","\u714E\u997C\u679C\u5B50","\u725B\u4E3C\u996D","\u725B\u8089\u7C89","\u725B\u8089\u9762","\u732A\u809A\u9E21","\u732A\u811A\u996D","\u76D6\u7801\u996D","\u8089\u5939\u998D","\u8089\u6C41\u62CC\u996D","\u80A0\u7C89","\u81ED\u8C46\u8150","\u8471\u6CB9\u62CC\u9762","\u84B8\u997A","\u86CB\u5305\u996D","\u87BA\u86F3\u7C89","\u8FA3\u6912\u7092\u8089","\u8FC7\u6865\u7C73\u7EBF","\u9178\u83DC\u9C7C","\u91CD\u5E86\u5C0F\u9762","\u9505\u76D4","\u97E9\u5F0F\u70B8\u9E21","\u97E9\u5F0F\u70E4\u8089","\u97E9\u5F0F\u90E8\u961F\u706B\u9505","\u9984\u9968","\u9E2D\u8840\u7C89\u4E1D","\u9EBB\u5A46\u8C46\u8150","\u9EBB\u8FA3\u70EB","\u9EBB\u8FA3\u9999\u9505","\u9EC4\u7116\u9E21"];const g={"p-5":"","space-y-2":"",flex:"~","flex-col":"","items-center":"","justify-center":""},k={"font-mono":"","text-2xl":"","font-bold":"",flex:"","flex-row":""},y=C(" \u4ECA\u5929\u5403 "),B={"text-indigo-600":""},w=["src"],b=v({setup(e){const t="/vue-demos/",o=c("\u4EC0\u4E48"),s=c(!1),_=m(()=>o.value+(o.value==="\u4EC0\u4E48"?"?":"!"));async function p(){s.value=!0;for(let a=0;a<10;a++){await new Promise(r=>setTimeout(r,200));const n=E(0,f.length);o.value=f[n]}s.value=!1}return(a,n)=>(u(),l("div",g,[i("div",k,[y,i("p",B,h(_.value),1)]),o.value!=="\u4EC0\u4E48"&&!s.value?(u(),l("img",{key:0,"w-100":"",src:x(t)+"/foods/"+o.value+".jpg"},null,8,w)):d("",!0),s.value?d("",!0):(u(),l("button",{key:1,btn:"",onClick:n[0]||(n[0]=r=>p())}," \u5F00\u59CB "))]))}});export{b as default};
