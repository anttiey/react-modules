import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{T as J}from"./Title-CH_s7XQj.js";import{B as P}from"./Button-D0BP9G98.js";import{C as Q}from"./CloseButton-DiOEMVPz.js";import{r as U}from"./index-uubelm5h.js";const W=()=>{const e=window.scrollY;return document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${e}px`,document.body.style.overflowY="scroll",e},X=e=>{document.body.style.position="",document.body.style.width="",document.body.style.top="",document.body.style.overflowY="",window.scrollTo(0,e)},Z="_modalHeader_g1yij_1",ee="_modalBody_g1yij_6",oe="_modalFooter_g1yij_12",te="_row_g1yij_16",re="_column_g1yij_22",ae="_modalLayout_g1yij_28",se="_center_g1yij_38",ne="_bottom_g1yij_42",de="_top_g1yij_46",ce="_modalBackdrop_g1yij_50",le="_animation_g1yij_58",ie="_fadeIn_g1yij_1",pe="_transparent_g1yij_62",ue="_opaque_g1yij_66",me="_blur_g1yij_70",ye="_modalContainer_g1yij_75",_e="_slideIn_g1yij_1",ge="_sm_g1yij_88",fe="_md_g1yij_92",he="_lg_g1yij_96",je="_shadow_g1yij_116",t={modalHeader:Z,modalBody:ee,modalFooter:oe,row:te,column:re,modalLayout:ae,center:se,bottom:ne,top:de,modalBackdrop:ce,animation:le,fadeIn:ie,transparent:pe,opaque:ue,blur:me,modalContainer:ye,slideIn:_e,sm:ge,md:fe,lg:he,shadow:je},F=({children:e})=>o.jsx("header",{className:t.modalHeader,children:e}),H=({children:e})=>o.jsx("main",{className:t.modalBody,children:e}),L=({children:e,direction:s="column"})=>o.jsx("footer",{className:`${t.modalFooter} ${t[s]}`,children:e}),m=({isOpen:e,close:s,children:E,position:y="center",size:Y="lg",backdropType:D="opaque",shadow:K=!0,animation:_=!0})=>(U.useEffect(()=>{if(!e)return;const g=G=>{G.key==="Escape"&&s()},A=W();return document.addEventListener("keydown",g),()=>{X(A),document.removeEventListener("keydown",g)}},[e,s]),e?o.jsxs("div",{className:`${t.modalLayout} ${t[y]} ${_?t.animation:""}`,children:[o.jsx("div",{onClick:s,className:`${t.modalBackdrop} ${t[D]}`}),o.jsx("div",{className:`${t.modalContainer} ${t[Y]} ${t[y]} ${K?t.shadow:""} ${_?t.animation:""}`,children:E})]}):null);F.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};H.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{defaultValue:{value:"'column'",computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:"'center'",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},backdropType:{defaultValue:{value:"'opaque'",computed:!1},required:!1},shadow:{defaultValue:{value:"true",computed:!1},required:!1},animation:{defaultValue:{value:"true",computed:!1},required:!1}}};const r=Object.assign(m,{Title:J,Button:P,CloseButton:Q,Header:F,Body:H,Footer:L});m.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:"'center'",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},backdropType:{defaultValue:{value:"'opaque'",computed:!1},required:!1},shadow:{defaultValue:{value:"true",computed:!1},required:!1},animation:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ne={title:"Modal",component:r,parameters:{controls:{exclude:["close","children"]}},decorators:[e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(e,{})})],argTypes:{position:{options:["center","bottom","top"],control:{type:"select"}},size:{options:["sm","md","lg"],control:{type:"select"}},backdropType:{options:["transparent","blur","opaque"],control:{type:"select"}},shadow:{control:{type:"boolean"}},animation:{control:{type:"boolean"}}}},a=o.jsxs(o.Fragment,{children:[o.jsx(r.Header,{children:o.jsx(r.Title,{children:"모달 테스트"})}),o.jsx(r.Body,{children:"모달 내용"}),o.jsxs(r.Footer,{children:[o.jsx(r.Button,{text:"확인"}),o.jsx(r.Button,{text:"닫기",mode:"secondary"})]})]}),n={args:{isOpen:!0,close:()=>{},children:a}},d={args:{position:"top",isOpen:!0,close:()=>{},children:a}},c={args:{position:"center",isOpen:!0,close:()=>{},children:a}},l={args:{position:"bottom",isOpen:!0,close:()=>{},children:a}},i={args:{position:"center",size:"sm",isOpen:!0,close:()=>{},children:a}},p={args:{position:"center",size:"md",isOpen:!0,close:()=>{},children:a}},u={args:{position:"center",size:"lg",isOpen:!0,close:()=>{},children:a}};var f,h,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,x,b;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: 'top',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var q,v,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: 'center',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var R,S,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var M,T,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'sm',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(O=(T=i.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var $,k,I;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'md',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(I=(k=p.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var V,z,C;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'lg',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const Re=["Default","Top","Center","Bottom","Small","Medium","Large"];export{l as Bottom,c as Center,n as Default,u as Large,p as Medium,i as Small,d as Top,Re as __namedExportsOrder,Ne as default};
