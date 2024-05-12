import{d as H}from"./index-3yW8ycYk.js";import{a2 as Z,bG as G,a3 as ee,c5 as te,ax as le,ck as ae,az as ne,aK as se,be as ue,cl as oe,a5 as x,a6 as S,a9 as L,cr as ie,w as ce,aa as re,b as h,a0 as N,bN as ve,a7 as fe}from"./index-CG4YDle8.js";function $(a){const s=Math.abs(a);return Math.sign(a)*(s/((1/.501-2)*(1-s)+1))}function q(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:b,currentScrollOffset:r,isHorizontal:n}=a;const u=n?d.clientWidth:d.clientHeight,t=n?d.offsetLeft:d.offsetTop,c=b&&n?i-t-u:t,v=s+r,o=u+c,g=u*.4;return c<=r?r=Math.max(c-g,0):v<=o&&(r=Math.min(r-(v-o-g),i-s)),r}function de(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:b,isHorizontal:r}=a;const n=r?d.clientWidth:d.clientHeight,u=r?d.offsetLeft:d.offsetTop,t=b&&r?i-u-n/2-s/2:u+n/2-s/2;return Math.min(i-s,Math.max(0,t))}const me=Symbol.for("vuetify:v-slide-group"),pe=Z({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:me},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["always","desktop","mobile"].includes(a)},...ee(),...te(),...le(),...ae({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ge=ne()({name:"VSlideGroup",props:pe(),emits:{"update:modelValue":a=>!0},setup(a,d){let{slots:s}=d;const{isRtl:i}=se(),{displayClasses:b,mobile:r}=ue(a),n=oe(a,a.symbol),u=x(!1),t=x(0),c=x(0),v=x(0),o=S(()=>a.direction==="horizontal"),{resizeRef:g,contentRect:R}=L(),{resizeRef:f,contentRect:k}=L(),A=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[0]):-1),B=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[n.selected.value.length-1]):-1);if(ie){let e=-1;ce(()=>[n.selected.value,R.value,k.value,o.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(R.value&&k.value){const l=o.value?"width":"height";c.value=R.value[l],v.value=k.value[l],u.value=c.value+1<v.value}if(A.value>=0&&f.value){const l=f.value.children[B.value];A.value===0||!u.value?t.value=0:a.centerActive?t.value=de({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,isHorizontal:o.value}):u.value&&(t.value=q({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value}))}})})}const z=x(!1);let I=0,_=0;function D(e){const l=o.value?"clientX":"clientY";_=(i.value&&o.value?-1:1)*t.value,I=e.touches[0][l],z.value=!0}function K(e){if(!u.value)return;const l=o.value?"clientX":"clientY",m=i.value&&o.value?-1:1;t.value=m*(_+I-e.touches[0][l])}function W(e){const l=v.value-c.value;t.value<0||!u.value?t.value=0:t.value>=l&&(t.value=l),z.value=!1}function X(){g.value&&(g.value[o.value?"scrollLeft":"scrollTop"]=0)}const w=x(!1);function Y(e){if(w.value=!0,!(!u.value||!f.value)){for(const l of e.composedPath())for(const m of f.value.children)if(m===l){t.value=q({selectedElement:m,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value});return}}}function U(e){w.value=!1}function j(e){var l;!w.value&&!(e.relatedTarget&&((l=f.value)!=null&&l.contains(e.relatedTarget)))&&p()}function J(e){f.value&&(o.value?e.key==="ArrowRight"?p(i.value?"prev":"next"):e.key==="ArrowLeft"&&p(i.value?"next":"prev"):e.key==="ArrowDown"?p("next"):e.key==="ArrowUp"&&p("prev"),e.key==="Home"?p("first"):e.key==="End"&&p("last"))}function p(e){var l,m,M,V,E;if(f.value)if(!e)(l=ve(f.value)[0])==null||l.focus();else if(e==="next"){const y=(m=f.value.querySelector(":focus"))==null?void 0:m.nextElementSibling;y?y.focus():p("first")}else if(e==="prev"){const y=(M=f.value.querySelector(":focus"))==null?void 0:M.previousElementSibling;y?y.focus():p("last")}else e==="first"?(V=f.value.firstElementChild)==null||V.focus():e==="last"&&((E=f.value.lastElementChild)==null||E.focus())}function T(e){const l=t.value+(e==="prev"?-1:1)*c.value;t.value=fe(l,0,v.value-c.value)}const Q=S(()=>{let e=t.value>v.value-c.value?-(v.value-c.value)+$(v.value-c.value-t.value):-t.value;t.value<=0&&(e=$(-t.value));const l=i.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${l*e}px)`,transition:z.value?"none":"",willChange:z.value?"transform":""}}),O=S(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),P=S(()=>{switch(a.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return u.value||Math.abs(t.value)>0;case"mobile":return r.value||u.value||Math.abs(t.value)>0;default:return!r.value&&(u.value||Math.abs(t.value)>0)}}),C=S(()=>Math.abs(t.value)>0),F=S(()=>v.value>Math.abs(t.value)+c.value);return re(()=>h(a.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":P.value,"v-slide-group--is-overflowing":u.value},b.value,a.class],style:a.style,tabindex:w.value||n.selected.value.length?-1:0,onFocus:j},{default:()=>{var e,l,m;return[P.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!C.value}],onClick:()=>C.value&&T("prev")},[((e=s.prev)==null?void 0:e.call(s,O.value))??h(H,null,{default:()=>[h(N,{icon:i.value?a.nextIcon:a.prevIcon},null)]})]),h("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:X},[h("div",{ref:f,class:"v-slide-group__content",style:Q.value,onTouchstartPassive:D,onTouchmovePassive:K,onTouchendPassive:W,onFocusin:Y,onFocusout:U,onKeydown:J},[(l=s.default)==null?void 0:l.call(s,O.value)])]),P.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!F.value}],onClick:()=>F.value&&T("next")},[((m=s.next)==null?void 0:m.call(s,O.value))??h(H,null,{default:()=>[h(N,{icon:i.value?a.prevIcon:a.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:T,scrollOffset:t,focus:p}}});export{ge as V,me as a,pe as m};
