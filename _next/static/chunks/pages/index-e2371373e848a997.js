(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{84875:function(e,t){var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var l=typeof s;if("string"===l||"number"===l)e.push(s);else if(Array.isArray(s)){if(s.length){var c=r.apply(null,s);c&&e.push(c)}}else if("object"===l){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var a in s)n.call(s,a)&&s[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(s=(function(){return r}).apply(t,[]))&&(e.exports=s)}()},44565:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(82536)}])},51903:function(e,t,s){"use strict";var n=s(11527),r=s(98777),l=s.n(r);s(91206),t.Z=e=>{let{date:t}=e;return(0,n.jsx)("div",{className:"text-stone-500 text-xs lg:text-sm",children:l()(t).format("YYYY년 MM월 DD일")})}},4830:function(e,t,s){"use strict";s.d(t,{Z:function(){return v}});var n=s(11527),r=s(7965),l=s.n(r),c=s(99705),a=s.n(c),i=s(77020),o=s(51903),d=s(84875),x=s.n(d);let u=e=>{let{isActive:t,children:s,url:r}=e;return(0,n.jsx)(l(),{href:r,children:(0,n.jsx)("div",{className:x()("bg-stone-100 w-6 h-6 rounded-full flex-center text-sm",t&&"font-bold bg-indigo-100 text-indigo-500"),children:(0,n.jsx)("span",{children:s})})})};var h=e=>{let{baseUrl:t,page:s=1,total:r=1,perPage:l=5}=e;return(0,n.jsx)("div",{className:"flex-center space-x-4 py-8",children:[...Array(Math.ceil(r/l))].map((e,r)=>(0,n.jsx)(u,{isActive:s===r+1,url:"".concat(t,"/").concat(r+1),children:r+1},"page-item-".concat(r+1)))})};let f=e=>{let{title:t}=e;return(0,n.jsx)("div",{className:"font-bold text-lg lg:text-2xl leading-tight",children:t})},p=e=>{let{desc:t}=e;return(0,n.jsx)("div",{className:"text-stone-500 text-sm lg:text-base",children:(0,i.rQ)(t,60)})},j=e=>{let{tag:t}=e;return(0,n.jsx)(l(),{href:"/tags/".concat(t),children:(0,n.jsxs)("div",{className:"text-indigo-500 text-sm lg:text-base font-semibold cursor-pointer",children:["#",t]})})},g=e=>{let{post:t}=e,{id:s,title:r,desc:c,tag:i,tag2:d,tag3:x,wdate:u,thumbData:h}=t||{},{url:g,extension:v,alt:m}=h||{};return(0,n.jsxs)("div",{className:"flex-between space-x-4 lg:space-x-8 border-black border rounded-lg p-4 items-start",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-1 lg:space-y-2",children:[(0,n.jsx)(l(),{href:"/".concat(s),children:(0,n.jsx)(f,{title:r})}),(0,n.jsx)(p,{desc:c}),(0,n.jsxs)("div",{className:"flex-left space-x-4",children:[(0,n.jsx)(j,{tag:i}),d&&(0,n.jsx)("div",{className:"hidden lg:block",children:(0,n.jsx)(j,{tag:d})}),x&&(0,n.jsx)("div",{className:"hidden lg:block",children:(0,n.jsx)(j,{tag:x})}),(0,n.jsx)(o.Z,{date:u})]})]}),h&&(0,n.jsx)(l(),{href:"/".concat(s),children:(0,n.jsx)("div",{className:"w-[150px] h-[100px] lg:w-[200px] lg:h-[134px] shrink-0 bg-stone-400 overflow-hidden rounded-lg",children:(0,n.jsx)(a(),{src:"".concat(g,".").concat(v),alt:m,quality:80,width:200,height:134})})})]})};var v=e=>{let{tag:t,page:s=1,total:r,perPage:l,title:c,posts:a}=e;return(0,n.jsxs)("div",{className:"mx-auto max-w-3xl px-4 py-8 lg:py-16",children:[c&&(0,n.jsx)("div",{className:"font-bold text-3xl mb-8",children:c}),(0,n.jsx)("div",{className:"flex flex-col space-y-4 lg:space-y-8",children:a&&(null==a?void 0:a.map(e=>(0,n.jsx)(g,{post:e},"post-".concat(e.id))))}),(0,n.jsx)(h,{baseUrl:t?"/tags/".concat(t):"/p",page:s,total:r,perPage:l})]})}},70866:function(e,t,s){"use strict";var n=s(11527),r=s(7965),l=s.n(r),c=s(95799),a=s(43294);let i=()=>{let{siteIcon:e,siteName:t}=(0,c.ZP)();return(0,n.jsx)(l(),{href:"/",children:(0,n.jsxs)("div",{className:"flex-left space-x-2 cursor-pointer",children:[(0,n.jsx)("div",{className:"flex-center h-[24px] w-[24px] rounded bg-black",children:(0,n.jsx)("span",{className:" text-white font-bold text-sm",children:e})}),(0,n.jsx)("div",{className:"font-bold text-xl",children:t})]})})},o=()=>(0,n.jsx)("div",{className:"border-b border-black",children:(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{className:"h-[60px] flex-between",children:(0,n.jsx)(i,{})})})}),d=()=>{let{copyright:e}=(0,c.ZP)();return(0,n.jsx)("div",{className:"border-t border-black py-4 lg:py-8",children:(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"flex-between text-sm text-black",children:[(0,n.jsx)("div",{className:"",children:e}),(0,n.jsxs)("div",{className:"flex-left space-x-8 ",children:[(0,n.jsx)(l(),{href:"/terms",children:(0,n.jsx)("div",{className:"hover:underline",children:"Terms"})}),(0,n.jsx)(l(),{href:"/privacy",children:(0,n.jsx)("div",{className:"hover:underline",children:"Privacy"})})]})]})})})};t.Z=e=>{let{children:t}=e;return(0,n.jsxs)("div",{className:"w-full min-h-screen flex flex-col",children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"flex-grow",children:t}),(0,n.jsx)(d,{})]})}},43294:function(e,t,s){"use strict";var n=s(11527);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"w-full mx-auto max-w-7xl px-4",children:t})}},92622:function(e,t,s){"use strict";var n=s(11527),r=s(70866),l=s(4830);t.Z=e=>{let{...t}=e;return(0,n.jsx)(r.Z,{children:(0,n.jsx)(l.Z,{...t})})}},77020:function(e,t,s){"use strict";s.d(t,{rQ:function(){return n}});let n=(e,t)=>e?e.length<t?e:e.slice(0,t)+"...":e},82536:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return a},default:function(){return i}});var n=s(11527),r=s(92622),l=s(32023),c=s(39017),a=!0;function i(e){let{data:t}=(0,c.useQuery)(["posts","page",1],l.Jq,{initialData:e.data});return(0,n.jsx)(r.Z,{page:1,total:t.length,perPage:5,posts:t.slice(0,5)})}},32023:function(e,t,s){"use strict";s.d(t,{J4:function(){return l},Jq:function(){return r},it:function(){return a},u_:function(){return c}});let n="http://127.0.0.1:8000/api",r=async()=>{let e=await fetch("".concat(n,"/blog/posts")),t=await e.json();return t},l=async e=>{let t=await fetch("".concat(n,"/blog/posts/tag/").concat(e)),s=await t.json();return s},c=async e=>{let t=await fetch("".concat(n,"/blog/post/").concat(e)),s=await t.json();return s},a=async e=>{let t=await fetch("".concat(n,"/blog/page/").concat(e)),s=await t.json();return s}}},function(e){e.O(0,[964,965,726,774,888,179],function(){return e(e.s=44565)}),_N_E=e.O()}]);
//# sourceMappingURL=index-e2371373e848a997.js.map