import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHashHistory } from 'vue-router'

import './style.css'
import App from './App.vue'

import Example from './pages/Example.vue'
import Example2 from './pages/Example2.vue'
import Home from './pages/Home.vue'
import Tools from './pages/Tools.vue'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const routes = [
  { path: '/', component: Home },
  { path: '/example',name: 'example',
    components: {
        default: Example,
        nav: Tools
    }
  },
  {
    path: '/example2',
    components: {
        default: Example2,
        nav: Tools
  }
}
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.use(mdiVue, {icons: mdijs})
app.mount('#app')
