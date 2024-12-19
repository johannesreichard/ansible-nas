"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1526],{5945:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=s(5893),t=s(1151);const i={title:"Transmission"},r=void 0,a={id:"applications/download-tools/transmission",title:"Transmission",description:"Homepage//transmissionbt.com/",source:"@site/docs/applications/download-tools/transmission.md",sourceDirName:"applications/download-tools",slug:"/applications/download-tools/transmission",permalink:"/docs/applications/download-tools/transmission",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/download-tools/transmission.md",tags:[],version:"current",frontMatter:{title:"Transmission"},sidebar:"tutorialSidebar",previous:{title:"Sonarr",permalink:"/docs/applications/download-tools/sonarr"},next:{title:"uTorrent",permalink:"/docs/applications/download-tools/utorrent"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function p(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Homepage: ",(0,o.jsx)(e.a,{href:"https://transmissionbt.com/",children:"https://transmissionbt.com/"})]}),"\n",(0,o.jsx)(e.p,{children:"Transmission is a free BitTorrent client. Two versions are provided - one that tunnels through OpenVPN and one that connects\ndirectly."}),"\n",(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(e.p,{children:["Set ",(0,o.jsx)(e.code,{children:"transmission_enabled: true"}),", or ",(0,o.jsx)(e.code,{children:"transmission_with_openvpn_enabled: true"})," in your ",(0,o.jsx)(e.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,o.jsxs)(e.p,{children:["Transmission's web interface can be found at ",(0,o.jsx)(e.a,{href:"http://ansible_nas_host_or_ip:9091",children:"http://ansible_nas_host_or_ip:9091"})," (with OpenVPN) or ",(0,o.jsx)(e.a,{href:"http://ansible_nas_host_or_ip:9092",children:"http://ansible_nas_host_or_ip:9092"})," (without OpenVPN)."]}),"\n",(0,o.jsx)(e.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,o.jsxs)(e.p,{children:["If you enable Transmission with OpenVPN, you'll need to add the following to your inventory ",(0,o.jsx)(e.code,{children:"all.yml"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:"openvpn_username: super_secret_username\nopenvpn_password: super_secret_password\nopenvpn_provider: NORDVPN\nopenvpn_config: uk686.nordvpn.com.udp\n"})}),"\n",(0,o.jsxs)(e.p,{children:["See ",(0,o.jsx)(e.a,{href:"https://hub.docker.com/r/haugene/transmission-openvpn/",children:"https://hub.docker.com/r/haugene/transmission-openvpn/"})," for supported VPN providers."]})]})}function d(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>r});var o=s(7294);const t={},i=o.createContext(t);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);