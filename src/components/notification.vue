<template>
  <div id="app" class="background-container">
    <div class="container">
      <div class="notification-header">
        <button @click="changeTab('all')" :class="{ 'active-tab': activeTab === 'all' }">All</button>
        <button @click="changeTab('updates')" :class="{ 'active-tab': activeTab === 'updates' }">Updates</button>
        <button @click="changeTab('trash')" :class="{ 'active-tab': activeTab === 'trash' }">Trash</button>
      </div>

      <div v-if="activeTab === 'all'">
        <h2>All Notifications</h2>
        <table class="notification-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Notification Text</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="notification in filteredNotifications('all')" :key="notification.id">
              <td>{{ notification.id }}</td>
              <td>{{ notification.text }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="activeTab === 'updates'">
        <h2>Update Notifications</h2>
        <table class="notification-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Notification Text</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="notification in filteredNotifications('updates')" :key="notification.id">
              <td>{{ notification.id }}</td>
              <td>{{ notification.text }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="activeTab === 'trash'">
        <h2>Trash Notifications</h2>
        <table class="notification-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Notification Text</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="notification in filteredNotifications('trash')" :key="notification.id">
              <td>{{ notification.id }}</td>
              <td>{{ notification.text }}</td>
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
      notifications: [
        { id: 1, text: 'Notification 1', type: 'all' },
        { id: 2, text: 'Notification 2', type: 'updates' },
        { id: 3, text: 'Notification 3', type: 'trash' },
        // Add more notifications as needed
      ],
    };
  },
  computed: {
    filteredNotifications() {
      return (type) => this.notifications.filter(
        (notification) => type === 'all' || notification.type === type
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
  background: rgba(217, 217, 217, 0.9); /* Adjust the opacity as needed */
  padding: 100px;
  border-radius: 8px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #000000;
}

.notification-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  background-color: #F68B9E;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
}

.active-tab {
  background-color: #e62b4d;
}

.notification-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.notification-table th, .notification-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.notification-table th {
  background-color: #F68B9E;
  color: white;
  text-align: center;
}
</style>