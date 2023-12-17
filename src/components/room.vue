<template>
  <div class="background">
  <div class="reservation-schedule">
    <div class="room-container">
    <div class="table-header">
      <h2>Reservation Schedule</h2>
      <p class="current-date">{{ currentDate }}</p>
    </div>
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Time Slot</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slot in timeSlots" :key="slot.id">
          <td>{{ slot.time }}</td>
          <td :class="{ 'available': slot.status === 'Available', 'reserved': slot.status === 'Reserved' }">{{ slot.status }}</td>
          <td>
            <router-link :to="{ path: 'reservationform', params: { timeSlot: slot.time } }">
              <button v-if="slot.status === 'Available'" class="reserve-btn">Reserve</button>
              <button v-else-if="slot.status === 'Reserved'" class="reserved-btn" disabled>
                Reserved
              </button>
              <button v-else disabled class="unavailable-btn">Unavailable</button>
            </router-link>
          </td>
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
      timeSlots: [
        { id: 1, time: '8am - 10am', status: 'Available' },
        { id: 2, time: '10am - 12pm', status: 'Available' },
        { id: 3, time: '1pm - 3pm', status: 'Reserved' },
        { id: 4, time: '3pm - 5pm', status: 'Available' },
        // Add more time slots as needed
      ],
      currentDate: new Date().toLocaleDateString(),
    };
  },
};
</script>

<style scoped>
.background {
  background: rgba(217, 217, 217, 0.1);
}
.room-container {
    max-width: 1000px;
    margin: auto;
    padding: 50px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: rgba(217, 217, 217, 0.9);
  }
.reservation-schedule {
  max-width: 800px;
  margin: auto;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
}

h2 {
  color: #901430;
  margin: 0;
}

.current-date {
  font-size: 14px;
  color: #901430;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #fd9da1;
  color: #ffffff;
}

.available {
  background-color: #f5bfc1;
  color: #901430;
}

.reserved {
  background-color: #ffff;
  color: #fd9da1;
}

.reserve-btn, .reserved-btn, .unavailable-btn {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  border: none;
}

.reserve-btn {
  background-color: #901430;
  color: #ffffff;
}

.reserve-btn:hover {
  opacity: 0.8;
}

.reserved-btn {
  background-color: #ffff;
  color: #fd9da1;
}

.reserved-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.unavailable-btn {
  background-color: #f5bfc1;
  color: #901430;
}

.unavailable-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}
</style>