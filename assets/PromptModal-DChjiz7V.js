import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{M as u,a as m,b as p,c as d}from"./ModalLayout-DbURgAiP.js";import{T as c}from"./Title-CH_s7XQj.js";import{I as y}from"./Input-E5SnQE0W.js";import{B as n}from"./Button-ClUyEfuz.js";const g=({headerText:a,primaryButtonText:r="확인",secondaryButtonText:i="취소",inputValue:s,onInputChange:o,onConfirm:l,...t})=>e.jsxs(u,{...t,children:[e.jsx(m,{children:e.jsx(c,{children:a})}),e.jsx(p,{children:e.jsx(y,{type:"text",value:s,onChange:o})}),e.jsxs(d,{align:"right",children:[e.jsx(n,{type:"button",text:i,mode:"secondary",size:"sm",onClick:t.close}),e.jsx(n,{type:"button",text:r,size:"sm",onClick:l})]})]});g.__docgenInfo={description:"",methods:[],displayName:"PromptModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:"'center' | 'bottom' | 'top'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:""},backdropType:{required:!1,tsType:{name:"union",raw:"'transparent' | 'blur' | 'opaque'",elements:[{name:"literal",value:"'transparent'"},{name:"literal",value:"'blur'"},{name:"literal",value:"'opaque'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},animation:{required:!1,tsType:{name:"boolean"},description:""},headerText:{required:!0,tsType:{name:"string"},description:""},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'확인'",computed:!1}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'취소'",computed:!1}},inputValue:{required:!0,tsType:{name:"string"},description:""},onInputChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{g as P};