import Vue from 'vue'
import Router from 'vue-router'

// Auth
import Logout from "./components/Auth/Logout";

// Student
import Upload from './components/User/Upload'
import StudentDashboard from './components/User/StudentDashboard'
import StudentLogin from "./components/User/StudentLogin";

// Admin
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLogin from "./components/Admin/AdminLogin";
import RegisterUsers from "./components/Admin/RegisterUsers";
import ResetPages from "./components/Admin/ResetPages";

import {eventBus} from "./eventBus";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'studentLogin',
      component: StudentLogin
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/student/dashboard',
      name: 'userDashboard',
      component: StudentDashboard
    },
    {
      path: '/student/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/admin/register',
      name: 'registerUsers',
      component: RegisterUsers
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLogin
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/pages',
      name: 'resetPages',
      component: ResetPages
    }
  ]
});

router.beforeEach((to, from, next) => {
  eventBus.$emit('check');
  next();
});

export default router
