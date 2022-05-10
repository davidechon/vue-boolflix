<template>
  <div id="app">
    
    <header>
      <img src="./assets/logo.png"  alt="Netflix logo" class="logo">

    </header>
    
    <search-bar />
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SearchBar,
  }
}
</script>

<style lang="scss">
@import './style/generals.scss';
@import './style/variables.scss';

header {
  height: 70px;
  margin-bottom: 30px;
  position: relative;
  background: $bg-color;

  .logo {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 40px;
    height: 40px;
    line-height: 70px;
  }
}
</style>
