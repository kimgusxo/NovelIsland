import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router' // Vue Router를 import

library.add(fas)

createApp(App)
  .use(router) // Vue Router를 앱에 등록
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')