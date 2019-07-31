import Vue from 'vue'
import Router from 'vue-router'

// Auth
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Logout from "./components/Auth/Logout";

// User
import Upload from './components/User/Upload'
import UserDashboard from './components/User/UserDashboard'
import Print from './components/User/Print'

Vue.use(Router);

let router = new Router({
  routes: [{
    path: '/register',
    name: 'register',
    component: Register
  },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/dashboard',
      name: 'userDashboard',
      component: UserDashboard
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/print',
      name: 'print',
      component: Print
    }
  ]
});

/*
router.beforeEach((to, from, next) => {
console.log();
next();
});
*/

export default router
