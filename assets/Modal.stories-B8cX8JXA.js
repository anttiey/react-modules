import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{T as J}from"./Title-CH_s7XQj.js";import{B as Q}from"./Button-cxOQnaNf.js";import{C as U}from"./CloseButton-B4wg4l9N.js";import{r as m}from"./index-uubelm5h.js";const W=(e,o)=>{m.useEffect(()=>{if(!e)return;const n=s=>{s.key==="Escape"&&o()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,o])},X=()=>{const e=window.scrollY;return document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=`-${e}px`,document.body.style.overflowY="scroll",e},Z=e=>{document.body.style.position="",document.body.style.width="",document.body.style.top="",document.body.style.overflowY="",window.scrollTo(0,e)},ee=e=>{m.useEffect(()=>{if(!e)return;const o=X();return()=>Z(o)},[e])},K=(e,o=[])=>(!e||e.childNodes.length===0||e.childNodes.forEach(n=>{const s=n;s.nodeType===Node.ELEMENT_NODE&&s.tabIndex>=0&&o.push(s),K(s,o)}),o),oe=(e,o)=>{const n=m.useRef([]);m.useEffect(()=>{if(!e)return;n.current=K(o.current);const s=n.current[0],i=n.current.at(-1);let c=-1;const x=()=>{const a=n.current[c-1];if(!a){c=n.current.length-1,i==null||i.focus();return}c--,a.focus()},p=()=>{const a=n.current[c+1];if(!a){c=0,s==null||s.focus();return}c++,a.focus()},u=a=>{a.preventDefault(),a.key==="Tab"&&(a.shiftKey?x():p())};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e])},te="_modalHeader_g1yij_1",re="_modalBody_g1yij_6",ne="_modalFooter_g1yij_12",se="_row_g1yij_16",ae="_column_g1yij_22",ce="_modalLayout_g1yij_28",de="_center_g1yij_38",le="_bottom_g1yij_42",ie="_top_g1yij_46",ue="_modalBackdrop_g1yij_50",me="_animation_g1yij_58",pe="_fadeIn_g1yij_1",fe="_transparent_g1yij_62",ye="_opaque_g1yij_66",_e="_blur_g1yij_70",ge="_modalContainer_g1yij_75",he="_slideIn_g1yij_1",je="_sm_g1yij_88",we="_md_g1yij_92",xe="_lg_g1yij_96",be="_shadow_g1yij_116",r={modalHeader:te,modalBody:re,modalFooter:ne,row:se,column:ae,modalLayout:ce,center:de,bottom:le,top:ie,modalBackdrop:ue,animation:me,fadeIn:pe,transparent:fe,opaque:ye,blur:_e,modalContainer:ge,slideIn:he,sm:je,md:we,lg:xe,shadow:be},P=({children:e})=>t.jsx("header",{className:r.modalHeader,children:e}),A=({children:e})=>t.jsx("main",{className:r.modalBody,children:e}),G=({children:e,direction:o="column"})=>t.jsx("footer",{className:`${r.modalFooter} ${r[o]}`,children:e}),b=({isOpen:e,close:o,children:n,position:s="center",size:i="lg",backdropType:c="opaque",shadow:x=!0,animation:p=!0})=>{const u=m.useRef(null);return W(e,o),ee(e),oe(e,u),e?t.jsxs("div",{ref:u,className:`${r.modalLayout} ${r[s]} ${p?r.animation:""}`,children:[t.jsx("div",{onClick:o,className:`${r.modalBackdrop} ${r[c]}`}),t.jsx("div",{className:`${r.modalContainer} ${r[i]} ${r[s]} ${x?r.shadow:""} ${p?r.animation:""}`,children:n})]}):null};P.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};G.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{defaultValue:{value:"'column'",computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:"'center'",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},backdropType:{defaultValue:{value:"'opaque'",computed:!1},required:!1},shadow:{defaultValue:{value:"true",computed:!1},required:!1},animation:{defaultValue:{value:"true",computed:!1},required:!1}}};const d=Object.assign(b,{Title:J,Button:Q,CloseButton:U,Header:P,Body:A,Footer:G});b.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{defaultValue:{value:"'center'",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},backdropType:{defaultValue:{value:"'opaque'",computed:!1},required:!1},shadow:{defaultValue:{value:"true",computed:!1},required:!1},animation:{defaultValue:{value:"true",computed:!1},required:!1}}};const Be={title:"Modal",component:d,parameters:{controls:{exclude:["close","children"]}},decorators:[e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(e,{})})],argTypes:{position:{options:["center","bottom","top"],control:{type:"select"}},size:{options:["sm","md","lg"],control:{type:"select"}},backdropType:{options:["transparent","blur","opaque"],control:{type:"select"}},shadow:{control:{type:"boolean"}},animation:{control:{type:"boolean"}}}},l=t.jsxs(t.Fragment,{children:[t.jsx(d.Header,{children:t.jsx(d.Title,{children:"모달 테스트"})}),t.jsx(d.Body,{children:"모달 내용"}),t.jsxs(d.Footer,{children:[t.jsx(d.Button,{text:"확인"}),t.jsx(d.Button,{text:"닫기",mode:"secondary"})]})]}),f={args:{isOpen:!0,close:()=>{},children:l}},y={args:{position:"top",isOpen:!0,close:()=>{},children:l}},_={args:{position:"center",isOpen:!0,close:()=>{},children:l}},g={args:{position:"bottom",isOpen:!0,close:()=>{},children:l}},h={args:{position:"center",size:"sm",isOpen:!0,close:()=>{},children:l}},j={args:{position:"center",size:"md",isOpen:!0,close:()=>{},children:l}},w={args:{position:"center",size:"lg",isOpen:!0,close:()=>{},children:l}};var v,N,R;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,S,B;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: 'top',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(B=(S=y.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,E,M;_.parameters={..._.parameters,docs:{...(T=_.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    position: 'center',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(M=(E=_.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,F,I;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(I=(F=g.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var $,L,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'sm',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(O=(L=h.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var V,z,C;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'md',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(C=(z=j.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var H,D,Y;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    position: 'center',
    size: 'lg',
    isOpen: true,
    close: () => {},
    children: childrenSample
  }
}`,...(Y=(D=w.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};const Te=["Default","Top","Center","Bottom","Small","Medium","Large"];export{g as Bottom,_ as Center,f as Default,w as Large,j as Medium,h as Small,y as Top,Te as __namedExportsOrder,Be as default};
