import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

export const createApp = ViteSSG(
  App,
  { routes: router.options.routes }, 
  (ctx) => {
    ctx.app.use(createPinia())
  }
)
