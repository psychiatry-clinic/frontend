import{m as p,V as w,b as D,a as h}from"./VWindowItem-CzGebXXx.js";import{a2 as y,bG as C,az as P,aJ as k,bH as x,r as _,w as g,H as S,aa as B,b as t,F as T,bM as L,aj as A,s as o,b1 as R,a8 as U}from"./index-CtKWXR1f.js";import{m as F,V as b}from"./VImg-DZ-rodP_.js";const $=""+new URL("sidebar-pic-1-n1XODnyA.png",import.meta.url).href,H=""+new URL("sidebar-pic-2-BJAycSir.png",import.meta.url).href,j=""+new URL("sidebar-pic-3-BaEz3Jo2.png",import.meta.url).href,N=y({color:String,cycle:Boolean,delimiterIcon:{type:C,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...p({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),q=P()({name:"VCarousel",props:N(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=k(e,"modelValue"),{t:u}=x(),i=_();let c=-1;g(l,m),g(()=>e.interval,m),g(()=>e.cycle,d=>{d?m():window.clearTimeout(c)}),S(f);function f(){!e.cycle||!i.value||(c=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function m(){window.clearTimeout(c),window.requestAnimationFrame(f)}return B(()=>{const d=w.filterProps(e);return t(w,o({ref:i},d,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:U(e.height)},e.style]}),{default:a.default,additional:v=>{let{group:r}=v;return t(T,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[r.items.value.length>0&&t(L,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map((s,I)=>{const V={id:`carousel-item-${s.id}`,"aria-label":u("$vuetify.carousel.ariaLabel.delimiter",I+1,r.items.value.length),class:["v-carousel__controls__item",r.isSelected(s.id)&&"v-btn--active"],onClick:()=>r.select(s.id,!0)};return a.item?a.item({props:V,item:s}):t(A,o(s,V),null)})]})]),e.progress&&t(R,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(r.getItemIndex(l.value)+1)/r.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),W=y({...F(),...D()},"VCarouselItem"),E=P()({name:"VCarouselItem",inheritAttrs:!1,props:W(),setup(e,n){let{slots:a,attrs:l}=n;B(()=>{const u=b.filterProps(e),i=h.filterProps(e);return t(h,o({class:"v-carousel-item"},i),{default:()=>[t(b,o(l,u),a)]})})}});export{q as V,E as a,H as b,j as c,$ as s};
