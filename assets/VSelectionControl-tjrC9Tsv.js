import{a2 as h,bG as D,ap as z,a3 as T,bR as H,ay as J,az as R,aJ as _,bK as L,a6 as o,O,aL as X,$ as u,aa as $,b as d,cs as Z,bU as Q,a5 as U,r as W,c2 as Y,s as w,K as p,bZ as ee,F as le,a0 as ae,U as te,bX as ne,cG as I,bI as oe,aB as ue,cD as ie,b0 as re}from"./index-CyOif7-e.js";import{V as ce}from"./form-CGVp-LIP.js";const E=Symbol.for("vuetify:selection-control-group"),K=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:D,trueIcon:D,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:z},...T(),...H(),...J()},"SelectionControlGroup"),se=h({...K({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),ye=R()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=_(e,"modelValue"),t=L(),y=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||y.value),a=new Set;return O(E,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Z(()=>{a.delete(n)})}}),X({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),$(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=v.default)==null?void 0:n.call(v)])}),{}}}),de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...T(),...K()},"VSelectionControl");function ve(e){const i=te(E,void 0),{densityClasses:v}=ne(e),l=_(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=i?i.modelValue.value:l.value;return c.value?I(f).some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:y.value;let m=r;c.value&&(m=f?[...I(l.value),r]:I(l.value).filter(b=>!e.valueComparator(b,t.value))),i?i.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:C}=oe(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:S}=ue(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:y,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,icon:k}}const be=R()({name:"VSelectionControl",directives:{Ripple:Q},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:y,icon:c,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,trueValue:k}=ve(e),f=L(),r=U(!1),m=U(!1),b=W(),g=o(()=>e.id||`input-${f}`),B=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{b.value&&(b.value.checked=a.value)});function F(s){B.value&&(r.value=!0,ie(s.target,":focus-visible")!==!1&&(m.value=!0))}function x(){r.value=!1,m.value=!1}function M(s){s.stopPropagation()}function N(s){B.value&&(e.readonly&&t&&re(()=>t.forceUpdate()),a.value=s.target.checked)}return $(()=>{var G,P;const s=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[j,q]=Y(v),A=d("input",w({ref:b,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:x,onFocus:F,onInput:N,"aria-disabled":!!e.disabled,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},q),null);return d("div",w({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},y.value,e.class]},j,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(G=l.default)==null?void 0:G.call(l,{backgroundColorClasses:V,backgroundColorStyles:S}),p(d("div",{class:["v-selection-control__input"]},[((P=l.input)==null?void 0:P.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:S,inputNode:A,icon:c.value,props:{onFocus:F,onBlur:x,id:g.value}}))??d(le,null,[c.value&&d(ae,{key:"icon",icon:c.value},null),A])]),[[ee("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),s&&d(ce,{for:g.value,onClick:M},{default:()=>[s]})])}),{isFocused:r,input:b}}});export{be as V,K as a,ye as b,de as m};