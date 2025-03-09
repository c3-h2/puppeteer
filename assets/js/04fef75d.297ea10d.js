/*! For license information please see 04fef75d.297ea10d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16442],{91603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/pdf-generation","title":"PDF generation","description":"For printing PDFs use Page.pdf().","source":"@site/versioned_docs/version-24.4.0/guides/pdf-generation.md","sourceDirName":"guides","slug":"/guides/pdf-generation","permalink":"/guides/pdf-generation","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{},"sidebar":"docs","previous":{"title":"Screenshots","permalink":"/guides/screenshots"},"next":{"title":"Chrome Extensions","permalink":"/guides/chrome-extensions"}}');var o=t(74848),s=t(28453);const a={},i="PDF generation",p={},d=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"pdf-generation",children:"PDF generation"})}),"\n",(0,o.jsxs)(n.p,{children:["For printing PDFs use ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.pdf",children:(0,o.jsx)(n.code,{children:"Page.pdf()"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://news.ycombinator.com', {\n  waitUntil: 'networkidle2',\n});\n// Saves the PDF to hn.pdf.\nawait page.pdf({\n  path: 'hn.pdf',\n});\n\nawait browser.close();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, the ",(0,o.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.pdf",children:(0,o.jsx)(n.code,{children:"Page.pdf()"})})," waits for fonts to be loaded."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!p.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:c,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);