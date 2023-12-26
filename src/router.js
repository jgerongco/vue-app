
import { createRouter, createWebHistory } from 'vue-router';
import UserType from './components/userType.vue';
import Login from './components/login.vue';
import Signup from './components/signup.vue';
import ForgotPassword from './components/forgotpassword.vue';
import ForgotPasswordCode from './components/forgotpasswordcode.vue';
import HomePage from './components/homepage.vue';
import ReservationForm from './components/reservationform.vue';
import Room from './components/room.vue';
import Profile from './components/profile.vue';
import Notification from './components/notification.vue';
import Report from './components/report.vue';
import History from './components/history.vue';
import Schedule from './components/schedule.vue';

import AdminLogin from './components/adminLogin.vue';
import AdminSignup from './components/AdminSignup.vue';
import AdminHomePage from './components/adminHomePage.vue';
import AdminProfile from './components/adminProfile.vue';

const routes = [
      { path: "/", component: UserType },
      { path: "/login", component: Login },
      { path: "/signup", component: Signup },
      { path: "/forgotpassword", component: ForgotPassword },
      { path: "/forgotpasswordcode", component: ForgotPasswordCode },
      { path: "/homepage", component: HomePage },
      { path: "/reservationform", component: ReservationForm },
      { path: "/room", component: Room },
      { path: "/profile", component: Profile },
      { path: "/notification", component: Notification },
      { path: "/report", component: Report },
      { path: "/history", component: History },
      { path: "/schedule", component: Schedule },

      { path: "/adminLogin", component: AdminLogin },
      { path: "/adminSignup", component: AdminSignup },
      { path: "/adminHomePage", component: AdminHomePage },
      { path: "/adminProfile", component: AdminProfile },
    ];
const router = createRouter({
  history: createWebHistory(),
  routes,    
});
export default router;