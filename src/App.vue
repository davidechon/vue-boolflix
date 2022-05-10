<template>
  <div id="app">
    
    <header class="container-fluid">
      <div class="container col-8">
        <img src="./assets/logo.png"  alt="Netflix logo" class="logo">
        <search-bar @mySearch="setSearchText()" :albumMovie="movie" />
      </div>
    </header>
    
    
    
  </div>
</template>
import AppGrid from "../AppGrid.veu";
<script>
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
  }
}
</script>

<style lang="scss">
@import './style/generals.scss';
@import './style/variables.scss';

header {
  height: 70px;
  position: relative;
  background: $bg-color;
  border: 1px solid yellow;


  .logo {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 150px;
    height: 50px;
    line-height: 70px;
  }
}
</style>
