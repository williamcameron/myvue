import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import 'popper.js'
import 'bootstrap'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/hello', component: HelloWorld }
];
const router = new VueRouter({
    routes
});
Vue.use(VueRouter);
new Vue({
    render: h => h(App),
    router
}).$mount('#app')