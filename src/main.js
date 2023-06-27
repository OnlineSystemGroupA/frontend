import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/theme/index.css';
import './assets/icon/logout/iconfont.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

axios.interceptors.request.use(config => {
    // 如果存在 token，请求携带这个 token
    console.log('寻找token')
    if (window.sessionStorage.getItem('tokenStr')) {
        config.headers['Authorization'] = window.sessionStorage.getItem('tokenHead') + window.sessionStorage.getItem('tokenStr');
        console.log(config)
    }
    return config;
}, error => {
    console.log(error);
})

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

