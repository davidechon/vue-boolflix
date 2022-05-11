<template>
  <section class="container">
    <search-bar @mySearch="setSearchText()" :albumMovie="movie" />

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
import SearchBar from "./SearchBar.vue"

export default {
name: 'AppGrid',
components: {
    SearchBar,
  },
data(){
  return{
    movieList: [],
    searchText:'',
    apiPath: "https://api.themoviedb.org/3/movie/550?api_key=5c7b14596c15a116f90ada79b15cc30b&query=search&query=movie&language=it-IT",
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
  axios.get(this.apiPath  ).then((res)=>{
    console.log("qui entra axios" + res);
    this.movie = res.data.response,
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