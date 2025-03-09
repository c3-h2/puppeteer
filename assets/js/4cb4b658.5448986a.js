/*! For license information please see 4cb4b658.5448986a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27521],{54541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.page.setcookie","title":"Page.setCookie() method","description":"Warning: This API is now obsolete.","source":"@site/../docs/api/puppeteer.page.setcookie.md","sourceDirName":"api","slug":"/api/puppeteer.page.setcookie","permalink":"/next/api/puppeteer.page.setcookie","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.setCookie"},"sidebar":"api","previous":{"title":"Page.setContent","permalink":"/next/api/puppeteer.page.setcontent"},"next":{"title":"Page.setDefaultNavigationTimeout","permalink":"/next/api/puppeteer.page.setdefaultnavigationtimeout"}}');var o=r(74848),s=r(28453);const i={sidebar_label:"Page.setCookie"},a="Page.setCookie() method",c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"pagesetcookie-method",children:"Page.setCookie() method"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,o.jsxs)(t.p,{children:["Page-level cookie API is deprecated. Use ",(0,o.jsx)(t.a,{href:"/next/api/puppeteer.browser.setcookie",children:"Browser.setCookie()"})," or ",(0,o.jsx)(t.a,{href:"/next/api/puppeteer.browsercontext.setcookie",children:"BrowserContext.setCookie()"})," instead."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setCookie(...cookies: CookieParam[]): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Parameter"})}),(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Type"})}),(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Description"})})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"cookies"})}),(0,o.jsx)("td",{children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/next/api/puppeteer.cookieparam",children:"CookieParam"}),"[]"]})}),(0,o.jsx)("td",{})]})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"await page.setCookie(cookieObject1, cookieObject2);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},21020:(e,t,r)=>{var n=r(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,s={},p=null,l=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:p,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);