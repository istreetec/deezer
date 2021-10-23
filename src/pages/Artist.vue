<template>
  <div class="row">
    <div class="col artist-background-image">
      <img
        src="https://via.placeholder.com/800x400.png"
        class="img-fluid"
        alt="..."
      />
    </div>
    <div class="col">
      <h3>Top tracks</h3>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </div>

  <div class="row mt-5">
    <h3>Albums</h3>
  </div>
</template>

<script>
// import ArtistCard from "@/components/ArtistCard.vue";
export default {
  props: {
    id: { type: String, required: true },
  },
  // components: { ArtistCard },
  mounted(){
    console.log("--- ", this.id, this.$store.state.musician);
  },

  async created() {
    const x = await this.$store.dispatch("fetchMusician", { musicianId: this.id });
    console.log(x);
  },
};
</script>
