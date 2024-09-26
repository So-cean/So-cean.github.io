import{d as j}from"./datasetinfo-DQ6rqaU3.js";import{d as D}from"./trainingpara-4xAYGu1R.js";import{f as E,j as I,_ as L,r as V,o as i,c as s,a as t,d as u,b as o,t as a,i as m}from"./app-BPWcID4_.js";const N=E({__name:"InfoSection",props:{datasetinfo:{},trainingpara:{}},setup(_,{expose:n}){n();const r=_,e={...j,...r.datasetinfo},b={...D,...r.trainingpara},c=I(()=>e.description||""),l=I(()=>Object.entries(e.label).map(([d,f])=>`${d}: ${f}`).join(", ")),p={props:r,datasetinfo:e,trainingpara:b,descriptionText:c,labelsText:l};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),B={class:"info-section"},O={class:"info-box"},P={class:"info-card"},R={class:"info-box"},q={key:0},w={key:1},z={key:2},A={key:3};function F(_,n,r,e,b,c){var d,f,g,x,v,T,S,k,C,y;const l=V("CollapsibleText"),p=V("CommentService");return i(),s("div",B,[t("div",O,[n[6]||(n[6]=t("h4",{class:"info-title"},"Dataset Information",-1)),t("div",P,[u(l,{text:e.descriptionText,maxLines:4},null,8,["text"]),t("p",null,[n[0]||(n[0]=t("b",null,"Task:",-1)),o(" "+a((d=e.datasetinfo)==null?void 0:d.task),1)]),n[4]||(n[4]=t("p",null,[t("b",null,"Labels:")],-1)),u(l,{text:e.labelsText,maxLines:4},null,8,["text"]),n[5]||(n[5]=t("p",null,[t("b",null,"Samples:")],-1)),t("ul",null,[t("li",null,[n[1]||(n[1]=t("b",null,"Train:",-1)),o(" "+a((f=e.datasetinfo)==null?void 0:f.n_samples.train),1)]),t("li",null,[n[2]||(n[2]=t("b",null,"Validation:",-1)),o(" "+a((g=e.datasetinfo)==null?void 0:g.n_samples.validation),1)]),t("li",null,[n[3]||(n[3]=t("b",null,"Test:",-1)),o(" "+a((x=e.datasetinfo)==null?void 0:x.n_samples.test),1)])])])]),t("div",R,[n[11]||(n[11]=t("h4",{class:"info-title"},"Experiment Parameter",-1)),e.trainingpara?(i(),s("p",q,[n[7]||(n[7]=t("b",null,"Learning Rate:",-1)),o(" "+a((v=e.trainingpara)==null?void 0:v.learning_rate),1)])):m("",!0),e.trainingpara?(i(),s("p",w,[n[8]||(n[8]=t("b",null,"Training Epoch:",-1)),o(" "+a((T=e.trainingpara)==null?void 0:T.training_epoch),1)])):m("",!0),(S=e.trainingpara)!=null&&S.convergence_epoch?(i(),s("p",z,[n[9]||(n[9]=t("b",null,"Convergence Epoch:",-1)),o(" "+a((k=e.trainingpara)==null?void 0:k.convergence_epoch),1)])):m("",!0),(C=e.trainingpara)!=null&&C.other?(i(),s("p",A,[n[10]||(n[10]=t("b",null,"Other Details:",-1)),o(" "+a((y=e.trainingpara)==null?void 0:y.other),1)])):m("",!0)]),u(p,{class:"comment-service"})])}const K=L(N,[["render",F],["__scopeId","data-v-14a17cd3"],["__file","InfoSection.vue"]]);export{K as default};
