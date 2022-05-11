<template>
  <section>
    <h2>{{title}}</h2>
   <ul>
        <li v-for="item in items" :key="item.id">
          id: {{ item.id}}
          title: {{ item.title}}
          original_title: {{ item.original_title}}
          original_language: {{ item.original_language}}
          <!-- <img :src="require('.assets/images/'+item.original_language+'.jpg')" alt=""> -->
          vote_average: {{ item.vote_average}}
         
        </li>
      </ul>
  </section>
</template>

<script>
// import state from '../store.js'
// import {state, actions} from '../store.js'

export default {
  nome: 'GridList',
  props:{
    items: Array,
    loader: Boolean
  },// ['items', 'loader'],
  data(){
    return {
      
    }
  }, 
  computed:{
    // mySearch(){
    //   return state.search
    // }
  },
  methods:{
    // leggi(){
    //   state.search = 'aaaaa';
    // }
  }
}
</script>

<style>

</style>