<template>
  <div class="reservation-schedule">
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
.reservation-schedule {
  max-width: 800px;
  margin: auto;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
}

.current-date {
  font-size: 14px;
  color: #888;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #3498db; /* Blue color for header */
  color: white;
}

.available {
  background-color: #dff0d8; /* Green background for available status */
  color: #4caf50; /* Green color for text */
}

.reserved {
  background-color: #f9f4b6; /* Yellow background for reserved status */
  color: #f39c12; /* Orange color for text */
}

.reserve-btn, .reserved-btn, .unavailable-btn {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.reserve-btn {
  background-color: #4caf50; /* Green color for reserve button */
  color: white;
}

.reserved-btn, .unavailable-btn {
  cursor: not-allowed;
}

.reserved-btn:disabled, .unavailable-btn:disabled {
  background-color: #ddd; /* Grey color for disabled buttons */
  color: #888;
}
</style>