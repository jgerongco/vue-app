
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/login.vue';
import Signup from './components/signup.vue';
import ForgotPassword from './components/forgotpassword.vue';
import ForgotPasswordCode from './components/ForgotPasswordCode.vue';
import HomePage from './components/HomePage.vue';
import ReservationForm from './components/reservationform.vue';
import Room from './components/room.vue';
import Profile from './components/profile.vue';


const routes = [
      { path: "/", component: Login },
      { path: "/signup", component: Signup },
      { path: "/forgotpassword", component: ForgotPassword },
      { path: "/forgotpasswordcode", component: ForgotPasswordCode },
      { path: "/homepage", component: HomePage },
      { path: "/reservationform", component: ReservationForm },
      { path: "/room", component: Room },
      { path: "/profile", component: Profile },
    ];
const router = createRouter({
  history: createWebHistory(),
  routes,    
});
export default router;