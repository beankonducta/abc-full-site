<template>
	<div class="product" :ref="title" :style="{ background: bg }" id="products">
		<div class="arrow">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 144 48.95" style="enable-background: new 0 0 144 48.95" xml:space="preserve">
				<path :fill="arrowColor" d="M2.66,0.25C29.78,6.92,53.5,24.17,70.43,48.11c0.79,1.12,2.4,1.12,3.19,0c16.96-23.98,40.73-41.25,67.89-47.9
	C142.07,0.11,142.92,0,144,0H0C1.2,0,2.12,0.14,2.66,0.25z" />
			</svg>
			<img :src="icon" />
		</div>
		<div class="product-wrapper fade" :class="[{ visible: isVisible }]">
			<div class="title" :style="{ color: color }" :class="[screenWidth <= 1000 ? 'hide' : '']">{{ title }}</div>
			<img class="image slide-in-can" v-bind:src="img" />
			<div class="caption" :color="color">{{ caption }}</div>
		</div>
		<div class="cocktail" :style="{ background: this.color, color: this.bg }"
			:class="[isVisible ? 'slide-in' : 'slide-out', screenWidth <= 1000 ? 'hide' : '']">
			<div class="alc" v-if="alc" @click="switchAlc()">
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.54 29.54"
					style="enable-background:new 0 0 29.54 29.54;" xml:space="preserve">
					<g>
						<path :fill="compColor"
							d="M16.62,5.53c0,1.02-0.83,1.85-1.85,1.85s-1.85-0.83-1.85-1.85s1.98-3.37,1.98-3.37S16.62,4.51,16.62,5.53z" />
						<path :fill="compColor" d="M15.29,14.26v-0.85c2.49-0.19,4.6-1.74,5.59-3.91H8.67c0.99,2.17,3.1,3.72,5.59,3.91v0.85v5.58v0.3
		c-0.3,0.2-1.24,0.85-2.17,1.9h5.38c-0.94-1.05-1.88-1.7-2.17-1.9v-0.3V14.26z" />
					</g>
				</svg>
			</div>
			<div class="alc" v-if="!alc" @click="switchAlc()">
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.54 29.54"
					style="enable-background:new 0 0 29.54 29.54;" xml:space="preserve">
					<g>
						<path :fill="compColor" d="M20.87,9.51h-9.47l3.9,3.9C17.79,13.21,19.89,11.67,20.87,9.51z" />
						<path :fill="compColor"
							d="M14.25,19.84v0.3c-0.3,0.2-1.24,0.85-2.17,1.9h5.38c-0.94-1.05-1.88-1.7-2.17-1.9v-0.3v-2.65l-1.04-1.04V19.84z" />
						<path :fill="compColor" d="M14.77,3.97c-5.96,0-10.81,4.85-10.81,10.81s4.85,10.8,10.81,10.8s10.81-4.85,10.81-10.8S20.73,3.97,14.77,3.97z
		M20.73,22.22c-1.69,1.35-3.8,2.1-5.96,2.1c-5.26,0-9.54-4.28-9.54-9.54c0-2.15,0.75-4.27,2.1-5.96l0.23-0.28l1.28,1.28l2.88,2.88
		l2.54,2.54l1.04,1.04l5.72,5.72L20.73,22.22z M22.22,20.73l-0.23,0.28l-6.7-6.7l-4.8-4.8L8.53,7.55l0.28-0.23
		c1.69-1.35,3.8-2.1,5.96-2.1c5.26,0,9.54,4.28,9.54,9.54C24.32,16.92,23.57,19.04,22.22,20.73z" />
					</g>
				</svg>
			</div>
			<div class="cocktail-header">{{ cocktailHeader }}</div>
			<div class="cocktail-body">
				{{ cocktailBody }}
			</div>
		</div>
	</div>
</template>

<script>
import tinycolor from "tinycolor2";
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
			return tinycolor(this.color).complement().toHexString();
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

.alc {
	position: absolute;
	bottom: -40%;
	left: 2%;
	width: 20%;
}

.alc:hover,
.alc:active {
	cursor: pointer;
	opacity: 0.75;
}

.arrow {
	position: absolute;
	top: 0;
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
