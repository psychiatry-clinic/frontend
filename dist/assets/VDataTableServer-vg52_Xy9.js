import{m as U,a as X,b as Y,c as Z,d as ee,e as ae,f as te,u as oe,p as re,g as le,h as se,i as de,j as ue,k as ne,l as ie,n as D,o as V,q as x}from"./VDataTable-7aqXWbiF.js";import{a2 as ce,az as me,a6 as m,$ as o,aL as ge,aa as ve,O as pe,b as r,F as be,s as g}from"./index-D5RGqRWX.js";import{V as w}from"./VTable-C-tr6tyO.js";const Pe=ce({itemsLength:{type:[Number,String],required:!0},...U(),...X(),...Y()},"VDataTableServer"),he=me()({name:"VDataTableServer",props:Pe(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,B){let{attrs:I,slots:a}=B;const{groupBy:d}=Z(e),{sortBy:l,multiSort:k,mustSort:F}=ee(e),{page:u,itemsPerPage:i}=ae(e),G=m(()=>parseInt(e.itemsLength,10)),{columns:v,headers:R}=te(e,{groupBy:d,showSelect:o(e,"showSelect"),showExpand:o(e,"showExpand")}),{items:n}=oe(e,v),{toggleSort:p}=re({sortBy:l,multiSort:k,mustSort:F,page:u}),{opened:E,isGroupOpen:H,toggleGroup:L,extractRows:N}=le({groupBy:d,sortBy:l}),{pageCount:_,setItemsPerPage:C}=se({page:u,itemsPerPage:i,itemsLength:G}),{flatItems:b}=de(n,d,E),{isSelected:O,select:q,selectAll:j,toggleSelect:z,someSelected:A,allSelected:W}=ue(e,{allItems:n,currentPage:n}),{isExpanded:$,toggleExpand:J}=ne(e),P=m(()=>N(n.value));ie({page:u,itemsPerPage:i,sortBy:l,groupBy:d,search:o(e,"search")}),pe("v-data-table",{toggleSort:p,sortBy:l}),ge({VDataTableRows:{hideNoData:o(e,"hideNoData"),noDataText:o(e,"noDataText"),loading:o(e,"loading"),loadingText:o(e,"loadingText")}});const t=m(()=>({page:u.value,itemsPerPage:i.value,sortBy:l.value,pageCount:_.value,toggleSort:p,setItemsPerPage:C,someSelected:A.value,allSelected:W.value,isSelected:O,select:q,selectAll:j,toggleSelect:z,isExpanded:$,toggleExpand:J,isGroupOpen:H,toggleGroup:L,items:P.value.map(c=>c.raw),internalItems:P.value,groupedItems:b.value,columns:v.value,headers:R.value}));ve(()=>{const c=D.filterProps(e),K=V.filterProps(e),M=x.filterProps(e),Q=w.filterProps(e);return r(w,g({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},Q),{top:()=>{var s;return(s=a.top)==null?void 0:s.call(a,t.value)},default:()=>{var s,y,T,S,h,f;return a.default?a.default(t.value):r(be,null,[(s=a.colgroup)==null?void 0:s.call(a,t.value),r("thead",{class:"v-data-table__thead",role:"rowgroup"},[r(V,g(K,{sticky:e.fixedHeader}),a)]),(y=a.thead)==null?void 0:y.call(a,t.value),r("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(T=a["body.prepend"])==null?void 0:T.call(a,t.value),a.body?a.body(t.value):r(x,g(I,M,{items:b.value}),a),(S=a["body.append"])==null?void 0:S.call(a,t.value)]),(h=a.tbody)==null?void 0:h.call(a,t.value),(f=a.tfoot)==null?void 0:f.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):r(D,c,{prepend:a["footer.prepend"]})})})}});export{he as V};
