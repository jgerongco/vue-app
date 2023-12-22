
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/login.vue';
import Signup from './components/signup.vue';
import ForgotPassword from './components/forgotpassword.vue';
import ForgotPasswordCode from './components/forgotpasswordcode.vue';
import HomePage from './components/homepage.vue';
import ReservationForm from './components/reservationform.vue';
import Room from './components/room.vue';
import Profile from './components/profile.vue';
import Notification from './components/notification.vue';
// import Header from './components/header.vue';
// import Footer from './components/footer.vue';

const routes = [
      { path: "/", component: Login },
      { path: "/signup", component: Signup },
      { path: "/forgotpassword", component: ForgotPassword },
      { path: "/forgotpasswordcode", component: ForgotPasswordCode },
      { path: "/homepage", component: HomePage },
      { path: "/reservationform", component: ReservationForm },
      { path: "/room", component: Room },
      { path: "/profile", component: Profile },
      { path: "/notification", component: Notification },
      // { path: "/header", component: Header },
      // { path: "/footer", component: Footer },
    ];
const router = createRouter({
  history: createWebHistory(),
  routes,    
});
export default router;