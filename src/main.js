import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map';
// import '@/assets/fonts/style.css'


Vue.use(BaiduMap, {
        /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
        ak: '1wIblskQQ5RUFN7zjIzF8vcN2pqPLcnQ'
})

Vue.use(less)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
