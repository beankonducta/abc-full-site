<template>
  <div class="footer">
    <div class="arrow">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 144 48.95"
      style="enable-background: new 0 0 144 48.95"
      xml:space="preserve"
    >
      <path
        :fill="arrowColor"
        d="M2.66,0.25C29.78,6.92,53.5,24.17,70.43,48.11c0.79,1.12,2.4,1.12,3.19,0c16.96-23.98,40.73-41.25,67.89-47.9
	C142.07,0.11,142.92,0,144,0H0C1.2,0,2.12,0.14,2.66,0.25z"
      />
    </svg>
    </div>
    <div id="about">
    <div class="title">about</div>
    <div class="text">Founded in 2022, our goal is to bring delicious and unique beverages to Utah and beyond. 
      <br>
      <br>
      From day one we had some sparkling tea and tonic recipes in the works but we wanted to leave the door open
      for further experimentation down the road. That's where the name Augury Beverage Company came from -- consider our freedom
      to expand our lineup of natural, hand crafted drinks an omen of delicious things to come, both within our current lineup and
      whatever we dream up in the future.
      <br>
      <br>
      Our beverages are all carefully created from natural, simple and whenever possible, local ingredients. Nothing you can't pronounce
      and nothing that's bad for you.
    </div>
  </div>
    <div class="footer-inner">
    <img class="footer-img" :src="require('@/assets/images/amphora.svg')" />
    <a id="contact" href="mailto:hello@augurybeverage.co">Contact us</a>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Footer",
  data() {
    return {
      arrowColor: "#B2E1D8"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding-top: 5vh;
  margin-bottom: 1vh;
  overflow: hidden;
  text-align: center;
  position: relative;
}

.footer-inner {
  width: 20%;
  margin: 0 auto;
}

.footer-img {
  width: 80%;
}

#contact {
  font-size: calc(.4rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
  letter-spacing: .12rem;
}

.title {
  font-size: calc(1rem + 4vw);
  font-family: "BNMainz";
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: #003B4A;
  padding-bottom: 1rem;
}
.text {
  font-size: calc(0.5rem + 1vw);
  font-family: "Nightingale";
  color: #003B4A;
}

#about {
  margin-top: 5vh;
  margin-bottom: 10vh;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}

.arrow {
  position: absolute;
  top:0;
  left: 1%;
  width: 15%;
}
</style>
