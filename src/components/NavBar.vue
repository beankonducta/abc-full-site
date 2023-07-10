<template>
  <div class="nav">
    <a @click="scroll('products')" class="nav-item" href="#products">Our Drinks</a>
    <a @click="scroll('about')" class="nav-item" href="#about">About</a>
    <a @click="scroll('buy')" class="nav-item" href="#buy">Where To Buy</a>
    <!-- <a @click="scroll('contact')" class="nav-item" href="#contact">Contact</a> -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar",
  methods: {
    scroll(element) {
      console.log(this.$refs[element])
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
  padding-top: 2vh;
  margin-top: -2vh;
  margin-bottom: 1vh;
  font-size: calc(.4rem + 1vw);
  font-family: "BNBergen";
  text-transform: uppercase;
  letter-spacing: .12rem;
  position: fixed;
  z-index: 99;
  width: 101%;
  background: white;
}

.nav-item {
  padding: 1rem;
}
</style>
