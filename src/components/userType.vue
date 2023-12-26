<template>
  <div class="background">
    <div class="login-container">
      <h2>Welcome to ICTDU Space</h2>
      <p>Please select your role:</p>
      
      <button class="user" @click="goToUserPage">USER</button>
      <button @click="goToAdminPage">ADMIN</button>
    </div>
  </div>
</template>
  
  <script>
  export default {
    methods: {
      goToUserPage() {
        this.$router.push('/login'); // Redirect to the user page
      },
      goToAdminPage() {
        this.$router.push('/adminLogin'); // Redirect to the admin page
      },
    },
  };
  </script>
  
  <style>
  .background {
    background-image: url('./NIY_03551.jpg');
    background: cover;
    background-size: cover;
    background-repeat: no-repeat;
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
  }
  
  .login-container {
    width: 600px;
    padding: 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(217, 217, 217, 0.9);
    display: flex;
    flex-direction: column; /* Change to row */
    justify-content: space-between; /* Add this line to space buttons */
    align-items: center;
  }
  button {
    background-color: #e62b4d;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px; /* Add margin between buttons */
  }

  
  button:hover {
    background-color: #F68B9E;
  }
  </style>
  