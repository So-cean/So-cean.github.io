<!-- Card.vue -->
<template>
    <div class="card">
      <img :src="image" alt="model image" class="card-image"/>
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p><b>Task:</b>{{ Task }}</p>
        <p><b>ViT:</b>{{ ViT }}</p>
        <p><b>Rank:</b>{{ Rank }}</p>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      title: String,
      Task: String,
      ViT: String,
      Rank: Number,
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    width: 100%; /* Set to 100% to fit the container */
  max-width: 200px; /* Set a max-width for responsiveness */
  margin: 10px; /* Add some margin to space out the cards */
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card-image {
    width: 100%;
    height: auto;
  }
  .card-content {
    padding: 16px;
  }

  </style>
  