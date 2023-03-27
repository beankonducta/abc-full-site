<template>
  <div class="product">
    <div class="product-wrapper" id="products">
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
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  position: relative;
}
.product-wrapper {
  width: 80%;
  text-align: center;
  margin: 0 auto;
}
.title {
  font-size: calc(1rem + 4vw);
  font-family: "BNMainz";
}
.image {
  width: 60%;
}
.caption {
  font-size: calc(.7rem + 1vw);
  font-family: "Nightingale";
}
</style>
