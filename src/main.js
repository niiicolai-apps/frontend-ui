import { router } from './router.js'
import { createApp } from 'vue'
import Layout from './Layout.vue'
import './css/variables.css'

const app = createApp(Layout)
app.use(router)
app.mount('#app')
