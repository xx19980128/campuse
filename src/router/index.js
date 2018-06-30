import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/',
  routes: [{
      path: '/',
      name: 'Header',
      component: resolve => require(['@/components/Header'], resolve),
      redirect: { name: 'Home' },
      children:[{
      	path:'home',
      	name:'Home',
      	component: resolve => require(['@/components/Home'], resolve)
      },{
        path:'transcript',
        name:'Transcript',
        component: resolve => require(['@/components/Transcript'], resolve)
      },{
        path:'examtime',
        name:'ExamTimetable',
        component: resolve => require(['@/components/ExamTime'], resolve)
      },{
        path:'timetable',
        name:'TimeTable',
        component: resolve => require(['@/components/TimeTable'], resolve)
      },{
        path:'computerscore',
        name:'Computerscore',
        component: resolve => require(['@/components/Computerscore'], resolve)
      },{
        path:'schoolnotice',
        name:'Schoolnotice',
        component: resolve => require(['@/components/Schoolnotice'], resolve),
      },{
        path:'focus',
        name:'Focus',
        component: resolve => require(['@/components/Focus'], resolve),
      },{
        path:'newsinformaion',
        name:'NewsInformation',
        component: resolve => require(['@/components/NewsInformation'], resolve),
      },{
        path:'doubledegree',
        name:'DoubleDegree',
        component: resolve => require(['@/components/DoubleDegree'], resolve),
      },{
        path:'schoolnotice/:id',
        name:'Schoolnoticeid',
        component: resolve => require(['@/components/News'], resolve)
      },{
        path:'doubledegree/:id',
        name:'Doubledegreeid',
        component: resolve => require(['@/components/News'], resolve)
      },{
        path:'focus/:id',
        name:'News',
        component: resolve => require(['@/components/News'], resolve)
      },{
        path:'newsinformation/:id',
        name:'Newsinformationid',
        component: resolve => require(['@/components/News'], resolve)
      },{
        path: '/enroll',
        name: 'Enroll',
        component: resolve => require(['@/components/Enroll'], resolve)
      }]
    },{
      path: '/modifypassword',
      name: 'ModifyPassword',
      component: resolve => require(['@/components/ModifyPassword'], resolve)
    },{
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login'], resolve)
    }

  ]
})
