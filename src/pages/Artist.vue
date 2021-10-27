<template>
  <div class="row">
    <div class="col-sm">
      <div
        class="banner"
        :style="{ backgroundImage: 'url(' + musician?.picture_xl + ')' }"
      >
        <div class="caption">
          <span class="name">{{ musician.name }}</span>
          <span class="fans">{{ numbers.fans }} Fans</span>
        </div>
      </div>
    </div>
    <div class="col-sm col-md-6 col-lg">
      <h3 class="top-tracks-heading">Top tracks</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="track in toptracks" :key="track.id">
          {{ track.title }}
        </li>
      </ul>
    </div>
  </div>

  <div class="row mt-5">
    <h3>Albums</h3>
    <album-card
      v-for="album in albums"
      :key="album.id"
      :info="album"
    ></album-card>
  </div>
</template>

<script>
import AlbumCard from "@/components/AlbumCard.vue";

export default {
  components: { AlbumCard },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
  },
  data() {
    return {
      musician: null,
      toptracks: null,
      numbers: {
        fans: 0,
        albums: 0,
      },
      albums: null,
    };
  },
  async created() {
    // Query artist individually in order to grabs fans, albums count
    const apiURL = "https://cors-anywhere.herokuapp.com/";
    const req = await fetch(
      `${apiURL}https://api.deezer.com/artist/${this.id}`
    );
    const res = await req.json();

    // Get artist profile
    this.musician = res;
    this.numbers.fans = res.nb_fan;
    this.numbers.albums = res.nb_album;

    // Get top 5 tracks
    const searchURL = "https://cors-anywhere.herokuapp.com/";
    const searchReq = await fetch(
      `${searchURL}https://api.deezer.com/search?q=${this.name}`
    );
    const searchRes = await searchReq.json();
    const tracks = searchRes.data
      .filter((dd) => dd.type == "track")
      .slice(0, 5);
    this.toptracks = tracks;

    // Get the albums
    // Each track has an album association
    const albums = tracks.map((t) => t.album);
    this.albums = albums.slice(0, 4);
  },
};
</script>

<style scoped>
.banner {
  height: 280px;
  overflow: hidden;
  position: relative;

  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
}

.caption {
  position: absolute;
  top: 0;
  left: 0;
  padding: 80px 20px 20px 20px;
  color: #fff;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.caption span {
  display: block;
}

.caption .name {
  font-size: 1.6rem;
}
.caption .fans {
  font-size: 1.1rem;
}

.list-group li:nth-child(odd) {
  background-color: #073b4c;
  color: #fff;
}

h3.top-tracks-heading {
  margin-top: 20px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  h3.top-tracks-heading {
    margin-top: 0px;
  }
}
</style>
