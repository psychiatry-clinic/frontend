import{t as h,c as k}from"./differenceInYears-BdTDs0wt.js";import{d as p}from"./myFormat-D_0w4-pK.js";function x(t,n){return t instanceof Date?new t.constructor(n):new Date(n)}const T=36e5,w=43200,P=1440;let F={};function X(){return F}function D(t){const n=h(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function A(t){return x(t,Date.now())}function W(t){return n=>{const e=Math.trunc,a=e(n);return a===0?0:a}}function S(t,n){return+h(t)-+h(n)}function yt(t,n,e){const a=S(t,n)/T;return W()(a)}function C(t,n,e){const a=S(t,n)/1e3;return W()(a)}const O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},j=(t,n,e)=>{let a;const r=O[t];return typeof r=="string"?a=r:n===1?a=r.one:a=r.other.replace("{{count}}",n.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+a:a+" ago":a};function v(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const I={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},N={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},V={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Y={date:v({formats:I,defaultWidth:"full"}),time:v({formats:N,defaultWidth:"full"}),dateTime:v({formats:V,defaultWidth:"full"})},z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},q=(t,n,e,a)=>z[t];function g(t){return(n,e)=>{const a=e!=null&&e.context?String(e.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,o=e!=null&&e.width?String(e.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{const i=t.defaultWidth,o=e!=null&&e.width?String(e.width):t.defaultWidth;r=t.values[o]||t.values[i]}const c=t.argumentCallback?t.argumentCallback(n):n;return r[c]}}const J={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},R={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},E={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},H={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},L={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Q={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},_=(t,n)=>{const e=Number(t),a=e%100;if(a>20||a<10)switch(a%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},U={ordinalNumber:_,era:g({values:J,defaultWidth:"wide"}),quarter:g({values:R,defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:E,defaultWidth:"wide"}),day:g({values:H,defaultWidth:"wide"}),dayPeriod:g({values:L,defaultWidth:"wide",formattingValues:Q,defaultFormattingWidth:"wide"})};function b(t){return(n,e={})=>{const a=e.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],c=n.match(r);if(!c)return null;const i=c[0],o=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(o)?K(o,y=>y.test(i)):B(o,y=>y.test(i));let u;u=t.valueCallback?t.valueCallback(d):d,u=e.valueCallback?e.valueCallback(u):u;const l=n.slice(i.length);return{value:u,rest:l}}}function B(t,n){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&n(t[e]))return e}function K(t,n){for(let e=0;e<t.length;e++)if(n(t[e]))return e}function $(t){return(n,e={})=>{const a=n.match(t.matchPattern);if(!a)return null;const r=a[0],c=n.match(t.parsePattern);if(!c)return null;let i=t.valueCallback?t.valueCallback(c[0]):c[0];i=e.valueCallback?e.valueCallback(i):i;const o=n.slice(r.length);return{value:i,rest:o}}}const G=/^(\d+)(th|st|nd|rd)?/i,Z=/\d+/i,tt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},et={any:[/^b/i,/^(a|c)/i]},nt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},at={any:[/1/i,/2/i,/3/i,/4/i]},rt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ot={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},it={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},st={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ut={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ct={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},dt={ordinalNumber:$({matchPattern:G,parsePattern:Z,valueCallback:t=>parseInt(t,10)}),era:b({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),quarter:b({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any",valueCallback:t=>t+1}),month:b({matchPatterns:rt,defaultMatchWidth:"wide",parsePatterns:ot,defaultParseWidth:"any"}),day:b({matchPatterns:it,defaultMatchWidth:"wide",parsePatterns:st,defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:ut,defaultMatchWidth:"any",parsePatterns:ct,defaultParseWidth:"any"})},lt={code:"en-US",formatDistance:j,formatLong:Y,formatRelative:q,localize:U,match:dt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function mt(t,n,e){const a=X(),r=(e==null?void 0:e.locale)??a.locale??lt,c=2520,i=k(t,n);if(isNaN(i))throw new RangeError("Invalid time value");const o=Object.assign({},e,{addSuffix:e==null?void 0:e.addSuffix,comparison:i});let d,u;i>0?(d=h(n),u=h(t)):(d=h(t),u=h(n));const l=C(u,d),y=(D(u)-D(d))/1e3,s=Math.round((l-y)/60);let f;if(s<2)return e!=null&&e.includeSeconds?l<5?r.formatDistance("lessThanXSeconds",5,o):l<10?r.formatDistance("lessThanXSeconds",10,o):l<20?r.formatDistance("lessThanXSeconds",20,o):l<40?r.formatDistance("halfAMinute",0,o):l<60?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",1,o):s===0?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",s,o);if(s<45)return r.formatDistance("xMinutes",s,o);if(s<90)return r.formatDistance("aboutXHours",1,o);if(s<P){const m=Math.round(s/60);return r.formatDistance("aboutXHours",m,o)}else{if(s<c)return r.formatDistance("xDays",1,o);if(s<w){const m=Math.round(s/P);return r.formatDistance("xDays",m,o)}else if(s<w*2)return f=Math.round(s/w),r.formatDistance("aboutXMonths",f,o)}if(f=p(u,d),f<12){const m=Math.round(s/w);return r.formatDistance("xMonths",m,o)}else{const m=f%12,M=Math.trunc(f/12);return m<3?r.formatDistance("aboutXYears",M,o):m<9?r.formatDistance("overXYears",M,o):r.formatDistance("almostXYears",M+1,o)}}function gt(t,n){return mt(t,A(t),n)}export{yt as d,gt as f};
