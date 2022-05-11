<template>
  <section>
    <h2>{{title}}</h2>
   <ul>
        <li v-for="item in items" :key="item.id">
          <!-- poster_path: {{ item.poster_path}} -->
          <!-- backdrop_path: {{ item.backdrop_path}} -->
          <!-- id: {{ item.id}} -->
          Titolo: {{ item.title}} - 
          Titolo Originale: {{ item.original_title}} - 
          Linguae: {{ item.original_language}} - 
          <!-- <img :src="require('.assets/images/'+item.original_language+'.jpg')" alt=""> -->
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
    },
}
</script>

<style lang="scss">
</style>