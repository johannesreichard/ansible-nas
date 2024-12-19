"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1480],{6469:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(5893),a=t(1151);const i={title:"Joomla",description:"An award-winning content management system"},s=void 0,l={id:"applications/content-management/joomla",title:"Joomla",description:"An award-winning content management system",source:"@site/docs/applications/content-management/joomla.md",sourceDirName:"applications/content-management",slug:"/applications/content-management/joomla",permalink:"/docs/applications/content-management/joomla",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/content-management/joomla.md",tags:[],version:"current",frontMatter:{title:"Joomla",description:"An award-winning content management system"},sidebar:"tutorialSidebar",previous:{title:"Dokuwiki",permalink:"/docs/applications/content-management/dokuwiki"},next:{title:"TiddlyWiki",permalink:"/docs/applications/content-management/tiddlywiki"}},r={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Homepage: ",(0,o.jsx)(e.a,{href:"https://www.joomla.org",children:"https://www.joomla.org"})]}),"\n",(0,o.jsx)(e.p,{children:"Joomla! is an award-winning content management system (CMS), which enables you to build web sites and powerful online applications."}),"\n",(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:["Set ",(0,o.jsx)(e.code,{children:"joomla_enabled: true"})," in your ",(0,o.jsx)(e.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,o.jsxs)(e.p,{children:["If you want to access Joomla externally, set ",(0,o.jsx)(e.code,{children:"joomla_available_externally: true"})," in your ",(0,o.jsx)(e.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,o.jsxs)(e.p,{children:["The Joomla web interface can be found at ",(0,o.jsx)(e.a,{href:"http://ansible_nas_host_or_ip:8181",children:"http://ansible_nas_host_or_ip:8181"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Set ",(0,o.jsx)(e.code,{children:"joomla_database_password"})," in your ",(0,o.jsx)(e.code,{children:"all.yml"})," before installing Joomla."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"On first run you'll need to enter database details:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Host: ",(0,o.jsx)(e.code,{children:"mysql"})]}),"\n",(0,o.jsxs)(e.li,{children:["Database: ",(0,o.jsx)(e.code,{children:"joomla"})]}),"\n",(0,o.jsxs)(e.li,{children:["Username: ",(0,o.jsx)(e.code,{children:"root"})]}),"\n",(0,o.jsxs)(e.li,{children:["Password: whatever you set for ",(0,o.jsx)(e.code,{children:"joomla_database_password"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>s});var o=t(7294);const a={},i=o.createContext(a);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);