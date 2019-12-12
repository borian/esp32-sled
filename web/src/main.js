import Vue from "vue";
import App from "./App.vue";
import "hack";
import "../node_modules/hack/dist/dark-grey.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
