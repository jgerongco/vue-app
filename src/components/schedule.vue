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
    <div class="container">
      <div class="schedule-container">
        <div class="header">
          <h3>{{ formattedCurrentDate }}</h3>
        </div>
  
        <div class="reservation-section">
          <h3>Today's Reservations</h3>
          <table v-if="todayReservations.length > 0" class="reservation-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Time</th>
                <th>Name</th>
                <th>Faculty in Charge</th>
                <th>Purpose</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in todayReservations" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.time }}</td>
                <td>{{ reservation.name }}</td>
                <td>{{ reservation.facultyInCharge }}</td>
                <td>{{ reservation.purpose }}</td>
                <td>
                  <button @click="viewDetails(reservation)" class="action-button">View Details</button>
                  <button @click="acceptReservation(reservation)" class="action-button accept-button">Accept</button>
                  <button @click="declineReservation(reservation)" class="action-button decline-button">Decline</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="no-reservation-message">No reservations for today.</div>
        </div>
  
        <div class="reservation-section">
          <h3>Tomorrow's Reservations</h3>
          <table v-if="tomorrowReservations.length > 0" class="reservation-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Time</th>
                <th>Name</th>
                <th>Faculty in Charge</th>
                <th>Purpose</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in tomorrowReservations" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.time }}</td>
                <td>{{ reservation.name }}</td>
                <td>{{ reservation.facultyInCharge }}</td>
                <td>{{ reservation.purpose }}</td>
                <td>
                  <button @click="viewDetails(reservation)" class="action-button">View Details</button>
                  <button @click="acceptReservation(reservation)" class="action-button accept-button">Accept</button>
                  <button @click="declineReservation(reservation)" class="action-button decline-button">Decline</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="no-reservation-message">No reservations for tomorrow.</div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDate: new Date().toLocaleDateString(),
        todayReservations: [
          { id: 1, time: '8:00 am - 10:00 am', name: 'John Doe', facultyInCharge: 'Prof. Smith', purpose: 'Meeting', email: 'john@example.com', userId: '123', numberOfPeople: 5, reservationDate: '2023-12-25' },
          { id: 2, time: '10:00 am - 12:00 pm', name: 'Jane Doe', facultyInCharge: 'Dr. Johnson', purpose: 'Presentation', email: 'jane@example.com', userId: '456', numberOfPeople: 3, reservationDate: '2023-12-26' },
        ],
        tomorrowReservations: [
          { id: 1, time: '1:00 pm - 3:00 pm', name: 'Bob Smith', facultyInCharge: 'Prof. Brown', purpose: 'Workshop', email: 'bob@example.com', userId: '789', numberOfPeople: 8, reservationDate: '2023-12-27' },
          { id: 2, time: '3:00 pm - 5:00 pm', name: 'Alice Johnson', facultyInCharge: 'Dr. White', purpose: 'Discussion', email: 'alice@example.com', userId: '1011', numberOfPeople: 2, reservationDate: '2023-12-28' },
        ],
      };
    },
    computed: {
      formattedCurrentDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString(undefined, options);
      },
    },
    methods: {
      viewDetails(reservation) {
        const details = `
            Name: ${reservation.name}
            Email: ${reservation.email}
            User ID: ${reservation.userId}
            Faculty in Charge: ${reservation.facultyInCharge}
            Number of People: ${reservation.numberOfPeople}
            Reservation Date: ${reservation.reservationDate}
            Purpose: ${reservation.purpose}
          `;
        alert(`Details:\n${details}`);
        // You can replace the alert with your own modal or details view
      },
      acceptReservation(reservation) {
        alert(`The Reservation is Accepted`);
        // Add your logic for accepting the reservation
      },
      declineReservation(reservation) {
        alert(`The Reservation is Declined`);
        // Add your logic for declining the reservation
      },
    },
  };
  </script>
  
  <style scoped>
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

.container {
  max-width: 1000px; /* Set the desired max-width for the container */
  margin: 0 auto;
  background: rgba(217, 217, 217, 0.8);
  padding: 1px;
  border-radius: 8px;
}

.schedule-container {
  font-family: 'Arial', sans-serif;
  padding: 10px;
}

.header {
  text-align: right;
  margin-bottom: 10px;
}

.no-reservation-message {
  color: #888;
  font-style: italic;
}

.reservation-section {
  margin-bottom: 30px;
}

.reservation-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.reservation-table th,
.reservation-table td {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: center;
}

/* Add background color to header cells */
.reservation-table th {
  background-color: #F68B9E; /* Adjust the background color as needed */
  color: #fff;
}

.action-button {
  margin-right: 10px;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #F68B9E;
  background-color: #e62b4d;
  color: #fff;
  border-radius: 4px;
}

.accept-button {
  background-color: #e62b4d;
  border: 1px solid #F68B9E;
}

.decline-button {
  background-color: #e62b4d;
  border: 1px solid #F68B9E;
}

button:hover {
  background-color: #F68B9E;
}
</style>
  