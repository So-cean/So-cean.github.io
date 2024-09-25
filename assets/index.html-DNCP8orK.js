import{f as s,_ as r,c,a as l,d as m,r as d,o as p}from"./app-BvHpqlIy.js";const _=s({__name:"index.html",setup(i,{expose:t}){t();const a={datasetInfo:{description:"The DermaMNIST is based on the HAM10000, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. The dataset consists of 10,015 dermatoscopic images categorized as 7 different diseases, formulized as a multi-class classification task. We split the images into training, validation and test set with a ratio of 7:1:2. The source images of 3×600×450 are resized into 3×28×28.",task:"multi-class",label:{0:"actinic keratoses and intraepithelial carcinoma",1:"basal cell carcinoma",2:"benign keratosis-like lesions",3:"dermatofibroma",4:"melanoma",5:"melanocytic nevi",6:"vascular lesions"},n_samples:{train:"7007",test:"2005",validation:"1003"}},trainingPara:{learning_rate:"3e-4",convergence_epoch:"25",training_epoch:"100",other:""}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),f={class:"container"};function g(i,t,n,e,a,u){const o=d("Detail");return p(),c("div",null,[l("div",f,[m(o,{image:"/image_dataset/DermaMNIST.jpg",title:"DermaMNIST",trainingpara:e.trainingPara,datasetinfo:e.datasetInfo})])])}const v=r(_,[["render",g],["__file","index.html.vue"]]),S=JSON.parse('{"path":"/model/DermaMNIST/","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1727258543000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":4}]},"filePathRelative":"model/DermaMNIST/README.md"}');export{v as comp,S as data};
