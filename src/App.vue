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
      :cocktailHeader="product.cocktailHeader"
      :cocktailBody="product.cocktailBody"
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
          img: require("./assets/images/Khloris Can Mock.png"),
          title: "Khloris",
          caption: "Floral Herbal Tea with Honey and Mosaic Hops",
          color: "#702E3E",
          bg: "#EFB8A9",
          icon: require("./assets/images/icon_flower.svg"),
          cocktailHeader: "Khloris Cocktail",
          cocktailBody: "1.5 oz Gin, 1 oz Khloris, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 2 oz Soda Water, Lemon Wheel"
        },
        {
          img: require("./assets/images/Mellona Can Mock.png"),
          title: "Mellona",
          caption: "Earl Grey Tea with Honey",
          color: "#003B4A",
          bg: "#A191B2",
          icon: require("./assets/images/icon_drop.svg"),
          cocktailHeader: "Mellona Cocktail",
          cocktailBody: "1.5 oz Vodka, 1 oz Mellona, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 2 oz Soda Water, Lemon Wheel"
        },
        {
          img: require("./assets/images/Pomona Can Mock.png"),
          title: "Pomona",
          caption: "Fruity Green Tea with Honey and Mosaic Hops",
          color: "#1A5632",
          bg: "#BDCF9B",
          icon: require("./assets/images/icon_hop.svg"),
          cocktailHeader: "Pomona Cocktail",
          cocktailBody: "1.5 oz Vodka, 1 oz Pomona, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 2 oz Soda Water, Lemon Wheel"
        },
        {
          img: require("./assets/images/Sparkling Can Mock.png"),
          title: "Sparkling Water",
          caption: "Simple, Light and Bubbly Sparkling Water",
          color: "#415364",
          bg: "#FFFFFF",
          icon: require("./assets/images/icon_star.svg"),
          cocktailHeader: "Sparkling Cocktail",
          cocktailBody: "1.5 oz Vodka, 1 oz Sparkling, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 2 oz Soda Water, Lemon Wheel"
        },
        {
          img: require("./assets/images/Tonic Can Mock.png"),
          title: "Tonic Water",
          caption: "Deliciously Crisp Citrus Based Tonic",
          color: "#003B4A",
          bg: "#B2E1D8",
          icon: require("./assets/images/icon_lemon.svg"),
          cocktailHeader: "Tonic Cocktail",
          cocktailBody: "1.5 oz Gin, 1 oz Tonic, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 2 oz Soda Water, Lemon Wheel"
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
      console.log(this.scrollY)
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
