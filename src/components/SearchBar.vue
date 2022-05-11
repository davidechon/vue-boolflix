<template>
<div>
  <input type="text" v-model="search" @keyup.enter="$emit('performSearch', search)"> 
  <button @click="cerca">Cerca</button> 
</div>

<!-- <div class="input-group pt-3 justify-content-end">
    <input type="text" placeholder="Recipient's username">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div> -->
</template>

<script>
// import state from '../store.js'
export default {
  name: 'SearchBar',
  data(){
    return {
      // state,
      search: '',
    }
  },
  computed:{
    // mySearch(){
    //   return state.search
    // }
  },
  methods:{
    cerca(){
      this.$emit('performSearch', this.search);
    }
  },
}

</script>

<style lang="scss">

</style>