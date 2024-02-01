<template>
	<div class="product" :ref="title" :style="{ background: bg }" id="products">
		<div class="arrow">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 144 48.95" style="enable-background: new 0 0 144 48.95" xml:space="preserve">
				<path :fill="arrowColor" d="M2.66,0.25C29.78,6.92,53.5,24.17,70.43,48.11c0.79,1.12,2.4,1.12,3.19,0c16.96-23.98,40.73-41.25,67.89-47.9
	C142.07,0.11,142.92,0,144,0H0C1.2,0,2.12,0.14,2.66,0.25z" />
			</svg>
			<img class="icon" :src="icon" :class="screenWidth <= minWidth ? 'hide' : ''"/>
		</div>
		<div class="product-wrapper fade" :class="[{ visible: isVisible }]" :style="{ opacity: opacity }"
			:id="`${title.replace(' ', '-')}`">
			<div class="title" :style="{ color: color }">{{ title }}</div>
			<img class="image slide-in-can" v-bind:src="img" />
			<div class="caption" :style="{ color: compColor }">{{ caption }}</div>
		</div>
		<div v-if="showCocktail" class="cocktail" :style="{ background: this.color }"
			:class="[isVisible ? 'slide-in' : 'slide-out', screenWidth <= minWidth ? 'hide' : '']">
			<div class="subtitle" :style="{color: this.bg, opacity: opacity }">{{ cocktailHeader }}</div>
			<div class="text" :style="{color: this.bg, opacity: opacity }" v-html="cocktailBody">

			</div>
		</div>
		<div v-if="showCocktail" class="cocktail-mobile" :style="{ background: this.color}"
			:class="[screenWidth > minWidth ? 'hide' : '']">
			<div class="subtitle cocktail-mobile-header" :style="{color: this.bg, opacity: opacity }">{{ cocktailHeader }}</div>
			<div class="text cocktail-mobile-body" :style="{color: this.bg, opacity: opacity }" v-html="cocktailBody">
			</div>
		</div>
	</div>
</template>

<script>
// import tinycolor from "tinycolor2";
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
		cocktailBody: String,
		alc: Boolean
	},
	data() {
		return {
			isVisible: false,
			yPos: 0,
			screenWidth: 0,
			minWidth: 1100,
			showCocktail: false,
		};
	},
	updated() {
		this.yPos =
			this.$refs[this.title].getBoundingClientRect().y +
			document.documentElement.scrollTop;
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
		switchAlc() {
			this.alc = !this.alc;
			this.$emit("switchAlc", this.alc)
		},
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
		compColor() {
			return this.color;
		},
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
		opacity() {
			// let x = this.yOffset;
			// let p = x / 7;

			// return `${150-p}%`;
			return "100%";

		}
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

.image {
	width: 60%;
	min-width: 280px;
	max-width: 700px;
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
	min-width: 380px;
	max-width: 500px;
	position: absolute;
	text-align: left;
	top: 35%;
	left: -30%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	padding-right: 1%;
	padding-left: 2%;
	border-radius: 0% 1% 1% 0%;
	box-shadow: -2px 5px 10px rgba(46, 35, 35, 0.1);
}

.cocktail-mobile {
	width: 80%;
	position: relative;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	padding-right: 10%;
	padding-left: 10%;
	margin-top: 5%;
	border-radius: 0% 1% 1% 0%;
	box-shadow: -2px 5px 10px rgba(46, 35, 35, 0.1);
}

.cocktail-mobile-body {
	text-align: left;
	margin-bottom: 10px;
}

.cocktail-mobile-header {
	margin-bottom: 30px;
	margin-top: 10px;
}

.cocktail a {
	padding-top: 2vh;
}

.cocktail-header {
	padding-top: 2vh;
	width: 85%;
	margin: 0 auto;
	font-size: calc(1rem + 2vw);
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: 1rem;
	margin-bottom: 15px;
}

.cocktail-body {
	padding: 2vh;
	font-size: calc(0.2rem + 1vw);
	font-family: "BNBergen";
	text-transform: uppercase;
	text-align: left;
	line-height: 1.5rem;
	letter-spacing: .1rem;
}

.arrow {
	position: absolute;
	top: -1px;
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

.icon {
	animation: subtle-move 2s infinite;
}

@keyframes subtle-move {
	0% {
		transform: translate(0px, 0px);
	}

	50% {
		transform: translate(0px, 5px);
	}

	100% {
		transform: translate(0px, 0px);
	}
}	

@keyframes slide-in {
	0% {
		left: -70%;
	}

	30% {
		left: -70%;
	}

	100% {
		left: 0%;
	}
}

@-webkit-keyframes slide-in {
	0% {
		left: -70%;
	}

	30% {
		left: -70%;
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
