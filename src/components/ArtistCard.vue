<template>
  <div class="col-sm col-md-6 col-lg">
    <div class="card" style="width: 18rem;">
      <router-link
        style="text-decoration: none;"
        :to="{
          name: 'Artist',
          params: { id: artistInfo.id, name: artistInfo.name },
        }"
      >
        <img
          :src="artistInfo.picture"
          class="card-img-top"
          :alt="artistInfo.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ artistInfo.name }}</h5>
          <span>{{ artistInfo.nb_fan }} Fans</span>
          <span>{{ artistInfo.nb_album }} Albums</span>
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

<style lang="css" scoped>
.card-body span,.card-title {
  display: block;
  color: black;
}
</style>
