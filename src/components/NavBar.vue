<template>
  <div class="nav">
    <a @click="scroll('about')" class="nav-item" href="#about">About</a>
    <a @click="scroll('products')" class="nav-item" href="#products">Our Drinks</a>
    <a @click="scroll('contact')" class="nav-item" href="#contact">Contact</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar",
  methods: {
    scroll(element) {
      this.$refs[element].scrollIntoView()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  text-align: center;
  margin-right: 3vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  font-size: calc(.4rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
  color: #AE841F;
}

.nav-item {
  padding: 1rem;
}
</style>
