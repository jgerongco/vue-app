<template>
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
    <div class="background">
      <main>
        <section class="form-container">
          <h2 class="ICTDU-heading">Reservation Form</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="firstName">First Name:</label>
              <input v-model="reservation.firstName" type="text" id="firstName" required>
            </div>
  
            <div class="form-group">
              <label for="lastName">Last Name:</label>
              <input v-model="reservation.lastName" type="text" id="lastName" required>
            </div>
  
            <div class="form-group">
              <label for="email">Email:</label>
              <input v-model="reservation.email" type="email" id="email" required>
            </div>
  
            <div class="form-group">
              <label for="userID">User ID:</label>
              <input v-model="reservation.uicId" type="text" id="userID" required>
            </div>

            <div class="form-group">
              <label for="faculty-in-charge">Faculty In Charge:</label>
              <input v-model="reservation.facultyIncharge" type="text" id="faculty-in-charge" required>
            </div>
  
            <div class="form-group">
              <label for="numberOfPeople">Number of People:</label>
              <input v-model="reservation.numberOfPeople" type="text" id="numberOfPeople" required>
            </div>
  
            <div class="form-group">
              <label for="reservationDate">Reservation Date:</label>
              <input v-model="reservation.reservationDate" type="date" id="reservationDate" required>
            </div>
  
            <div class="form-group">
              <label for="purpose">Purpose for Reservation:</label>
              <textarea v-model="reservation.purpose" id="purpose" rows="4" required></textarea>
            </div>
  
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reservation: {
          firstName: '',
          lastName: '',
          email: '',
          uicId: '',
          facultyIncharge: '',
          numberOfPeople: '',
          reservationDate: '',
          purpose: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', this.reservation);
        // You can send the data to the server or perform any other necessary actions
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