<template>
  <div class="nav">
    <a class="nav-item" href="#products">About</a>
    <a class="nav-item" href="#about">Our Drinks</a>
    <a class="nav-item" href="#contact">Contact</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  position: absolute;
  top: 0;
  right:  2rem;
  margin: 2rem;
  font-size: .9rem;
  font-family: "Nightingale";
  text-transform: uppercase;
  color: #AE841F;
}

.nav-item {
  padding: 1rem;
}

a {
  color: #AE841F;
  text-decoration: none;
}

a:hover {
  color: #ae965d;
}

a:visited {
  color: #AE841F;
}

a:active {
  color: #AE841F;
}
</style>
