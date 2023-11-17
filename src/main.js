import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import '../public/style.css';
import router from './router'; // Vue Router를 import
import store from './store'; // Vuex Store를 import
import axios from 'axios'; // Vue axios를 import 

library.add(fas)

createApp(App)
  .use(router) // Vue Router를 앱에 등록
  .use(store)
  .provide('$axios', axios)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
  