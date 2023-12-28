<template>
  <header>
          <div class="logo">
            <img src="./ICTDU.png" alt="Logo" class="logo-img"/>
          </div>
          <nav>
            <ul>
              <router-link to="/adminHomePage"><li><a href="#">Home</a></li></router-link>
            <router-link to="/schedule"><li><a href="#">Schedule</a></li></router-link>
            <router-link to="/history"><li><a href="#">History</a></li></router-link>
            <router-link to="/report"><li><a href="#">Report</a></li></router-link>
            <router-link to="/adminRoom"><li><a href="#">Room Availability</a></li></router-link>
            <router-link to="/adminProfile"><li><a href="#">Account Details</a></li></router-link>
            <router-link to="/"><li><a href="#">Logout</a></li></router-link>
            </ul>
          </nav>
        </header>
    <div class="background">
    <div>
  
      <main>
        <section class="form-container">
          <h2 class="ICTDU-heading">Report</h2>
          <form @submit.prevent="submitForm">

            <div class="form-group">
              <label for="userID">Student ID:</label>
              <input v-model="reservation.uicId" type="text" id="userID" required>
            </div>
            
            <div class="form-group">
              <label for="firstName">First Name:</label>
              <input v-model="reservation.firstName" type="text" id="firstName" required>
            </div>
  
            <div class="form-group">
              <label for="lastName">Last Name:</label>
              <input v-model="reservation.lastName" type="text" id="lastName" required>
            </div>

            <div class="form-group">
              <label for="violation">Violation:</label>
              <textarea v-model="reservation.violaton" id="violation" rows="4" required></textarea>
            </div>
  
            <router-link to ="/adminHomePage"><button type="submit">CANCEL</button></router-link>
            <button type="submit">SUBMIT</button>
          </form>
          <p v-if="submissionMessage" class="submission-message">{{ submissionMessage }}</p>
        </section>
      </main>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reservation: {
          uicId: '',
          firstName: '',
          lastName: '',
          violaton: '',
        },
        submissionMessage: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', this.reservation);
        // You can send the data to the server or perform any other necessary actions

        this.submissionMessage = 'The Report has been submitted';
      }
    }
  };
  </script>
  
  <style scoped>
    /* Add your existing styles here */
    /* ... */
  
    main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
    }
  
    .form-container {
      background-color: #FD9DA1;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 600px;
    }
  
    .form-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1px;
      margin-bottom: 15px;
      font-style: Saira Condensed;
      font-size: 18px;
      font-weight: bold;
      color:#901430;
      margin-left: 20px;
      margin-right: 20px;
    }
  
    /* Style the form fields within a form group */
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input,
    textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  
    button {
      background-color: #901430;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      float: right;
      margin: 5px;
    }
  
    button:hover {
      background-color: #e62b4d;
    }
    .background{
      background-image: url('./NIY_03551.jpg');
      background: cover;
      background-size: cover;
      background-repeat: no-repeat;
      height: 98vh; /* Adjust the height as needed */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ICTDU-heading{
        text-align: center;
        margin-top: 10px;
        margin-block-end: 20px;
        color: #000000;
    }
  </style>