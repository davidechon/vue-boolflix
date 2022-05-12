<template>
  <section>
    <h2>{{title}}</h2>
   <ul>
        <li v-for="(item) in items" :key="item.id">
          <!-- poster_path: {{ item.poster_path}} -->
          Poster: <img :src="'https://image.tmdb.org/t/p/w185/'+ item.poster_path" :alt="item.title"> <br>
          id: {{ item.id}} <br>
          Titolo: {{ item.title ? item.title : item.name }} <br> 
          Titolo Originale: {{ item.original_title ? item.original_title : item.original_name }} <br> 
          Lingua: {{ item.original_language}} <br> 
          
          <div v-if="item.original_language === 'en'">
            Flag: <img :src="require('../assets/flag-en.png')" :alt="item.name">
          </div>
          <div v-else-if="item.original_language === 'it'">
            Flag: <img :src="require('../assets/flag-it.png')" :alt="item.name">
          </div>
          <div v-else>
           Flag: <img :src="require('../assets/flag-eu.png')" :alt="item.name">
          </div> <br>
           
           <div>
             Voto:
             <span v-for="(n, index) in 5" :key="index">
               <i :class="n <= transformScale(item) ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star' "></i>
             </span>
           </div>
        </li>
      </ul>


  </section>
</template>

<script>
// import state from '../store.js'
// import {state, actions} from '../store.js'

export default {
    name: 'GridList',
    props:{
        items: Array,
        loader: Boolean,
        title: String,
        
    //['items','loader'],
    },
    data(){
        return {
            
        }
    },
    computed: {
        // mysearch(){
        //     return state.search
        // }
        
    },
    methods:{
        // leggi(){
        //     actions.setSearch('aaaaa')
        // }
       
        transformScale(item){
          return Math.round(item.vote_average / 2)
        },
        
    },
}
</script>

<style lang="scss">

</style>