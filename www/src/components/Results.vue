<template>
  <div class='results'>
    <h4>Results for {{title}}:</h4>
    <div class="row">
      <ol class="col-sm-6">
        <li v-for="movie in movies">
          <p @click="showDetails(movie)">{{movie.title}}</p>
        </li>
      </ol>
      <detailz class="col-sm-6" :movie="activeMovie" :title="title"></detailz>
    </div>
  </div>
</template>

<script>
    import Detailz from './Detailz'
    export default {
        name: 'results',
        data() {
            return {

            }
        },
        computed: {
            movies() {
                return this.$store.state.searchResults
            },
            activeMovie() {
                return this.$store.state.activeMovie
            }
        },
        methods: {
            showDetails(movie) {
                this.$store.dispatch('setActiveMovie', movie)
            }
        },
        components: {
            detailz: Detailz
        },
        props: ['title']
    }
</script>

<style scoped>
    .results {
        background-color: aqua;
        text-align: left;
    }
</style>