import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

async function prepareApp() {
    if (
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
        const { worker } = await import('./mocks/browser')
        return worker.start({onUnhandledRequest: "bypass"})
    }

    return Promise.resolve()
}

const app = createApp(App)

app.use(router)

prepareApp().then(() => {
    app.mount('#app')
})
