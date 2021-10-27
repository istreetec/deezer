import { reactive } from "vue";

export default {
  // reactive state
  state: reactive({
    results: [],
  }),

  populateSearchResults(keyword) {
    this.state.results.push(keyword);
  },

  get displayResults() {
    return this.state.results;
  },
};
