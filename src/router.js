import Vue from 'vue'
import register from './main/register.vue'
import login from './main/login.vue'

import Goodslist from './main/GoodsList.vue'
import Account from './main/Account.vue'

//1导入路由
import VueRouter from 'vue-router'
//2，手动安装Vuerouter
Vue.use(VueRouter)

//3，创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/Goodslist',component:Goodslist},
        {path:'/Account',component:Account,
        children: [
            {
              path: 'register',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
              name: 'register',
              component: register
            },
            {
              path: 'login',
              name: 'login',
              component: login
            }
          ],}
    ]
})


export default router;