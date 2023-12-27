
<template>
  <div id="app">
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
  background-color: #ffffff;
  padding: 10px 20px;
  font-weight: 20px;
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