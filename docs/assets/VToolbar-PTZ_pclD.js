import{a2 as x,a3 as y,ax as T,az as V,aa as k,b as t,ar as R,at as E,aw as I,ay as w,aB as D,$,aC as z,aE as A,aH as F,aA as K,aK as L,a5 as M,a6 as h,aL as U,bM as u,a8 as o}from"./index-CG4YDle8.js";import{V as j}from"./index-3yW8ycYk.js";import{V as q}from"./VImg-Ceae0joh.js";const G=x({text:String,...y(),...T()},"VToolbarTitle"),J=V()({name:"VToolbarTitle",props:G(),setup(e,n){let{slots:a}=n;return k(()=>{const s=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),O=[null,"prominent","default","comfortable","compact"],Q=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>O.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...R(),...y(),...E(),...I(),...T({tag:"header"}),...w()},"VToolbar"),Z=V()({name:"VToolbar",props:Q(),setup(e,n){var c;let{slots:a}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=D($(e,"color")),{borderClasses:C}=z(e),{elevationClasses:_}=A(e),{roundedClasses:B}=F(e),{themeClasses:P}=K(e),{rtlClasses:S}=L(),i=M(!!(e.extended||(c=a.extension)!=null&&c.call(a))),r=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return U({VBtn:{variant:"text"}}),k(()=>{var g;const N=!!(e.title||a.title),H=!!(a.image||e.image),m=(g=a.extension)==null?void 0:g.call(a);return i.value=!!(e.extended||m),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,C.value,_.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[H&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(q,{key:"image-img",cover:!0,src:e.image},null)]),t(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>{var v,b,f;return[t("div",{class:"v-toolbar__content",style:{height:o(r.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(v=a.prepend)==null?void 0:v.call(a)]),N&&t(J,{key:"title",text:e.title},{text:a.title}),(b=a.default)==null?void 0:b.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(f=a.append)==null?void 0:f.call(a)])])]}}),t(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>[t(j,null,{default:()=>[i.value&&t("div",{class:"v-toolbar__extension",style:{height:o(d.value)}},[m])]})]})]})}),{contentHeight:r,extensionHeight:d}}});export{Z as V,J as a,G as b,Q as m};
