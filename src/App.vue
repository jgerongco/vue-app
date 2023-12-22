
<template>
  <div id="app">
    <nav>
      <div class="nav-container">
      <router-link to="/homepage">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/notification">Notification</router-link>
      <router-link to="/room">Reservation</router-link>
      <router-link to="/profile">Account Details</router-link>
      <router-link to="/">Sign In</router-link>
      </div>
    </nav>
    <router-view/>
  </div>

</template>

<script setup>


</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
}
nav {
  background-color: #3498db;
  padding: 10px 20px;
}

.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

router-link {
  color: #fff;
  font-size: 16px;
  margin-right: 20px;
  transition: color 0.3s ease;
}

router-link:hover {
  color: #ecf0f1;
}

</style>