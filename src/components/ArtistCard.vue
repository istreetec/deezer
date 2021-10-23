<template>
  <div class="col">
    <div class="card">
      <router-link :to="{ name: 'Artist', params: { id: artistInfo.id } }">
        <img
          :src="artistInfo.picture"
          class="card-img-top"
          :alt="artistInfo.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ artistInfo.name }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["artistInfo"],
};
</script>

<style lang="scss" scoped></style>
