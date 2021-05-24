import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter);

// 컴포넌트 생성
const Login = { template : '<div>Login Page</div>'}
const NotFound = { template : '<div>Page Not Found</div>'}

const router = new VueRouter({
  // url 해시 싸용 안함 
  mode: 'history',
  routes : [
    { path : '/', component : App },
    { path : '/login', component : Login },
    { path : '*', component : NotFound}
  ]
})

export default router