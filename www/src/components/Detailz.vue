<template>
    <div class='detailz'>
      <h4>Details from Search {{title}}: </h4>
      {{movie.title}}
      <button @click="addToMine">Add Me</button>
      
      <div v-if="movie.poster_path">
          <img :src="'https://image.tmdb.org/t/p/w500/'+ movie.poster_path">
      </div>
    </div>
  </template>

<script>
    export default {
        name: 'detailz',
        props: ['movie', 'title'],
        data() {
            return {}
        },
        methods: {
            addToMine() {
                this.$store.dispatch('addToMine', this.movie)
            }
        }
    }
</script>


<style scoped>
    .detailz {
        background-color: teal;
        color: white;
    }
</style>