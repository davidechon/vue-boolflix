// import Vue from 'vue'
// // Versione semplice
// const state = Vue.observable({
//   search: 'a',
//   movies: [],
//  series: []
// })
// export default state;



// Versione avanzata con controlli
// const _state = Vue.observable({
//   search: '',
//   movies: [],
//  series: []
// })

// const state = ()=> ({..._state});
// const actions = {
//   setSeach(val){
//     _state.search = val;
//   },
//   setSpecies(val){
//     _state.species = val;
//   }
// };
// export {state, actions};