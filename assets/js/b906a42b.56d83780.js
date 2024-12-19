"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[729],{9886:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=t(5893),r=t(1151);const o={},i="Upgrading",a={id:"upgrading",title:"Upgrading",description:"Upgrading consists of two steps - firstly updating the Ansible-NAS code on your Ansible control node, and then running the playbook against your Ubuntu server.",source:"@site/docs/upgrading.md",sourceDirName:".",slug:"/upgrading",permalink:"/docs/upgrading",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/upgrading.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Support",permalink:"/docs/support"}},c={},u=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"upgrading",children:"Upgrading"}),"\n",(0,s.jsx)(e.p,{children:"Upgrading consists of two steps - firstly updating the Ansible-NAS code on your Ansible control node, and then running the playbook against your Ubuntu server."}),"\n",(0,s.jsx)(e.p,{children:"Assuming you haven't changed anything except the files in your inventory directory, you can simply run:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git pull origin main\n"})}),"\n",(0,s.jsx)(e.p,{children:"...to pull the latest updates from GitHub. If you've changed files outside of the inventory directory, you'll need to fix any merge conflicts."}),"\n",(0,s.jsx)(e.p,{children:"To see the effect of running the latest version of Ansible-NAS against your Ubuntu server, you can run Ansible in check mode first:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K -C\n"})}),"\n",(0,s.jsx)(e.p,{children:"Once you're happy, run as normal."})]})}function l(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);