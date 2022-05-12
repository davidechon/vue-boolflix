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
          <!-- Voto/Stelle -->
           <p class="px-2 star">Voto-Francesco: 
                   <i v-for="index in myStar(item.vote_average)"
                                :key="index"
                                font-awesome-icon
                                class="fa-solid fa-star">
                   </i>
                    </p>  

           <!-- Voto/Stelle Giuliano-->
           <div>
             Voto Giuliano:
             <span v-for="(n, index) in 5" :key="index">
               <i :class="n <= transformScale(item.vote_average) ? 'fa-solid fa-star' : 'fa-regular fa-star' "></i>
             </span>
           </div>
           <!-- /Voto/Stelle Giuliano -->

          <!-- Voto/Stelle -->
          Voto-1: {{ item.vote_average }} <i class="fa-solid fa-star text-warning ">{{ item.vote_average }}</i>
          <!-- Voto: {{ 'voteStars(item.vote_average)' }} -->
          
          <div>
           
          </div>
            Voto-2: <i class="fa-solid fa-star text-warning "></i>
           <!-- <i v-for="index in myStar(item.vote_average)" :key="index" class="fa-solid fa-star"></i> -->
          <!-- <span v-if="item.vote_average === 0"><i class="fa-regular fa-star"></i></span> -->
           <br>

          <div v-for="index in myStar(item.vote_average)" :key="index">  div container
           
            <div v-if="myStar(item.vote_average) >=2">
              Voto-3: <i class="fa-solid fa-star text-warning "></i> <i class="fa-solid fa-star text-warning"> </i><i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i>
            </div>
            
            <div v-else-if="myStar(item.vote_average) >=4">
              Voto-4: <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i>
            </div>
            <div v-else-if="myStar(item.vote_average) >=6">
              Voto-5: <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"> </i><i class="fa-solid fa-star text-warning"></i>
            </div>
            <div v-else-if="myStar(item.vote_average) >=8">
              Voto-6: <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"> </i><i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i>
            </div>
            <div v-else-if="parseInt(vote_average) >=10">
            Voto-7: <i class="fa-solid fa-star text-warning "></i> <i class="fa-solid fa-star text-warning"> </i><i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i> <i class="fa-solid fa-star text-warning"></i>
            </div>
            <div v-else>
            Nessun voto
            </div> <br>
          </div>
          <!-- Voto/Stelle -->
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
        // Soluzione di Giuliano. Dovrebbe essere una Computed
        // transformScale(item){
        //   return parseInt(this.item.vote_average / 2)
        // },
        // Giuliano
    },
    methods:{
        // leggi(){
        //     actions.setSearch('aaaaa')
        // }
        myStar(number){
          return Math.round(number/2);
        },
        // Soluzione di Giuliano. Dovrebbe essere una Computed
        transformScale(item){
          return parseInt(item.vote_average / 2)
        },
        // Giuliano ==> Spostato in computed
    },
}
</script>

<style lang="scss">

</style>