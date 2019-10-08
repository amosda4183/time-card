import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import * as firebase from "firebase/app"
import "firebase/analytics"





Vue.config.productionTip = false;

new Vue({

  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyDrpEMIrJ4mrzX7iWocMWwf6KTmoffUa80",
      authDomain: "time-card-99d3b.firebaseapp.com",
      databaseURL: "https://time-card-99d3b.firebaseio.com",
      projectId: "time-card-99d3b",
      storageBucket: "",
      messagingSenderId: "605466798745",
      appId: "1:605466798745:web:d0dba43cd0f390f503a608",
      measurementId: "G-ZRMLSXC7N4"
    };
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
