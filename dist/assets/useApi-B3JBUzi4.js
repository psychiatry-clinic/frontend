import{cc as c,b8 as o,cd as n}from"./index-D5RGqRWX.js";const i=c({baseUrl:"https://new-psychiatry.azurewebsites.net/",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const r=o("accessToken").value;return r&&(e.headers={...e.headers,Authorization:`Bearer ${r}`}),{options:e}},afterFetch(e){const{data:r,response:a}=e;let t=null;try{t=n(r)}catch(s){console.error(s)}return{data:t,response:a}}}});export{i as u};
