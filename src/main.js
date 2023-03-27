import Vue from 'vue'
import App from './App.vue'

import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

Vue.use(VueScrollReveal,
  {
    easing: "ease-in-out",
    delay: 300
  });

new Vue({
  render: h => h(App),
}).$mount('#app')
