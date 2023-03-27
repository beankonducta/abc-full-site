<template>
  <div class="product">
    <div class="product-wrapper">
      <div class="title" :style="{ color: color }">{{ title }}</div>
      <img class="image" v-bind:src="img" />
      <div class="caption" :color="color">{{ caption }}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Product",
  props: {
    img: String,
    title: String,
    caption: String,
    color: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  width: 40%;
  text-align: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.title {
  font-size: 3rem;
  font-family: "BNMainz";
}
.image {
  width: 100%;
}
.caption {
  font-size: 1.2rem;
  font-family: "Nightingale";
}
</style>
