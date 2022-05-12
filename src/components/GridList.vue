<template>
  <section>
    <div class="container d-flex flex-wrap">
    <h2>{{title}}</h2>
      <div class="card-group debug">
        <div v-for="(item) in items" :key="item.id" class="card">
            <div class="debug"><img :src="'https://image.tmdb.org/t/p/w342/'+ item.poster_path" :alt="item.title" class="card-img-top" >
            </div><!-- /poster -->
          <!-- <div>id: {{ item.id}}
          </div> -->
          <div class="text-card">
            <div>Titolo: {{ item.title ? item.title : item.name }}  </div>
            <div>Titolo Originale: {{ item.original_title ? item.original_title : item.original_name }} </div>
            <div>Lingua: {{ item.original_language}}
              <span v-if="item.original_language === 'en'">
                <img :src="require('../assets/flag-en.png')" :alt="item.name" class="flag">
              </span>
              <span v-else-if="item.original_language === 'it'">
                <img :src="require('../assets/flag-it.png')" :alt="item.name">
              </span>
              <span v-else>
              <img :src="require('../assets/flag-eu.png')" :alt="item.name">
              </span>
            </div> <!-- /lingua -->
            <div>
              Voto:
              <span v-for="(n, index) in 5" :key="index">
                <i :class="n <= transformScale(item) ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star' "></i>
              </span>
            </div> <!-- /voto -->
            <div>Overview: {{ item.overview }}  </div>
          </div> <!-- /text-card -->
        </div><!-- /v-for -->
      </div><!-- /card-group -->
    </div><!-- /container -->




    <!-- <ul>
      <li v-for="(item) in items" :key="item.id">
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
    </ul> -->
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
@import '../styles/variables.scss';

.container{
  background: #333;
  color: white;


  .card{
  background: #333;
  color: white;
  min-width: 250px;
  min-height: 100%;
  margin: 3px auto;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid yellow;
  }
  .text-card{
    border: 1px solid violet;
    width: 100%;
    padding: 10px;
    font-weight: 300;
  }

  .flag{
    width: 50px;
  }

}




.debug{
  border: 1px solid red;
}
</style>