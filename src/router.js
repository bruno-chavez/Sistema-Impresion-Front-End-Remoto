import Vue from 'vue'
import Router from 'vue-router'

// Auth
import Logout from "./components/Auth/Logout";

// Student
import Upload from './components/User/Upload'
import SudentDashboard from './components/User/StudentDashboard'
import StudentLogin from "./components/User/StudentLogin";

// Admin
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLogin from "./components/Admin/AdminLogin";
import RegisterUsers from "./components/Admin/RegisterUsers";

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
      component: SudentDashboard
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
    }
  ]
});

export default router
