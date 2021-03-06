import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  BootstrapVue,
  BootstrapVueIcons,
  IconsPlugin
} from 'bootstrap-vue'

Vue.config.productionTip = false;
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)
Vue.mixin({
  methods: {
    getDateString(dateStr) {
      if (!dateStr) {
        return '';
      }
      var date = new Date(dateStr);
      return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    }
  },
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");