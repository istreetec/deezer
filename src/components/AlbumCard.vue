<template>
  <div class="col-sm col-md-6 col-lg">
    <div class="card">
      <img :src="info.cover" class="card-img-top" :alt="info.title" />
      <div class="card-body">
        <h5 class="card-title">
          <span>{{ info.title }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>
