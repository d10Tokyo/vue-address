import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBDRRiFOcWKVTbx-QHbc_2LXD97wxAzMi0",
  authDomain: "my-address-pj-b2ff5.firebaseapp.com",
  databaseURL: "https://my-address-pj-b2ff5.firebaseio.com",
  projectId: "my-address-pj-b2ff5",
  storageBucket: "my-address-pj-b2ff5.appspot.com",
  messagingSenderId: "1097965861433",
  appId: "1:1097965861433:web:5b518704e8cd5a7ab66be8",
  measurementId: "G-E6JDMTZ91G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
