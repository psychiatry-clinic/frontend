/* empty css                   */import{V as Z}from"./VCounter-C6GPP6-x.js";import{m as q,f as G,V as H}from"./VField-B3rRpEM3.js";import{m as L,V as b}from"./VInput-V8m5mUYp.js";import{u as W}from"./form-Bgif39SN.js";import{f as X}from"./forwardRefs-C-GTDzx5.js";import{a2 as Y,az as $,aJ as ee,a6 as v,r as x,aa as te,c2 as ne,b as n,s as V,K as le,bZ as ae,F as y,cP as ue,b0 as p,cQ as oe}from"./index-CtKWXR1f.js";import{I as ie}from"./index-BUJI5O_j.js";const re=["color","file","time","date","datetime-local","week","month"],se=Y({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...L(),...q()},"VTextField"),Ce=$()({name:"VTextField",directives:{Intersect:ie},inheritAttrs:!1,props:se(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,S){let{attrs:m,emit:g,slots:l}=S;const o=ee(e,"modelValue"),{isFocused:r,focus:w,blur:A}=W(e),D=v(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:(o.value??"").toString().length),R=v(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),C=v(()=>["plain","underlined"].includes(e.variant));function T(t,a){var u,i;!e.autofocus||!t||(i=(u=a[0].target)==null?void 0:u.focus)==null||i.call(u)}const F=x(),P=x(),s=x(),B=v(()=>re.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||w()}function M(t){g("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function N(t){d(),g("click:control",t)}function E(t){t.stopPropagation(),d(),p(()=>{o.value=null,oe(e["onClick:clear"],t)})}function z(t){var u;const a=t.target;if(o.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const i=[a.selectionStart,a.selectionEnd];p(()=>{a.selectionStart=i[0],a.selectionEnd=i[1]})}}return te(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,i]=ne(m),{modelValue:ce,...O}=b.filterProps(e),U=G(e);return n(b,V({ref:F,modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":C.value},e.class],style:e.style},u,O,{centerAffix:!C.value,focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:h,isDirty:k,isReadonly:j,isValid:J}=c;return n(H,V({ref:P,onMousedown:M,onClick:N,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},U,{id:f.value,active:B.value||k.value,dirty:k.value||e.dirty,disabled:h.value,focused:r.value,error:J.value===!1}),{...l,default:K=>{let{props:{class:I,...Q}}=K;const _=le(n("input",V({ref:s,value:o.value,onInput:z,autofocus:e.autofocus,readonly:j.value,disabled:h.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:A},Q,i),null),[[ae("intersect"),{handler:T},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:I,"data-no-activator":""},[l.default(),_]):ue(_,{class:I}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(Z,{active:e.persistentCounter||r.value,value:D.value,max:R.value},l.counter)])])}:void 0})}),X({},F,P,s)}});export{Ce as V,se as m};