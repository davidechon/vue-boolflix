<template>
  <div id="app">
    
    <header class="container-fluid fixed-top">
      <nav class="container d-flex flex-row justify-content-between align-items-center">
        <img src="./assets/logo.png" alt="logo" class="myLogo">
        <search-bar @performSearch="search" class="myInput"/>
      </nav>
    </header>
    <main class="mainSet">
      <div class="topHidden"></div>
      <div class="">  
        <grid-list :items="movies" title="Movie" :loader='loading' class="top80"/>
        <grid-list :items="series" title="Series" :loader='loadingSeries' class="top40"/>
      </div>
    </main>
    
    
    
  </div>
</template>

<script>
import GridList from "./components/GridList.vue";
import SearchBar from './components/SearchBar.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SearchBar,
    GridList,
  },
  data()
    {
    return {
      apiKey: '5c7b14596c15a116f90ada79b15cc30b',
      apiPath: 'https://api.themoviedb.org/3/search/',
      movies: [],
      series: [],
      loading: false,
      loadingSeries: false,
    }
  },
  methods:{
      getMovies(queryParams){
        axios.get(this.apiPath+'movie', queryParams).then((res)=>{
          //console.log(res.data.results)
          this.movies = res.data.results;
          this.loading = false;
        }).catch((error)=>{
          console.log(error)
        })
      },
      getSeries(queryParams){
        axios.get(this.apiPath+'tv', queryParams).then((res)=>{
          console.log(res.data.results)
          this.series = res.data.results;
        }).catch((error)=>{
          console.log(error)
        })
      },
      search(text){
      //console.log(text);
       const queryParams = {
        params:{
          api_key: this.apiKey,
          query: text
        }
      }
      this.loading= true;
      this.loadingSeries = true;
      this.getMovies(queryParams);
      this.getSeries(queryParams);
    }
  },
  // voteStars(number){
  //   return Math.round(number / 2);
  // },
  // myVote(){
  //   return Math.round(this.item.vote_average / 2);
  //   // this.$emit('myVote', this.item.vote_average);
  // },

  }
  // results []
  // id
  // title
  // original_title
  // original_language
  // vote_average

</script>
    

<style lang="scss">
@import './styles/generals.scss';
@import './styles/variables.scss';

body {
    background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/a847e6c4-f36c-4cd4-97e1-26780cab9ac3/IT-it-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg');
    height: 100vh;
    background-blend-mode: color-burn;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  


  header {
    height: 70px;
    margin-bottom: 30px;
    position: relative;
    background: $bg-color;

    nav{
      margin: 10px auto;
      line-height: 30px;

      .myLogo {
        position: relative;
        width: 150px;
        height: 50px;
        line-height: 70px;
      }

      .myInput{
        width: 30%;
          display: flex;
          flex-flow: row nowrap;
      }
    }
  }// /header
  main{
    .topHidden{
      height: 100px;
      border: 1px solid yellow;
    }
    .top80{
      margin-top: 80px;
      // z-index: 10;
    }
    .top10{
      margin-top: 10px;
      // z-index: 10;
    }
  }// /main
} // /body
</style>
