import{_ as z}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{_ as L}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-DZaDyTKZ.js";import{d as _,r as h,a as o,o as w,g as j,f as a,b as e,aB as A,aC as S,v as n,n as u,ad as v,e as C,s as $,c as I,F as N,w as F,i as J}from"./index-B-uKkDM3.js";import{_ as U}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const G=_({__name:"DemoDialogForm",setup(B){const l=h(!1),p=h(""),t=h(""),i=h(""),s=h(""),d=h(""),g=h(),b=h([]);return(r,c)=>{const m=o("VBtn"),x=L,k=z,D=o("VCol"),T=o("VRow"),f=o("VCardText"),P=o("VCard"),y=o("VDialog");return w(),j(y,{modelValue:u(l),"onUpdate:modelValue":c[10]||(c[10]=V=>v(l)?l.value=V:null),"max-width":"600"},{activator:a(({props:V})=>[e(m,A(S(V)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(x,{onClick:c[0]||(c[0]=V=>l.value=!u(l))}),e(P,{title:"User Profile"},{default:a(()=>[e(f,null,{default:a(()=>[e(T,null,{default:a(()=>[e(D,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:u(p),"onUpdate:modelValue":c[1]||(c[1]=V=>v(p)?p.value=V:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(D,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:u(t),"onUpdate:modelValue":c[2]||(c[2]=V=>v(t)?t.value=V:null),label:"Middle Name",placeholder:"peter"},null,8,["modelValue"])]),_:1}),e(D,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(k,{modelValue:u(i),"onUpdate:modelValue":c[3]||(c[3]=V=>v(i)?i.value=V:null),label:"Last Name","persistent-hint":"",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(D,{cols:"12"},{default:a(()=>[e(k,{modelValue:u(s),"onUpdate:modelValue":c[4]||(c[4]=V=>v(s)?s.value=V:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(D,{cols:"12"},{default:a(()=>[e(k,{modelValue:u(d),"onUpdate:modelValue":c[5]||(c[5]=V=>v(d)?d.value=V:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(D,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:u(g),"onUpdate:modelValue":c[6]||(c[6]=V=>v(g)?g.value=V:null),label:"Age",type:"number",placeholder:"18"},null,8,["modelValue"])]),_:1}),e(D,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:u(b),"onUpdate:modelValue":c[7]||(c[7]=V=>v(b)?b.value=V:null),label:"Interests",placeholder:"Sports, Music, Movies"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(m,{variant:"tonal",color:"secondary",onClick:c[8]||(c[8]=V=>l.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(m,{onClick:c[9]||(c[9]=V=>l.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),M=_({__name:"DemoDialogFullscreen",setup(B){const l=h(!1);return(p,t)=>{const i=o("VBtn"),s=o("VIcon"),d=o("VToolbarTitle"),g=o("VSpacer"),b=o("VToolbarItems"),r=o("VToolbar"),c=o("VListSubheader"),m=o("VListItem"),x=o("VList"),k=o("VDivider"),D=o("VCheckbox"),T=o("VListItemAction"),f=o("VCard"),P=o("VDialog");return w(),j(P,{modelValue:u(l),"onUpdate:modelValue":t[2]||(t[2]=y=>v(l)?l.value=y:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:y})=>[e(i,A(S(y)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(f,null,{default:a(()=>[C("div",null,[e(r,{color:"primary"},{default:a(()=>[e(i,{icon:"",variant:"plain",onClick:t[0]||(t[0]=y=>l.value=!1)},{default:a(()=>[e(s,{color:"white",icon:"tabler-x"})]),_:1}),e(d,null,{default:a(()=>[n("Settings")]),_:1}),e(g),e(b,null,{default:a(()=>[e(i,{variant:"text",onClick:t[1]||(t[1]=y=>l.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),e(x,{lines:"two"},{default:a(()=>[e(c,null,{default:a(()=>[n("User Controls")]),_:1}),e(m,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(m,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(k),e(x,{lines:"two","select-strategy":"classic",class:"full-screen-dialog-list"},{default:a(()=>[e(c,null,{default:a(()=>[n("General")]),_:1}),e(m,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:y})=>[e(T,{start:""},{default:a(()=>[e(D,{"model-value":y,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(m,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:y})=>[e(T,{start:""},{default:a(()=>[e(D,{"model-value":y,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(m,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:y})=>[e(T,{start:""},{default:a(()=>[e(D,{"model-value":y,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),q=_({__name:"DemoDialogOverflowed",setup(B){const l=h(!1);return(p,t)=>{const i=o("VBtn"),s=L,d=o("VCardText"),g=o("VCard"),b=o("VDialog");return w(),j(b,{modelValue:u(l),"onUpdate:modelValue":t[3]||(t[3]=r=>v(l)?l.value=r:null),class:"v-dialog-sm"},{activator:a(({props:r})=>[e(i,$({color:"primary"},r),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(s,{onClick:t[0]||(t[0]=r=>l.value=!u(l))}),e(g,{title:"Use Google's location service?"},{default:a(()=>[e(d,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(d,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(i,{color:"secondary",variant:"tonal",onClick:t[1]||(t[1]=r=>l.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(i,{onClick:t[2]||(t[2]=r=>l.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),O=_({__name:"DemoDialogNesting",setup(B){const l=h(!1),p=h(!1);return(t,i)=>{const s=o("VBtn"),d=L,g=o("VCardText"),b=o("VCard"),r=o("VDialog"),c=o("VSpacer");return w(),I(N,null,[e(s,{onClick:i[0]||(i[0]=m=>l.value=!0)},{default:a(()=>[n(" Open Dialog ")]),_:1}),e(r,{modelValue:u(l),"onUpdate:modelValue":i[4]||(i[4]=m=>v(l)?l.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(d,{onClick:i[1]||(i[1]=m=>l.value=!1)}),e(b,{title:"Dialog"},{default:a(()=>[e(g,null,{default:a(()=>[n(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(g,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(s,{variant:"tonal",color:"secondary",onClick:i[2]||(i[2]=m=>l.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(s,{onClick:i[3]||(i[3]=m=>p.value=!u(p))},{default:a(()=>[n(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(r,{modelValue:u(p),"onUpdate:modelValue":i[7]||(i[7]=m=>v(p)?p.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(d,{onClick:i[5]||(i[5]=m=>p.value=!1)}),e(b,{title:"Dialog 2"},{default:a(()=>[e(g,null,{default:a(()=>[n("I'm a nested dialog.")]),_:1}),e(g,{class:"d-flex flex-wrap gap-3"},{default:a(()=>[e(c),e(s,{onClick:i[6]||(i[6]=m=>p.value=!1)},{default:a(()=>[n(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),R=_({__name:"DemoDialogLoader",setup(B){const l=h(!1);return F(l,p=>{p&&setTimeout(()=>{l.value=!1},4e3)}),(p,t)=>{const i=o("VBtn"),s=o("VProgressLinear"),d=o("VCardText"),g=o("VCard"),b=o("VDialog");return w(),I(N,null,[e(i,{disabled:u(l),onClick:t[0]||(t[0]=r=>l.value=!0)},{default:a(()=>[n(" Start loading ")]),_:1},8,["disabled"]),e(b,{modelValue:u(l),"onUpdate:modelValue":t[1]||(t[1]=r=>v(l)?l.value=r:null),width:"300"},{default:a(()=>[e(g,{color:"primary",width:"300"},{default:a(()=>[e(d,{class:"pt-3"},{default:a(()=>[n(" Please stand by "),e(s,{indeterminate:"","bg-color":"rgba(var(--v-theme-surface), 0.1)",height:8,class:"mb-0 mt-4"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),H=_({__name:"DemoDialogScrollable",setup(B){const l=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],p=h(""),t=h(!1);return(i,s)=>{const d=o("VBtn"),g=L,b=o("VCardTitle"),r=o("VCardItem"),c=o("VDivider"),m=o("VRadio"),x=o("VRadioGroup"),k=o("VCardText"),D=o("VCard"),T=o("VDialog");return w(),j(T,{modelValue:u(t),"onUpdate:modelValue":s[4]||(s[4]=f=>v(t)?t.value=f:null),scrollable:"","max-width":"350","content-class":"scrollable-dialog"},{activator:a(({props:f})=>[e(d,A(S(f)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(g,{onClick:s[0]||(s[0]=f=>t.value=!u(t))}),e(D,null,{default:a(()=>[e(r,{class:"pb-5"},{default:a(()=>[e(b,null,{default:a(()=>[n("Select Country")]),_:1})]),_:1}),e(c),e(k,{style:{"block-size":"300px"}},{default:a(()=>[e(x,{modelValue:u(p),"onUpdate:modelValue":s[1]||(s[1]=f=>v(p)?p.value=f:null),inline:!1},{default:a(()=>[(w(),I(N,null,J(l,f=>e(m,{key:f.label,label:f.label,value:f.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(c),e(k,{class:"d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible"},{default:a(()=>[e(d,{color:"secondary",variant:"tonal",onClick:s[2]||(s[2]=f=>t.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(d,{onClick:s[3]||(s[3]=f=>t.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),W=_({__name:"DemoDialogPersistent",setup(B){const l=h(!1);return(p,t)=>{const i=o("VBtn"),s=L,d=o("VCardText"),g=o("VCard"),b=o("VDialog");return w(),j(b,{modelValue:u(l),"onUpdate:modelValue":t[3]||(t[3]=r=>v(l)?l.value=r:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:r})=>[e(i,A(S(r)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(s,{onClick:t[0]||(t[0]=r=>l.value=!u(l))}),e(g,{title:"Use Google's location service?"},{default:a(()=>[e(d,null,{default:a(()=>[n(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(d,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(i,{color:"secondary",variant:"tonal",onClick:t[1]||(t[1]=r=>l.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(i,{onClick:t[2]||(t[2]=r=>l.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),E=_({__name:"DemoDialogBasic",setup(B){const l=h(!1);return(p,t)=>{const i=o("VBtn"),s=L,d=o("VCardText"),g=o("VCard"),b=o("VDialog");return w(),j(b,{modelValue:u(l),"onUpdate:modelValue":t[2]||(t[2]=r=>v(l)?l.value=r:null),width:"500"},{activator:a(({props:r})=>[e(i,A(S(r)),{default:a(()=>[n(" Click Me ")]),_:2},1040)]),default:a(()=>[e(s,{onClick:t[0]||(t[0]=r=>l.value=!u(l))}),e(g,{title:"Privacy Policy"},{default:a(()=>[e(d,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(d,{class:"d-flex justify-end"},{default:a(()=>[e(i,{onClick:t[1]||(t[1]=r=>l.value=!1)},{default:a(()=>[n(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),K={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Q={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},X={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
        class="full-screen-dialog-list"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
        class="full-screen-dialog-list"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},Y={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          bg-color="rgba(var(--v-theme-surface), 0.1)"
          :height="8"
          class="mb-0 mt-4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          bg-color="rgba(var(--v-theme-surface), 0.1)"
          :height="8"
          class="mb-0 mt-4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Z={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ee={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ae={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},le={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },
  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },
  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
    content-class="scrollable-dialog"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
</style>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
    content-class="scrollable-dialog"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
</style>
`},oe=C("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),te=C("p",null,[n("Use "),C("code",null,"persistent"),n(" prop to create persistent dialog.")],-1),ie=C("p",null,[n("Use "),C("code",null,"scrollable"),n(" prop to create scrollable dialog.")],-1),se=C("p",null,[n("The "),C("code",null,"v-dialog"),n(" component makes it easy to create a customized loading experience for your application.")],-1),ne=C("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),re=C("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),ce=C("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),de=C("p",null,"Just a simple example of a form in a dialog.",-1),Ve=_({__name:"dialog",setup(B){return(l,p)=>{const t=E,i=U,s=o("VCol"),d=W,g=H,b=R,r=O,c=q,m=M,x=G,k=o("VRow");return w(),j(k,null,{default:a(()=>[e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Basic",code:K},{default:a(()=>[oe,e(t)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Persistent",code:ae},{default:a(()=>[te,e(d)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Scrollable",code:le},{default:a(()=>[ie,e(g)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Loader",code:Y},{default:a(()=>[se,e(b)]),_:1},8,["code"])]),_:1}),e(s,{col:"12",md:"6"},{default:a(()=>[e(i,{title:"Nesting",code:Z},{default:a(()=>[ne,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Overflowed",code:ee},{default:a(()=>[re,e(c)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Fullscreen",code:X},{default:a(()=>[ce,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Form",code:Q},{default:a(()=>[de,e(x)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ve as default};
