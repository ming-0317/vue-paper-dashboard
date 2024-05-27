import Vue from "vue";
import App from "./App";
import router from "./router/index";

import ProvisionDashboard from "./plugins/provisionDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(ProvisionDashboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
