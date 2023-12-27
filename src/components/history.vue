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

    <div id="reservationHistory" class="background-container">
      <div class="container">
        <div class="reservation-header">
          <button @click="changeTab('all')" :class="{ 'active-tab': activeTab === 'all' }">All Reservations</button>
          <button @click="changeTab('upcoming')" :class="{ 'active-tab': activeTab === 'upcoming' }">Upcoming</button>
          <button @click="changeTab('past')" :class="{ 'active-tab': activeTab === 'past' }">Past</button>
        </div>
  
        <div v-if="activeTab === 'all'">
          <h2>All Reservations</h2>
          <table class="reservation-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Reservation Date</th>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in filteredReservations('all')" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.date }}</td>
                <td>{{ reservation.customerName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div v-else-if="activeTab === 'upcoming'">
          <h2>Upcoming Reservations</h2>
          <table class="reservation-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Reservation Date</th>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in filteredReservations('upcoming')" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.date }}</td>
                <td>{{ reservation.customerName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div v-else-if="activeTab === 'past'">
          <h2>Past Reservations</h2>
          <table class="reservation-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Reservation Date</th>
                <th>Customer Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in filteredReservations('past')" :key="reservation.id">
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.date }}</td>
                <td>{{ reservation.customerName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 'all',
        reservations: [
          { id: 1, date: '2023-01-15', customerName: 'John Doe', type: 'all' },
          { id: 2, date: '2023-02-20', customerName: 'Jane Doe', type: 'upcoming' },
          { id: 3, date: '2022-12-10', customerName: 'Bob Smith', type: 'past' },
          // Add more reservations as needed
        ],
      };
    },
    computed: {
      filteredReservations() {
        return (type) => this.reservations.filter(
          (reservation) => type === 'all' || reservation.type === type
        );
      },
    },
    methods: {
      changeTab(tab) {
        this.activeTab = tab;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .background-container {
  background: url('./NIY_03551.jpg') center/cover no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  max-width: 2000px;
  width: 800px;
  margin: 0 auto;
  background: rgba(217, 217, 217, 0.9);
  padding: 100px;
  border-radius: 8px;
}
  .reservation-header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .reservation-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed;
  }
  
  .reservation-table th, .reservation-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .reservation-table th {
    background-color: #F68B9E;
    color: white;
    text-align: center;
  }
  button {
    background-color: #e62b4d;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px
  }
  
  button:hover {
    background-color: #F68B9E;
  }
  </style>
  