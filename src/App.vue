<template>
  <div id="app">
    <NavBar @switchAlc="switchAlc($event)"></NavBar>
    <Header></Header>
    <Product v-for="(product, index) in products" :key="product.title" :img="product.img" :title="product.title"
      :caption="product.caption" :color="product.color" :bg="product.bg" :scrollY="scrollY"
      :arrowColor="index > 0 ? products[index - 1].bg : 'white'" :icon="product.icon"
      :cocktailHeader="alc ? product.cocktailHeader : product.mocktailHeader"
      :cocktailBody="alc ? product.cocktailBody : product.mocktailBody" :alc="alc" />
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
      alc: false,
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
          img: require("./assets/images/Khloris_WEB.png"),
          title: "Khloris",
          caption: "Floral Herbal Tea with Honey and Mosaic Hops",
          color: "#702E3E",
          bg: "#EFB8A9",
          icon: require("./assets/images/icon_flower.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `G and Tea  <br><br>
                         - 2 oz Gin, the more herbal the better <br>
                         - 1/2 oz lime juice <br>
                         - 4 oz Augury Khloris <br>
                         - lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lime wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Tonic and Tea <br><br>
                         - 3 oz Augury Tonic Water <br>
                         - 1/2 oz lime juice <br>
                         - 3 oz Augury Khloris <br>
                         - lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lime wheel.`
        },
        {
          img: require("./assets/images/Mellona_WEB.png"),
          title: "Mellona",
          caption: "Earl Grey Tea with Honey",
          color: "#003B4A",
          bg: "#A191B2",
          icon: require("./assets/images/icon_drop.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Earl Grey Collins <br><br>
                         - 2 oz Dry Gin <br>
                         - 1 oz lemon juice <br>
                         - 4 oz Augury Mellona <br>
                         - orange wedge <br>
                         - fresh mint <br><br>
                         Stir over ice and serve in a highball glass. Garnish with orange and mint.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Earl Grey Collins <br><br>
                         - 3 oz Augury Tonic Water <br>
                         - 1 oz lemon juice <br>
                         - 3 oz Augury Mellona <br>
                         - orange wedge <br>
                         - fresh mint <br><br>
                         Stir over ice and serve in a highball glass. Garnish with orange and mint.`
        },
        {
          img: require("./assets/images/Pomona_WEB.png"),
          title: "Pomona",
          caption: "Fruity Green Tea with Honey and Mosaic Hops",
          color: "#1A5632",
          bg: "#BDCF9B",
          icon: require("./assets/images/icon_hop.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Scotch Green Tea <br><br>
                         - 2 oz blended scotch <br>
                         - 6 oz Augury Pomona <br>
                         - 1/2 oz lemon juice <br>
                         - lemon wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lemon wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Green Tea Ginger <br><br>
                         - 3 oz Taproot Lemongrass Ginger Ale <br>
                         - 3 oz Augury Pomona <br>
                         - 1 oz lime juice <br>
                         - fresh mint <br>
                         - candied ginger <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with mint and candied ginger.`
        },
        {
          img: require("./assets/images/Sparkling_Cascara_WEB.png"),
          title: "Sparkling Water - With Cascara",
          caption: "Light and Bubbly Sparkling Water with Coffee Cherry Tea",
          color: "#591a1a",
          bg: "#e69c84",
          icon: require("./assets/images/icon_cc.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Bourbon Coffee Cherry Soda <br><br>
                         - 2 oz bourbon <br>
                         - 6 oz Augury Sparkling Water With Cascara <br>
                         - Orange Slice <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with orange slice.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `NA Bourbon Soda <br><br>
                         - 2 oz NA bourbon (spiritless is a good brand) <br>
                         - 6 oz Augury Sparkling Water <br>
                         - Orange Slice <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with orange slice.`,
        },
        {
          img: require("./assets/images/Sparkling_Lime_WEB.png"),
          title: "Sparkling Water - With Lime",
          caption: "Light and Bubbly Sparkling Water with Lime Juice",
          color: "#38773a",
          bg: "#a8d491",
          icon: require("./assets/images/icon_lime.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Tequila Soda <br><br>
                         - 2 oz blanco tequila <br>
                         - 6 oz Augury Sparkling Water With Lime <br>
                         - Lime Wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lime wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `NA Tequila Soda <br><br>
                         - 2 oz NA tequila (lyres is a good brand) <br>
                         - 6 oz Augury Sparkling Water With Lime <br>
                         - Lime Wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lime wheel.`,
        },
        {
          img: require("./assets/images/Sparkling_Grapefruit_WEB.png"),
          title: "Sparkling Water - With Grapefruit",
          caption: "Light and Bubbly Sparkling Water with Grapefruit Juice",
          color: "#ee3e23",
          bg: "#fcd69a",
          icon: require("./assets/images/icon_gf.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Paloma <br><br>
                         - 2 oz blanco tequila <br>
                         - 6 oz Augury Sparkling Water <br>
                         - Lime Wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lime wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Grapefruit Lemon lime Lavender Soda <br><br>
                         - 4 oz Taproot Lemon Lime Lavender Soda <br>
                         - 4 oz Augury Sparkling Water <br>
                         - Lime Wheel <br><br>
                         Pour over ice and serve in your favorite glass. Garnish with lime wheel.`,
        },
        {
          img: require("./assets/images/Sparkling_Tonic_WEB.png"),
          title: "Tonic Water",
          caption: "Deliciously Crisp Citrus Based Tonic",
          color: "#003B4A",
          bg: "#B2E1D8",
          icon: require("./assets/images/icon_lemon.svg"),
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Whiskey Tonic <br><br>
                         - 2 oz whiskey (bourbon works well) <br>
                         - 6 oz Augury Tonic Water <br>
                         - Lemon wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Lemon-Lime Tonic <br><br>
                         - 3 oz Taproot Lemon Lime Lavender Soda <br>
                         - 1 oz fresh lemon or lime juice <br>
                         - 4 oz Augury Tonic Water <br>
                         - Lemon or lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.`
        },
      ],
      scrollY: 0,
    };
  },
  methods: {
    switchAlc(value) {
      this.alc = value;
    },
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
  mounted() {
    this.alc = localStorage.getItem("alc") === "true";
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
  font-family: "Nightingale";
  src: url("./assets/fonts/Nightingale.woff2") format("woff2"),
    url("./assets/fonts/Nightingale.woff") format("woff");
}

@font-face {
  font-family: "BNBergen";
  src: url("./assets/fonts/BNBergen.woff2") format("woff2"),
    url("./assets/fonts/BNBergen.woff") format("woff");
}

h1 {
  margin-bottom: 20px;
}

body {
  width: 101vw;
  margin-left: -1vw;
  overflow-x: hidden;
}

#app {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0 auto;
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

.a {
  color: #003b4a;
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

@media screen and (max-width: 1099px) {
  a, .a {
    font-size:.5rem;
  }

  .title {
	font-size: 2rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: .75rem;
  margin-bottom: 25px;
  color: #003b4a;
}

.subtitle {
	font-size: 1.5rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: .7rem;
  color: #003b4a;
  margin-bottom: 25px;
}

.caption {
	font-size: 1rem;
	font-family: "Nightingale";
	text-transform: uppercase;
	letter-spacing: .12rem
}

.text {
  font-size: .5rem;
  font-family: "BNBergen";
  color: #003b4a;
  text-transform: uppercase;
  line-height: 1.2rem;
	letter-spacing: .1rem;
}

.text-title {
  margin-top: 10px;
  font-size: 1rem;
}
}

@media screen and (min-width: 1100px) {

  a, .a {
    font-size: 1rem;
  }
  .title {
	font-size: 4rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: 1rem;
  margin-bottom: 35px;
  color: #003b4a;
}

.subtitle {
	font-size: 2.5rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: .7rem;
  color: #003b4a;
  margin-bottom: 25px;
}

.caption {
	font-size: 1.5rem;
	font-family: "Nightingale";
	text-transform: uppercase;
	letter-spacing: .12rem
}

.text {
  font-size: 1rem;
  font-family: "BNBergen";
  color: #003b4a;
  text-transform: uppercase;
  line-height: 1.2rem;
	letter-spacing: .1rem;
}

.text-title {
  margin-top: 10px;
  font-size: 1.5rem;
}
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #003b4a #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #003b4a;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

</style>
