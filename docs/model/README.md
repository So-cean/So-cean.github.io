## Abstract
The common practice in developing computer-aided diagnosis (CAD) models based on transformer architectures usually involves fine-tuning from ImageNet pre-trained weights. However, with recent advances in large-scale pre-training and the practice of scaling laws, Vision Transformers (ViT) have become much larger and less accessible to medical imaging communities. Additionally, in real-world scenarios, the deployments of multiple CAD models can be troublesome due to problems such as limited storage space and time-consuming model switching. To address these challenges, we propose a new method MeLo (Medical image Low-rank adaptation), which enables the development of a single CAD model for multiple clinical tasks in a lightweight manner. It adopts low-rank adaptation instead of resource-demanding fine-tuning. By fixing the weight of ViT models and only adding small low-rank plug-ins, we achieve competitive results on various diagnosis tasks across different imaging modalities using only a few trainable parameters. Specifically, our proposed method achieves comparable performance to fully fine-tuned ViT models on four distinct medical imaging datasets using about 0.17% trainable parameters. Moreover, MeLo adds only about 0.5MB of storage space and allows for extremely fast model switching in deployment and inference.


## Model

<!-- <figure>
  <img src="./image/bloodcell.jpg" alt="VuePress Hope 图标">
  <figcaption>VuePress Hope 图标</figcaption>
</figure> -->

<div style="display: flex; flex-wrap: wrap; gap: 16px;">
<Card
  image="/image/sz_chest_xray.png"
  title="SZ Chest X-ray"
  Task="Tuberculosis Diagnosis"
  ViT="base-ImageNet"
  Rank=4
/>

<Card
  image="/image/bloodcell.jpg"
  title="Bloodcell"
  Task="Blood Cell Identification"
  ViT="base-ImageNet"
  Rank=4
/>

<Card
  image="/image/nih_chest_xray.jpg"
  title="NIH Chest X-ray"
  Task="Thoracic Disease Diagnosis"
  ViT="base-ImageNet"
  Rank=4
/>

<Card
  image="/image/mamo.jpg"
  title="INBreast"
  Task="Breast Malignancy Diagnosis"
  ViT="base-ImageNet"
  Rank=4
/>
</div>


## 我的页面

<MyComponent></MyComponent>
