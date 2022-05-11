<template>
  <section>
    <h2>{{title}}</h2>
   <ul>
        <li v-for="(item) in items" :key="item.id">
          <!-- poster_path: {{ item.poster_path}} -->
          <!-- backdrop_path: {{ item.backdrop_path}} -->
          id: {{ item.id}}
          Titolo: {{ item.title ? item.title : item.name }} - 
          Titolo Originale: {{ item.original_title  ? item.original_title : item.original_name }} - 
          Linguae: {{ item.original_language}} - 
          <!-- Flag: <img :src="require('../assets/flag-'+item.original_language+'.png')" :alt="item.name"> -->
          <!-- <img :src="require('../assets/images/'+item.original_language+'.jpg')" alt=""> -->
          

          Voto: {{ item.vote_average}} - 
         
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
        title: String
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
        flagList(language){
           if{item.original_language !== 'en' || item.original_language !== 'it'
           

           } else {
             require('../assets/flag-eu.png')
           }
        }
    },
}
</script>

<style lang="scss">
</style>