<template>
    <div>
      <header>
        <div class="logo">
          <img src="./ICTDU.png" alt="Logo" class="logo-img"/>
        </div>
        <nav>
          <ul>
            <router-link to="/homepage"><li><a href="#">Home</a></li></router-link>
            <router-link to="/reservationform"><li><a href="#">Reservation</a></li></router-link>
            <router-link to="/profile"><li><a href="#">Account Details</a></li></router-link>
            <router-link to="/notification"><li><a href="#">Notifications</a></li></router-link>
            <router-link to="/"><li><a href="#">Logout</a></li></router-link>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to ICTDU Space</h1>
        <div>
          <!-- Details for ICTDU Space -->
          <p>Place your details for ICTDU Space here.</p>
        </div>
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
    background-color: rgba(230, 43, 77, 0.8);
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
  color: #333; /* Set the font color for navigation items */
  text-decoration: none;
}
  
  main {
    padding: 2rem;
  }
  h1{
    color: white;
  }
  </style>