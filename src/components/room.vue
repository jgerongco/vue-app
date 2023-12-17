<!-- src/components/ReservationSystem.vue -->
<template>
  <div class="reservation-system">
    <h2>Reservation System</h2>
    <div v-for="slot in timeSlots" :key="slot.id" class="time-slot" :class="{ 'reserved': slot.reserved }">
      <span>{{ slot.time }}</span>
      <button v-if="!slot.reserved" @click="reserveRoom(slot)">Reserve</button>
      <span v-else class="reserved">Reserved</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeSlots: [
        { id: 1, time: '8:00 - 10:00 am', reserved: false },
        { id: 2, time: '10:00 - 12:00 nn', reserved: false },
        { id: 3, time: '1:00 - 3:00 pm', reserved: false },
        { id: 4, time: '3:00 - 5:00 pm', reserved: false },
      ],
    };
  },
  methods: {
    reserveRoom(slot) {
      // Implement room reservation logic here
      if (!slot.reserved) {
        // Reserve the room
        slot.reserved = true;
        console.log('Room reserved for', slot.time);
      } else {
        console.log('Room already reserved for', slot.time);
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.reservation-system {
  background: linear-gradient(180deg, #7AC8FF 0%, #C2E1FF 100%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.time-slot {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
}

.reserved {
  color: red;
  font-weight: bold;
}

button {
  padding: 8px 12px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
