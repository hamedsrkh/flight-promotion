import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

async function prepareApp() {
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledRequest: 'bypass' })
}

const app = createApp(App)

app.use(router)

prepareApp().then(() => {
  app.mount('#app')
})
