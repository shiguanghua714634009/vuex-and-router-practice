import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import UserNameOne from '../pages/UserNameOne.vue'
import UserNameTwo from '../pages/UserNameTwo.vue'
import StudentsHome from '../pages/StudentsHome.vue'
import UserOneDetail from '../components/UserOneDetail.vue'
import UserTwoDetail from '../components/UserTwoDetail.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            //主页的路由
            path:'/',
            name:'home',
            component:Home
        },
        {
            //用户1的路由
            path:'/user/userone',
            name:'userOne',
            component:UserNameOne,
            children: [
                {
                    path:'detail',
                    component:UserOneDetail,
                }
            ]
        },
        {
            //用户2的路由
            path:'/user/usertwo',
            name:'userTwo',
            component:UserNameTwo,
            children: [
                {
                    path:'detail',
                    component:UserTwoDetail,
                }
            ]
        },
        {
            //学生页面，使用动态可选路由
            path:'/students/:id?',
            name:'students',
            component:StudentsHome,

        }, 
    ],
    scrollBehavior (to) {
        if(to.params.id) {
            return {
                x:0,
                y:100
            }
            // return {
            //     // selector: to.hash,
            //     // offset: {x:0,y:100},
            //     // behavior: 'smooth',
            // }
        } else {
             return {
                x:0,
                y:0,
            }
        }
       
    }
})