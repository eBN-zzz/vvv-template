import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import { ConfigProvider, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(ConfigProvider)
app.use(Tabbar)
app.use(TabbarItem)

app.mount('#app')
