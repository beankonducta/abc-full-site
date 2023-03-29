<template>
  <div class="footer">
    <a id="contact" href="mailto:hello@augurybeverage.co">Contact us</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin-top: 5vh;
  margin-bottom: 1vh;
  overflow: hidden;
  text-align: center;
}

#contact {
  font-size: calc(.4rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
  letter-spacing: .12rem
}
</style>
