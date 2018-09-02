import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: []
});
new Vue({
    el: '#app',
    render: h => h(App),
    router
})