<template>
    <div>
      <header>
        <div class="logo">
          <img src="./ICTDU.png" alt="Logo" class="logo-img"/>
        </div>
        <nav>
          <ul>
            <router-link to="/homepage"><li><a href="#">Home</a></li></router-link>
            <router-link to="/room"><li><a href="#">Reservation</a></li></router-link>
            <router-link to="/profile"><li><a href="#">Account Details</a></li></router-link>
            <router-link to="/notification"><li><a href="#">Notifications</a></li></router-link>
            <router-link to="/"><li><a href="#">Logout</a></li></router-link>
          </ul>
        </nav>
      </header>

      <main>
        <h1 class="h1">Welcome to ICTDU Space, User!</h1>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    // Add any additional component options here
  }
  </script>
    
  <style>
  body {
    background-image: url('./NIY_03551.jpg');
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
    height: 98vh; /* Adjust the height as needed */
}
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: white;
  }
  
  .logo-img {
    width: 50px; 
    height: auto;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav ul li {
    margin-right: 1rem;
  }

  nav ul li a {
  color: rgb(255, 255, 255); /* Set the font color for navigation items */
  text-decoration: none;
  margin: 10px;
  background-color:  rgba(230, 43, 77, 0.8); /* Add the desired background color */
  padding: 8px 12px; /* Add padding for better appearance */
  border-radius: 5px; /* Optional: Add border-radius for rounded corners */
}
  
  main {
    padding: 5rem;
  }
  .h1{
    color: white;
    text-align: center;
    margin-bottom: 30px;
    font-size: 90px;
  }
  </style>