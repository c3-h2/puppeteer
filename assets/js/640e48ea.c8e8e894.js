/*! For license information please see 640e48ea.c8e8e894.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80090],{31407:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api/puppeteer.target","title":"Target class","description":"Target represents a CDP target. In CDP a target is something that can be debugged such a frame, a page or a worker.","source":"@site/versioned_docs/version-24.4.0/api/puppeteer.target.md","sourceDirName":"api","slug":"/api/puppeteer.target","permalink":"/api/puppeteer.target","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{"sidebar_label":"Target"},"sidebar":"api","previous":{"title":"SecurityDetails.validTo","permalink":"/api/puppeteer.securitydetails.validto"},"next":{"title":"Target.asPage","permalink":"/api/puppeteer.target.aspage"}}');var a=t(74848),n=t(28453);const d={sidebar_label:"Target"},i="Target class",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"target-class",children:"Target class"})}),"\n",(0,a.jsxs)(r.p,{children:["Target represents a ",(0,a.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/tot/Target/",children:"CDP target"}),". In CDP a target is something that can be debugged such a frame, a page or a worker."]}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Target\n"})}),"\n",(0,a.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.jsx)(r.code,{children:"Target"})," class."]}),"\n",(0,a.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Method"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Modifiers"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"aspage",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.aspage",children:"asPage()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["Forcefully creates a page for a target of any type. It is useful if you want to handle a CDP target of type ",(0,a.jsx)(r.code,{children:"other"})," as a page. If you deal with a regular page target, use ",(0,a.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"browser",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.browser",children:"browser()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Get the browser the target belongs to."})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"browsercontext",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.browsercontext",children:"browserContext()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Get the browser context the target belongs to."})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"createcdpsession",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.createcdpsession",children:"createCDPSession()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Creates a Chrome Devtools Protocol session attached to the target."})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"opener",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.opener",children:"opener()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["Get the target that opened this target. Top-level targets return ",(0,a.jsx)(r.code,{children:"null"}),"."]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"page",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"page()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["If the target is not of type ",(0,a.jsx)(r.code,{children:'"page"'}),", ",(0,a.jsx)(r.code,{children:'"webview"'})," or ",(0,a.jsx)(r.code,{children:'"background_page"'}),", returns ",(0,a.jsx)(r.code,{children:"null"}),"."]})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"type",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.type",children:"type()"})})}),(0,a.jsx)("td",{}),(0,a.jsxs)("td",{children:[(0,a.jsx)(r.p,{children:"Identifies what kind of target this is."}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Remarks:"})}),(0,a.jsxs)(r.p,{children:["See ",(0,a.jsx)(r.a,{href:"https://developer.chrome.com/extensions/background_pages",children:"docs"})," for more info about background pages."]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"url",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.url",children:"url()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{id:"worker",children:(0,a.jsx)(r.a,{href:"/api/puppeteer.target.worker",children:"worker()"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["If the target is not of type ",(0,a.jsx)(r.code,{children:'"service_worker"'})," or ",(0,a.jsx)(r.code,{children:'"shared_worker"'}),", returns ",(0,a.jsx)(r.code,{children:"null"}),"."]})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},21020:(e,r,t)=>{var s=t(96540),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var s,n={},o=null,l=null;for(s in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,s)&&!c.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:a,type:e,key:o,ref:l,props:n,_owner:i.current}}r.Fragment=n,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>i});var s=t(96540);const a={},n=s.createContext(a);function d(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);