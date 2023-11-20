import { createApp } from 'vue'
import App from './App.vue'
import route from './Routing'

var app = createApp(App).use(route)
app.mount('#app')
