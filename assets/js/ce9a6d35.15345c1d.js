/*! For license information please see ce9a6d35.15345c1d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19623],{88129:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.page.setbypasscsp","title":"Page.setBypassCSP() method","description":"Toggles bypassing page\'s Content-Security-Policy.","source":"@site/versioned_docs/version-24.4.0/api/puppeteer.page.setbypasscsp.md","sourceDirName":"api","slug":"/api/puppeteer.page.setbypasscsp","permalink":"/api/puppeteer.page.setbypasscsp","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{"sidebar_label":"Page.setBypassCSP"},"sidebar":"api","previous":{"title":"Page.select","permalink":"/api/puppeteer.page.select"},"next":{"title":"Page.setBypassServiceWorker","permalink":"/api/puppeteer.page.setbypassserviceworker"}}');var n=t(74848),a=t(28453);const i={sidebar_label:"Page.setBypassCSP"},p="Page.setBypassCSP() method",o={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"pagesetbypasscsp-method",children:"Page.setBypassCSP() method"})}),"\n",(0,n.jsx)(s.p,{children:"Toggles bypassing page's Content-Security-Policy."}),"\n",(0,n.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"class Page {\n  abstract setBypassCSP(enabled: boolean): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"enabled"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"sets bypassing of page's Content-Security-Policy."})})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(s.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(s.p,{children:["NOTE: CSP bypassing happens at the moment of CSP initialization rather than evaluation. Usually, this means that ",(0,n.jsx)(s.code,{children:"page.setBypassCSP"})," should be called before navigating to the domain."]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,s,t)=>{var r=t(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var r,a={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,r)&&!o.hasOwnProperty(r)&&(a[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:n,type:e,key:l,ref:c,props:a,_owner:p.current}}s.Fragment=a,s.jsx=l,s.jsxs=l},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>p});var r=t(96540);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function p(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);