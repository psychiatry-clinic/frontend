import{d as i,r as a,w as f,n,o as d,c as m,b as p,aX as b,b1 as _,z as k}from"./index-BlOLK-CZ.js";const V={key:0,class:"position-fixed",style:{"z-index":"9999","inset-block-start":"0","inset-inline":"0 0"}},w=i({__name:"AppLoadingIndicator",setup(g,{expose:c}){const s=a(20),e=a(10),l=a(!1),t=a(),o=a(!1);f([e,l],()=>{e.value>80&&l.value&&(e.value=82),r()});function r(){clearInterval(t.value),t.value=setInterval(()=>{e.value+=Math.random()*10+5,s.value+=Math.random()*10+6},800)}return c({fallbackHandle:()=>{o.value=!0,e.value=10,l.value=!0,r()},resolveHandle:()=>{l.value=!1,e.value=100,setTimeout(()=>{clearInterval(t.value),e.value=0,s.value=20,o.value=!1},300)}}),(H,u)=>n(o)?(d(),m("div",V,[p(_,{modelValue:n(e),"onUpdate:modelValue":u[0]||(u[0]=v=>b(e)?e.value=v:null),"buffer-value":n(s),color:"primary",height:"2","bg-color":"background"},null,8,["modelValue","buffer-value"])])):k("",!0)}});export{w as _};
