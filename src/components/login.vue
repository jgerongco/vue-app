<template>
    <div class="background">
    <div class="login-container">
      <h2 class="login-heading">Login</h2>
          <!-- <div class="logo-container">
          <img src='./UIC.png' alt="Logo" class="logo">
          </div> -->
        <div class="form-container">
        
        <form @submit.prevent="login" class="login-form">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
          <v-text-field></v-text-field>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />

        <router-link to="/homepage"><button type="button" class="btn btn-danger">LOGIN</button></router-link>
        <div class="space"></div>
        <div class="forgot-password">
          <router-link to = "/forgotpassword">Forgot Password?</router-link>
        </div>
        <div class="signup-link">
          <router-link to="/signup">Don't have an account? Sign up here</router-link> 
        </div>
        </form>
        </div>
    </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Add authentication logic here
        console.log('Logging in with:', this.username, this.password);
        // Replace the console.log with your authentication logic
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 450px;
    margin: auto;
    padding: 1px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: left;
    grid-template-columns: 1fr 1fr;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    background-color: #e62b4d;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    float: right;
    margin-right: 15px;
  }
  
  button:hover {
    background-color: #F68B9E;
  }

.background {
  background-image: url('./NIY_03551.jpg');
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  height: 98vh; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  width: 400px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(217, 217, 217, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-container {
  position: absolute;
  top: 20px;
  left: 20px;
}

.logo {
  width: 100px;
  height: auto;
}

.form-container {
  width: 100%;
}

.btn-primary {
  margin-bottom: 10px;
  margin-top: 10px; /* Add margin above the button */
}

.space {
  height: 10px; /* Adjust the height as needed */
}

.forgot-password {
  text-align: center;
  margin-top: 5px; /* Add margin below the button and above the link */
  margin-bottom: 10px;
}

.login-heading{
  margin-bottom: 15px; /* Adjust margin as needed */
  margin-top: auto;
  text-align: center;
}
li{
  display: inline;  
}
.signup-link{
  text-align: center;
}
  </style>
  