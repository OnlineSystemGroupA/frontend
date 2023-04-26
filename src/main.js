import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

new Vue({
    render: h => h(App),
    router: router,
    beforeCreate() {
        Vue.prototype.$bus = this	//安装全局事件总线
    }
}).$mount('#app')
