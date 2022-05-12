<template>
<div class="card" style="width: 18rem;">
  Poster: <img :src="'https://image.tmdb.org/t/p/w185/'+ item.poster_path" class="card-img-top" :alt="item.title" >
  <div class="card-body">
    <h5 class="card-title">Titolo: {{ item.title ? item.title : item.name }}</h5>
    <h6 class="card-title">Titolo Originale: {{ item.original_title ? item.original_title : item.original_name }}</h6>
    <h6 class="card-title">Lingua: {{ item.original_language}}</h6>
    <div v-if="item.original_language === 'en'">
      Flag: <img :src="require('../assets/flag-en.png')" :alt="item.name">
    </div>
    <div v-else-if="item.original_language === 'it'">
      Flag: <img :src="require('../assets/flag-it.png')" :alt="item.name">
    </div>
    <div v-else>
      Flag: <img :src="require('../assets/flag-eu.png')" :alt="item.name">
    </div>
    <div>
      Voto:
      <span v-for="(n, index) in 5" :key="index">
        <i :class="n <= transformScale(item) ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star' "></i>
      </span>
    </div>
    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
  
</template>

<script>
export default {
name: 'CardComp',
props: ['card']
}
</script>

<style>

</style>