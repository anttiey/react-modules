import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{M as I,a as L,b as _,c as k}from"./ModalLayout-YyEbnWtp.js";import{T as q}from"./Title-CH_s7XQj.js";import{I as v}from"./Input-tzrDsM2y.js";import{B as w}from"./Button-Dnr9SpnO.js";import{C as R}from"./CloseButton-C6YghdlT.js";import"./AlertModal-BSaSEnv3.js";import"./ConfirmModal-CC6uE0vq.js";import"./PromptModal-kTqEs2Rm.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const r=Object.assign(I,{Title:q,Input:v,Button:w,CloseButton:R,Header:L,Body:_,Footer:k}),Y={title:"MainModal",component:r,parameters:{controls:{exclude:["close","children"]}},decorators:[E=>e.jsx("div",{style:{height:"500px"},children:e.jsx(E,{})})],argTypes:{position:{options:["center","bottom","top"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}},backdropType:{options:["transparent","blur","opaque"],control:{type:"radio"}},shadow:{control:{type:"boolean"}},animation:{control:{type:"boolean"}}}},o=e.jsxs(e.Fragment,{children:[e.jsx(r.Header,{children:e.jsx(r.Title,{children:"모달 테스트"})}),e.jsx(r.Body,{children:"모달 내용"}),e.jsxs(r.Footer,{children:[e.jsx(r.Button,{text:"확인"}),e.jsx(r.Button,{text:"닫기",mode:"secondary"})]})]}),s={args:{isOpen:!0,children:o}},n={args:{position:"top",isOpen:!0,children:o}},t={args:{position:"center",isOpen:!0,children:o}},a={args:{position:"bottom",isOpen:!0,children:o}},i={args:{position:"center",size:"sm",isOpen:!0,children:o}},c={args:{position:"center",size:"md",isOpen:!0,children:o}},p={args:{position:"center",size:"lg",isOpen:!0,children:o}};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: childrenSample
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: 'top',
    isOpen: true,
    children: childrenSample
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,S,O;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    position: 'center',
    isOpen: true,
    children: childrenSample
  }
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var j,y,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    isOpen: true,
    children: childrenSample
  }
}`,...(M=(y=a.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var B,b,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'sm',
    isOpen: true,
    children: childrenSample
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var z,T,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'md',
    isOpen: true,
    children: childrenSample
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var F,H,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'lg',
    isOpen: true,
    children: childrenSample
  }
}`,...(D=(H=p.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const Z=["Default","Top","Center","Bottom","Small","Medium","Large"];export{a as Bottom,t as Center,s as Default,p as Large,c as Medium,i as Small,n as Top,Z as __namedExportsOrder,Y as default};
