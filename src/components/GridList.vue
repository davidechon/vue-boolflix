<template>
  <section>
    <div class="container d-flex flex-wrap">
    <h2>{{title}}</h2>
      <div class="card-group">
        <div v-for="(item) in items" :key="item.id" class="card">
            <div class="poster">
          
                <img v-if ="item.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path" class="card-img poster" :alt="item.name"/>
              </div>
          <!-- <div>id: {{ item.id}}</div> -->
          <div  class="text-card overlay">
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

  .card-group{
    position: relative;
  }
  .card{
  background: #333;
  color: white;
  min-width: 250px;
  min-height: 300px;
  margin: 3px auto;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  border: 0;
  }
  .poster{
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
  } 
  .text-card{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    font-weight: 200;
  }

  .flag{
    width: 50px;
  }

}

.overlay {
  position: absolute; 
  bottom: 0; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.9); /* Black see-through */
  color: #f1f1f1; 
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 14px;
  padding: 18px;
  overflow: auto;
}

.card:hover .overlay {
  opacity: 1;
}



.debug{
  border: 1px solid red;
}
</style>