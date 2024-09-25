import{f as o,_ as r,c,a as d,d as l,r as m,o as p}from"./app-BvHpqlIy.js";const _=o({__name:"index.html",setup(i,{expose:t}){t();const a={datasetInfo:{description:"The OCTMNIST is based on a prior dataset of 109,309 valid optical coherence tomography (OCT) images for retinal diseases. The dataset is comprised of 4 diagnosis categories, leading to a multi-class classification task. We split the source training set with a ratio of 9:1 into training and validation set, and use its source validation set as the test set. The source images are gray-scale, and their sizes are (384−1,536)×(277−512). We center-crop the images and resize them into 1×28×28.",task:"multi-class",label:{0:"choroidal neovascularization",1:"diabetic macular edema",2:"drusen",3:"normal"},n_samples:{train:"97477",test:"1000",validation:"10832"}},trainingPara:{learning_rate:"3e-4",convergence_epoch:"10",training_epoch:"50",other:""}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),h={class:"container"};function g(i,t,n,e,a,f){const s=m("Detail");return p(),c("div",null,[d("div",h,[l(s,{image:"/image_dataset/OCTMNIST.jpg",title:"OCTMNIST",trainingpara:e.trainingPara,datasetinfo:e.datasetInfo})])])}const T=r(_,[["render",g],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/model/OCTMNIST/","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1727258543000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":2}]},"filePathRelative":"model/OCTMNIST/README.md"}');export{T as comp,v as data};
