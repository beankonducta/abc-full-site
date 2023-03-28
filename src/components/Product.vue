<template>
  <div
    class="product fade"
    :ref="title"
    :class="{ visible: isVisible }"
    :style="{ background: bg }"
  >
    <div class="product-wrapper" id="products">
      <div class="title" :style="{ color: color }">{{ title }}</div>
      <img class="image" v-bind:src="img" />
      <div class="caption" :color="color">{{ caption }}</div>
    </div>
    <div class="cocktail" :style="{left: cocktailX, background: this.color, color: this.bg }">
      <div class="cocktail-header">
        about
      </div>
      <div class="cocktail-body">
        this is made with really yummy ingredients we promise you're gonna really love it
      </div>
      <div class="cocktail-header">
        cocktail idea
      </div>
      <div class="cocktail-body">
        2oz gin, 1oz lemon, 1oz sugar. shake ingredients and pour over crushed ice, top with 6oz mellona
      </div>
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
    bg: String,
    scrollY: Number
  },
  data() {
    return {
      isVisible: false,
      yPos: 0
    };
  },
  mounted() {
    this.yPos = this.$refs[this.title].getBoundingClientRect().y + document.documentElement.scrollTop
    console.log(this.yPos)
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.$el);
  },
  methods: {
    handleIntersect(entries) {
      const entry = entries[0];
      this.isVisible = entry.isIntersecting;
    },
  },
  computed: {
    yOffset() {
      return this.scrollY - this.yPos
    },
    cocktailX() {
      let x = this.yOffset
      let p = x / 7;
      return p >= 0? "0%" : p+"%";
    }
  }
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
  text-transform: uppercase;
}
.image {
  width: 60%;
}
.caption {
  font-size: calc(0.7rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
}

.fade {
  opacity: 0;
  transition: 0.5s opacity ease-in-out;
}

.visible {
  opacity: 1;
}

.cocktail {
  width: 30%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: -30%;
  border-radius: 0% 5% 5% 0%;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, .2);
  font-size: calc(0.7rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
}

.cocktail a {
  padding-top: 2vh;
}

.cocktail-header {
  padding-top: 1vh;
  font-size: calc(1rem + 2vw);
  font-family: "BNMainz";
  text-transform: uppercase;
}

.cocktail-body {
  padding: 1vh;
  font-size: calc(0.7rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
}
</style>
