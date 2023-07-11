<template>
  <div id="app">
    <NavBar></NavBar>
    <Header></Header>
    <Product
      v-for="(product, index) in products"
      :key="product.title"
      :img="product.img"
      :title="product.title"
      :caption="product.caption"
      :color="product.color"
      :bg="product.bg"
      :scrollY="scrollY"
      :arrowColor="index > 0 ? products[index - 1].bg : 'white'"
      :icon="product.icon"
      :cocktailHeader="alc ? product.cocktailHeader : product.mocktailHeader"
      :cocktailBody="alc ? product.cocktailBody : product.mocktailBody"
      :alc="alc"
      @switchAlc="alc = !alc"
    />
    <Footer></Footer>
    <!-- <Product
      :key="products[currentProduct].title"
      :img="products[currentProduct].img"
      :title="products[currentProduct].title"
      :caption="products[currentProduct].caption"
      :color="products[currentProduct].color"
    /> -->
    <!-- <button @click="next()">next</button>
    <button @click="prev()">prev</button> -->
  </div>
</template>

<script>
import Product from "./components/Product.vue";
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      alc: true,
      // light then dark, mellona, pomona, khloris, tonic, water, accent gold color last
      colors: [
        "#A191B2",
        "#003B4A",
        "#BDCF9B",
        "#1A5632",
        "#EFB8A9",
        "#702E3E",
        "#B2E1D8",
        "#003B4A",
        "#FFFFFF",
        "#415364",
        "#AE841F",
      ],
      currentProduct: 0,
      products: [
        {
          img: require("./assets/images/LGG Can Mock.png"),
          title: "Lemongrass Ginger Ale",
          caption: "",
          color: "",
          bg: "",
          icon: require(""),
          cocktailHeader: "",
          cocktailBody: "",
          mocktailHeader: "",
          mocktailBody: ""
        },
        {
          img: require("./assets/images/BBM Can Mock.png"),
          title: "Blackberry Mint",
          caption: "",
          color: "",
          bg: "",
          icon: require(""),
          cocktailHeader: "",
          cocktailBody: "",
          mocktailHeader: "",
          mocktailBody: ""
        },
        {
          img: require("./assets/images/SF Can Mock.png"),
          title: "Strawberry Fields",
          caption: "",
          color: "",
          bg: "",
          icon: require(""),
          cocktailHeader: "",
          cocktailBody: "",
          mocktailHeader: "",
          mocktailBody: ""
        },
        {
          img: require("./assets/images/RB Can Mock.png"),
          title: "Rootbeer",
          caption: "",
          color: "",
          bg: "",
          icon: require(""),
          cocktailHeader: "",
          cocktailBody: "",
          mocktailHeader: "",
          mocktailBody: ""
        },
        {
          img: require("./assets/images/CL Can Mock.png"),
          title: "Cherry Limeade",
          caption: "",
          color: "",
          bg: "",
          icon: require(""),
          cocktailHeader: "",
          cocktailBody: "",
          mocktailHeader: "",
          mocktailBody: ""
        },
        {
          img: require("./assets/images/LLM Can Mock.png"),
          title: "Lemon Lime Lavender",
          caption: "",
          color: "",
          bg: "",
          icon: require(""),
          cocktailHeader: "",
          cocktailBody: "",
          mocktailHeader: "",
          mocktailBody: ""
        },
      ],
      scrollY: 0,
    };
  },
  methods: {
    next() {
      this.currentProduct++;
      if (this.currentProduct > this.products.length - 1)
        this.currentProduct = 0;
    },
    prev() {
      this.currentProduct--;
      if (this.currentProduct < 0)
        this.currentProduct = this.products.length - 1;
    },
    handleScroll(event) {
      this.scrollY = event.currentTarget.scrollY
    },
  },
  components: {
    Product,
    Header,
    NavBar,
    Footer,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@font-face {
  font-family: "BNMainz";
  src: url("./assets/fonts/BNMainz.woff2") format("woff2"),
    url("./assets/fonts/BNMainz.woff") format("woff");
}
@font-face {
  font-family: "MyWebFont";
  src: url("./assets/fonts/Nightingale.woff2") format("woff2"),
    url("./assets/fonts/Nightingale.woff") format("woff");
}

body {
  width: 102vw;
  margin-left: -1vw;
  overflow-x: hidden;
}

#app {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  position: relative;
}

a {
  color: #ae841f;
  text-decoration: none;
}

a:hover {
  color: #bea977;
}

a:visited {
  color: #ae841f;
}

a:visited:hover {
  color: #bea977;
}

a:active {
  color: #bea977;
}
</style>
