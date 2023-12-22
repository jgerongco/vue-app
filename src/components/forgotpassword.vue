<!-- src/components/ForgotPassword.vue -->
<template>
    <div class="forgot-password-background">
      <div class="forgot-password-container">
        <h2 class="forgotpass-heading">Forgot Password?</h2>
        <p class="text-heading">Enter your UIC email address to send a code to your phone number 
            and reset your password.</p>
        <form @submit.prevent="resetPassword">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
          
        </form>
        <router-link to = "/"><button type = "submit">CANCEL</button></router-link>
        <router-link to = "/forgotpasswordcode"><button type="submit">SUBMIT</button></router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      resetPassword() {
        // Add logic to send a reset password email
        console.log('Resetting password for email:', this.email);
        // You should implement the actual password reset logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .forgot-password-background {
    background: url('./NIY_03551.jpg') center center/cover;
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .forgot-password-container {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.9);
  }
  
  form {
    display: grid;
    gap: 10px;
  }
  
  label {
    margin-bottom: 8px;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    background-color: #F68B9E;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 5px;
    float: right;
    margin-right: 5px;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #e62b4d;
  }
.forgotpass-heading {
    margin-top: auto;
    margin-bottom: 15px; /* Adjust margin as needed */
    text-align: center;
}
.text-heading{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}
  </style>
  