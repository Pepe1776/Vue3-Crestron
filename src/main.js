import { createApp } from "vue";
// import Vue from "vue";
import { Icon } from "@iconify/vue/dist/offline";
import VueIframe from "vue-iframes";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

// Crestron libraries
// import Ch5 from "./plugins/ch5";
// import './plugins/webxpanel'
// Vue.prototype.$CrComLib = Ch5;
// // Vue.prototype.$CrAppender = Ch5.getRemoteAppender('192.168.1.13', '8980')
// // Vue.prototype.$CrLogger = Ch5.getLogger(Vue.prototype.$CrAppender, true) // this intercepts console.log()
//
// import * as Crestron from "./api/ch5-wrapper";
// Vue.prototype.$api = Crestron;

import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";

window["bridgeReceiveIntegerFromNative"] =
  CrComLib.bridgeReceiveIntegerFromNative;
window["bridgeReceiveBooleanFromNative"] =
  CrComLib.bridgeReceiveBooleanFromNative;
window["bridgeReceiveStringFromNative"] =
  CrComLib.bridgeReceiveStringFromNative;
window["bridgeReceiveObjectFromNative"] =
  CrComLib.bridgeReceiveObjectFromNative;

export default {
  return: Icon,
};

createApp(App).use(store).use(router).use(VueIframe).mount("#app");
