<template>
    <div id="app">
      <div class="header">
        <h1>NOTIFICATION </h1>
        <div>
          <button @click="filterNotifications('all')">All</button>
          <button @click="filterNotifications('updates')">Updates</button>
          <button @click="filterNotifications('trash')">Trash</button>
          <select v-model="selectedFilter">
            <option value="all">All</option>
            <option value="updates">Updates</option>
            <option value="trash">Trash</option>
          </select>
        </div>
      </div>
  
      <div class="notifications">
        <div v-for="notification in filteredNotifications" :key="notification.id">
          {{ notification.text }}
        </div>
      </div>
  
      <div class="footer">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Socials</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
          { id: 1, text: 'Notification 1', type: 'all' },
          { id: 2, text: 'Notification 2', type: 'updates' },
          { id: 3, text: 'Notification 3', type: 'trash' },
          // Add more notifications as needed
        ],
        selectedFilter: 'all',
      };
    },
    computed: {
      filteredNotifications() {
        return this.notifications.filter(
          (notification) =>
            this.selectedFilter === 'all' || notification.type === this.selectedFilter
        );
      },
    },
    methods: {
      filterNotifications(type) {
        this.selectedFilter = type;
      },
    },
  };
  </script>
  
  <style>
  .app {
    text-align: center;
    margin: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .notifications {
    margin-top: 20px;
  }
  
  .footer {
    margin-top: 40px;
  }
  
  .footer ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  
  .footer li {
    cursor: pointer;
  }
  </style>
  