import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './assets/global.css'
import 'element-plus/dist/index.css'
import './components/index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
