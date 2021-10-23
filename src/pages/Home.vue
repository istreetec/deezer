<template>
  <div class="row align-items-start">
    <artist-card
      :artist-info="artist"
      v-for="artist in musicians"
      :key="artist.id"
    ></artist-card>
  </div>
</template>

<script>
import ArtistCard from "@/components/ArtistCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ArtistCard,
  },
  computed: {
    ...mapGetters({ musicians: 'getMusicians' }),
  },

  async created() {
    this.$store.dispatch("fetchMusicians");

    // const req = await fetch(
    //   // "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artists"
    //   "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127"
    // );

    // const res = await req.json();
    // console.log(res);
  },
};
</script>

<style lang="scss" scoped></style>
