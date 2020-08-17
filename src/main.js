// import $ from 'jquery'
// import './css/index.css'
// import './css/index.less'
// import './css/index.scss'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Vue from 'vue'

// $(function(){
//     $('li:odd').css('backgroundColor','green')
//     $('li:even').css('backgroundColor','red')
// })
 
// import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
import login from './login.vue'

// var login={
//     template:'<h1>这是一个组件</h1>'
// }

var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    //这里会报：You are using the runtime-only build of Vue where the template compiler is not available.
    // components:{
    //     login
    // }

    //再webpack中，如果想要通过vue，把一个组件放到页面中，render函数可以实现
    render:function(createElements){
        return createElements(login)
    }
    // methods: {
    //     render:function(createElements){
    //         return createElements(login);
    //     }
    // },
})
