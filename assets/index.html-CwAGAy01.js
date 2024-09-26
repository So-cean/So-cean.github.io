import{f as r,_ as s,c as l,a as d,d as c,r as m,o as p}from"./app-BPWcID4_.js";const _="/image_dataset/AdrenalMNIST3D.jpg",f="AdrenalMNIST3D",h=r({__name:"index.html",setup(n,{expose:t}){t();const a={image:_,title:f,datasetInfo:{description:"The AdrenalMNIST3D is a new 3D shape classification dataset, consisting of shape masks from 1,584 left and right adrenal glands (i.e., 792 patients). Collected from Zhongshan Hospital Affiliated to Fudan University, each 3D shape of adrenal gland is annotated by an expert endocrinologist using abdominal computed tomography (CT), together with a binary classification label of normal adrenal gland or adrenal mass. Considering patient privacy, we do not provide the source CT scans, but the real 3D shapes of adrenal glands and their classification labels. We calculate the center of adrenal and resize the center-cropped 64mm×64mm×64mm volume into 28×28×28. The dataset is randomly split into training/validation/test set of 1,188/98/298 on a patient level.",task:"Binary-Class",label:{0:"normal",1:"hyperplasia"},n_samples:{train:"1188",test:"298",validation:"98"}},trainingPara:{learning_rate:"1e-5",convergence_epoch:"40",training_epoch:"100",other:""}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),g={class:"container"};function u(n,t,i,e,a,S){const o=m("DetailSection");return p(),l("div",null,[d("div",g,[c(o,{image:e.image,title:e.title,trainingpara:e.trainingPara,datasetinfo:e.datasetInfo})])])}const T=s(h,[["render",u],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/model/MedMNIST/AdrenalMNIST3D/","title":"AdrenalMNIST3D","lang":"en-US","frontmatter":{"title":"AdrenalMNIST3D","description":null,"meta":{"-name":"keywords","content":"AdrenalMNIST3D, 3D, dataset"},"tags":["AdrenalMNIST3D","3D"]},"headers":[],"git":{"updatedTime":1727362876000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":1}]},"filePathRelative":"model/MedMNIST/AdrenalMNIST3D/README.md"}');export{T as comp,v as data};
