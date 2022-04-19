import { createApp } from 'vue'

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'animate.css'
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$wow = wow
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
