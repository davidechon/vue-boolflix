<template>
  <div id="app">
    
    <header class="container-fluid">
      <h1 class="display-6">Boolfix</h1>
      <search-bar />
      <!-- <div class="container col-8">
        <img src="./assets/logo.png"  alt="Netflix logo" class="logo">
      </div> -->
    </header>
    <main>
      <grid-list />
    </main>
    
    
    
  </div>
</template>

<script>
// import AppGrid from "./components/AppGrid.vue";
import SearchBar from './components/SearchBar.vue';
import GridList from './components/GridList.vue';

export default {
  name: 'App',
  components: {
    // AppGrid,
    SearchBar,
    GridList,
  }
}
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
