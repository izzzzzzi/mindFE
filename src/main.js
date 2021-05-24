import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Login = { template : '<div>Login Page</div>'}
const NotFound = { template : '<div>Page Not Found</div>'}

const router = new VueRouter({
  mode: 'history',
  routes : [
    { path : '/login', component : Login },
    { path : '/', component : App },
    { path : '*', component : NotFound}
  ]
})

new Vue ({
  // el 속성을 통해 뷰 인스턴스가 그려질 지점을 지정
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
