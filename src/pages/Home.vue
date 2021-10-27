<template>
  <div class="row align-items-start">
    <artist-card
      v-if="Object.keys(getResults).length"
      :artist-info="getResults"
    ></artist-card>
  </div>
</template>

<script>
import { mapState } from "pinia";
import ArtistCard from "@/components/ArtistCard.vue";
import { useSearchResultsStore } from "../components/store/searchResults";

export default {
  components: {
    ArtistCard,
  },

  data() {
    return {
      artists: null,
    };
  },

  computed: {
    ...mapState(useSearchResultsStore, ["search", "getResults"]),
  },
};
</script>
