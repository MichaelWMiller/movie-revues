import vuex from "vuex";
import axios from "axios";
import vue from "vue";

let movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie?api_key=ef4e55c4c2110bbe1881ffdd32d70ab5&page=1&include_adult=false&query=",
    timeout: 2000
});

let myMovieDB = axios.create({
    baseURL: "//localhost:3000/api/mymovies",
    withCredentials: true,
    timeout: 1500
})

vue.use(vuex);

export default new vuex.Store({
    state: {
        user: {
            name: "Mark"
        },
        searchResults: [],
        activeMovie: {},
    },
    mutations: {
        addResults(state, payload) {
            state.searchResults = payload;
        },
        setActiveMovie(state, payload) {
            state.activeMovie = payload
        },
        addToMine(state, payload) {
            state.activeMovie = payload
        }
    },
    actions: {
        getMovies({ commit, dispatch }, title) {
            movieDB(title)
                .then(res => {
                    commit("addResults", res.data.results);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        getMyMovies({ commit, dispatch }, title) { //title here is 'payload'

            myMovieDB(title)
                .then(res => {
                    commit("addResults", res.data);
                })
                .catch(err => {
                    console.error(err);
                })
        },
        getAllMyMovies({ commit, dispatch }, payload) {
            myMovieDB(payload)
                .then(res => {
                    commit("addResults", res.data)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        addToMine({ commit, dispatch }, payload) {
            myMovieDB
                .post("", payload)
                .then(res => {
                    dispatch("getAllMyMovies", res.data)
                })
                .catch(err => {
                    console.error(err);
                })
        },

        setActiveMovie({ commit, dispatch }, payload) {
            commit("setActiveMovie", payload)
        }
    }
});