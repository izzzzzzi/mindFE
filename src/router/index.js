import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Card from '../components/Card.vue'
import Board from '../components/Board.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  // url 해시 싸용 안함 
  mode: 'history',
  routes : [
    { path : '/', component : Home },
    { path : '/login', component : Login },
    // 중첩 라우팅 
    { path : '/b/:bid', component : Board, children: [
      {path: 'c/:cid', component: Card},
    ]},
    { path : '*', component : NotFound}
  ]
})

export default router