// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueMqtt from "vue-mqtt";

Vue.config.productionTip = false;
Vue.use(VueMqtt, "wss://iot.eclipse.org/ws", {
  clientId: "spokris" + parseInt(Math.random() * 100000)
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
