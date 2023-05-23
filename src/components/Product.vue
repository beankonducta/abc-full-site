<template>
  <div class="product" :ref="title" :style="{ background: bg }" id="products">
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
    <img :src="icon" />
    </div>
    <div
      class="product-wrapper fade"
      :class="[{ visible: isVisible }]"
    >
      <div class="title" :style="{ color: color }" :class="[screenWidth <= 1000 ? 'hide' : '' ]">{{ title }}</div>
      <img class="image slide-in-can" v-bind:src="img" />
      <div class="caption" :color="color">{{ caption }}</div>
    </div>
    <div
      class="cocktail"
      :style="{ background: this.color, color: this.bg }"
      :class="[isVisible ? 'slide-in' : 'slide-out', screenWidth <= 1000 ? 'hide' : '']"
    >
      <div class="cocktail-header">{{  cocktailHeader }}</div>
      <div class="cocktail-body">
       {{  cocktailBody }}
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
    scrollY: Number,
    arrowColor: String,
    icon: String,
    cocktailHeader: String,
    cocktailBody: String
  },
  data() {
    return {
      isVisible: false,
      yPos: 0,
      screenWidth: 0
    };
  },
  mounted() {
    this.yPos =
      this.$refs[this.title].getBoundingClientRect().y +
      document.documentElement.scrollTop;
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.$el);
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    handleIntersect(entries) {
      const entry = entries[0];
      this.isVisible = entry.isIntersecting;
    },
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  computed: {
    yOffset() {
      return this.scrollY - this.yPos;
    },
    cocktailX() {
      let x = this.yOffset;
      let p = x / 7;
      return p >= 0 ? "0%" : p + "%";
    },
    imageX() {
      let x = this.yOffset;
      let p = x / 7;
      return p >= 0 ? "0%" : p * -1 + "%";
    },
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
  text-transform: uppercase;
  letter-spacing: 1rem;
}
.image {
  width: 60%;
}
.caption {
  font-size: calc(0.7rem + 1vw);
  font-family: "Nightingale";
  text-transform: uppercase;
  letter-spacing: .12rem
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
  position: absolute;
  top: 35%;
  left: -30%;
  padding-left: 1%;
  border-radius: 0% 1% 1% 0%;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.2);
  clip-path: polygon(0% 0%, 96% 0, 100% 100%, 0% 100%);
}

.cocktail a {
  padding-top: 2vh;
}

.cocktail-header {
  padding-top: 2vh;
  font-size: calc(1rem + 2vw);
  font-family: "BNMainz";
  text-transform: uppercase;
  letter-spacing: 1rem;
}

.cocktail-body {
  padding: 2vh;
  font-size: calc(0.5rem + 1vw);
  font-family: "Nightingale";
}

.arrow {
  position: absolute;
  top:0;
  left: 1%;
  width: 15%;
}

.slide-in,
.slide-in-can {
  animation: slide-in 2s forwards;
}

.slide-out,
.slide-out-can {
  animation: slide-out 2s forwards;
}

.fixed {
  position: fixed;
  top: 0;
}

.relative {
  position: relative;
}

.hide {
  display: none;
}

@keyframes slide-in {
  0% {
    left: -30%;
  }
  50% {
    left: -30%;
  }
  100% {
    left: 0%;
  }
}

@-webkit-keyframes slide-in {
  0% {
    left: -30%;
  }
  50% {
    left: -30%;
  }
  100% {
    left: 0%;
  }
}

@keyframes slide-out {
  100% {
    left: -30%;
  }
}

@-webkit-keyframes slide-out {
  100% {
    left: -30%;
  }
}

@keyframes slide-in-can {
  100% {
    margin-right: 0%;
  }
}

@-webkit-keyframes slide-in-can {
  100% {
    margin-right: 0%;
  }
}

@keyframes slide-out-can {
  100% {
    margin-right: 100%;
  }
}

@-webkit-keyframes slide-out-can {
  100% {
    margin-right: 100%;
  }
}
</style>
