<template>
  <section class="container">
    <div class="row row-cols-10 d-flex flex-wrap justify-content-center">
      <div
      v-for="(item, index) in movieList"
      :key="index"
      class="card justify-content-center align-items-center"
      >
        <img :src="item.poster_path" :alt="item.title">
        <div class="text-card">{{ item.title}}</div>
        <div class="text-card">{{ item.original_title}}</div>
        <div class="text-card">{{ item.language}}</div>
        <div class="text-card">{{ item.vote_average}}</div>

      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
name: 'AppGrid',
data(){
  return{
    movieList: [],
    searchText:'',
    apiPath: "https://www.themoviedb.org/3/",
    movie: [],
    filteredMovies: [],
  };
},
methods:{
  setSearchText(text){
    this.searchText = text
  },
},
created(){
  axios.get(this.apiPath + "movies" ).then((res)=>{
    console.log("qui entra axios" + res);
    this.movie = [res.data],
    this.movieList.forEach((item)=>{
      if(!this.title.includes(item.title)){
        this.movie.push(item.movie);
      }
    })
  }).catch((error)=>{
    console.log("questo è la chiamata axios" + error)
  })

    

}

}
</script>

<style>

</style>