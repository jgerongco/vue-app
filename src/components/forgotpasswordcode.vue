<!-- src/components/ForgotPasswordAlt.vue -->
<template>
    <div class="forgot-password-alt-background">
      <div class="forgot-password-alt-container">
        <h2 class="forgotpass-heading">Forgot Password?</h2>
        <form @submit.prevent="resetPassword">
          <div class="form-row">
            <input type="email" v-model="email" required />
          </div>
          <p class="text-heading">A code has been sent to vto*****************@uic.edu.ph. Please check your messages for 
            any codes. If a code has not been received, kindly click the link to resend it.</p>
          <button type="submit">SUBMIT</button>
        </form>
        <div class="text-heading">
        <router-link to="">Resend Code</router-link>
      </div>
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
  .forgot-password-alt-background {
    background-image: url('./NIY_03551.jpg');
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .forgot-password-alt-container {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(217, 217, 217, 0.9);
  }
  
  form {
    display: grid;
    gap: 10px;
  }
  
  .form-row {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 4px;
  }
  
  input {
    padding: 8px;
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
  }
  
  button:hover {
    background-color: #F68B9E;
  }
  
  /* Add styles for the router link */
  router-link {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #007BFF;
  }

  .forgotpass-heading {
    margin-top: auto;
    margin-bottom: 15px; /* Adjust margin as needed */
    text-align: center;
}
.text-heading{
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
}
  </style>
  