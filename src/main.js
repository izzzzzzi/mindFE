import Vue from 'vue'
import router from './router'
import App from './App.vue'

new Vue ({
  // el 속성을 통해 뷰 인스턴스가 그려질 지점을 지정
  el: '#app',
  router,
  render: h => h(App)
})
