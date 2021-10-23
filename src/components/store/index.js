import { createStore } from "vuex";

const initialState = {
  musicians: null,
  musician: null,
};

const getters = {
  musician: (state) => {
    return state.musician;
  },
  getMusicians: (state) => {
    const artist = state.musicians.artists.data.slice(1, 5);
    return artist;
  },
};

const mutations = {
  setMusicians(state, { musicians }) {
    state.musicians = musicians;
  },

  setMusician(state, { musician }) {
    state.musician = musician;
  },
};

const actions = {
  fetchMusicians: async ({ commit }) => {
    const req = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artists"
    );

    const res = await req.json();
    commit("setMusicians", { musicians: res });
  },

  async fetchMusician({ commit }, { musicianId }) {
    // Fetch individual item
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${musicianId}`
    );
    const res = await req.json();
    // console.log(res);
    commit("setMusician", { musician: res });
  },
};

export default createStore({
  state: { ...initialState },
  getters,
  mutations,
  actions,
});
