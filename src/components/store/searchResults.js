import { defineStore } from "pinia";

export const useSearchResultsStore = defineStore({
  id: "searchResults",
  state: () => ({
    name: "John Doe",
    email: "fake@email.com",
    username: "jd123",

    search: null,
    results: null,
    artists: null,
  }),

  getters: {
    getResults() {
      return this.results || {};
    },
  },

  actions: {
    async fetchResults(keyword) {
      try {
        this.search = keyword;

        const searchURL = "https://cors-anywhere.herokuapp.com/";
        const searchReq = await fetch(
          `${searchURL}https://api.deezer.com/search?q=${this.search}`
        );
        const searchRes = await searchReq.json();
        if (searchRes.data) {
          const exactArtist = searchRes.data.find((a) => {
            return a.artist.name.toLowerCase().includes(this.search);
          });
          await this.fetchArtist(exactArtist);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchArtist({ artist }) {
      try {
        const apiURL = "https://cors-anywhere.herokuapp.com/";
        const req = await fetch(
          `${apiURL}https://api.deezer.com/artist/${artist.id}`
        );
        const res = await req.json();
        this.results = res;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
