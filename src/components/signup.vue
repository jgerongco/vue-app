<template>
  <div class="sign-background">
  <div class="signup-container">
    <h2 class="signup-heading">Sign Up</h2>
    <form @submit.prevent="signup" class="signup-form">

      <label for="StudentID">Student ID:</label>
      <input type="text" v-model="StudentID" required />

      <label for="FirstName">First Name:</label>
      <input type="text" v-model="FirstName" required />

      <label for="LastName">Last Name:</label>
      <input type="text" v-model="FirstName" required />

      <label for="username">Username:</label>
      <input type="text" v-model="username" required />

      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" required />

    </form>
    <router-link to = "/"><button type="submit">CANCEL</button></router-link>
      <router-link to = "/homepage"><button type="submit">SIGN UP</button></router-link>
      <div class="signup-link">
    <router-link to="/login">
      <a href="/login" class="login-link">Already have an account? Login here</a>
    </router-link>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    signup() {
      // Add signup logic here
      console.log('Signing up with:', this.username, this.email, this.password);
      // Replace the console.log with your signup logic
    },
  },
};
</script>

<style scoped>
.sign-background {
  background: url('./NIY_03551.jpg') center center/cover;
  height: 98vh; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-container {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(217, 217, 217, 0.9); /* Optional: Add a semi-transparent white background */
  border: none;
  
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.signup-heading {
  margin-bottom: 10px; /* Adjust margin as needed */
  text-align: center;
  
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
  margin-bottom: 10px;
  float: right;
  margin-right: 10px;
}

button:hover {
  background-color: #F68B9E;
}
.signup-link
{
  text-align: center;
  margin-top: 50px;
}

</style>
