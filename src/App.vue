<template>
  <div id="app">
    
    <header class="container-fluid">
      <h1 class="display-6">Boolfix</h1>
      <search-bar @performSearch="search"/>
    </header>
    <main>      
      <grid-list :items="movies" title="Movie" :loader='loading'/>
      <grid-list :items="series" title="Series" :loader='loadingSeries'/>
    </main>
    <!-- <card-comp /> -->
    
    
    
  </div>
</template>

<script>
import GridList from "./components/GridList.vue";
import SearchBar from './components/SearchBar.vue';
import axios from 'axios';
// import CardComp from './components/CardComp.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    GridList,
    // CardComp,
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

// header {
//   height: 70px;
//   position: relative;
//   background: $bg-color;
//   border: 1px solid yellow;


//   .logo {
//     position: absolute;
//     top: 10px;
//     left: 20px;
//     width: 150px;
//     height: 50px;
//     line-height: 70px;
//   }
// }
</style>
