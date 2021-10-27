<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="navbar-brand" href="#"
        >LOGO</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form>
          <input
            v-debounce:400ms.cancelonempty="myFn"
            class="form-control me-2"
            type="search"
            placeholder="Search an artist"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "pinia";
import { useSearchResultsStore } from "@/components/store/searchResults";

export default {
  data() {
    return {
      search: null,
    };
  },

  methods: {
    ...mapActions(useSearchResultsStore, ["fetchResults"]),

    async myFn(value) {
      // invoke an action directly
      await this.fetchResults(value);
      this.$router.push("/");
    },
  },
};
</script>
