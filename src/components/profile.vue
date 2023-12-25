<template>
  <div id="yo">
    <div class="container">
      <div class="profile">
        <h2>User Profile</h2>
        <div v-if="!isEditing" class="profile-view">
          <div class="profile-content">
            <div class="profile-column">
              <div class="profile-picture-container">
                <img :src="user.profilePicture" alt="Profile" class="profile-picture" />
              </div>
              <button class="edit-button" @click="toggleEdit">Edit Profile</button>
            </div>
            <div class="details-column">
              <div class="profile-details">
                <div><strong>Name:</strong> {{ user.name }}</div>
                <div><strong>Email:</strong> {{ user.email }}</div>
                <div><strong>Student ID:</strong> {{ user.studentId }}</div>
                <div><strong>Position:</strong> {{ user.position }}</div>
                <div><strong>Mobile Number:</strong> {{ user.mobileNumber }}</div>
                <div><strong>Birthday:</strong> {{ user.birthday }}</div>
                <div><strong>Age:</strong> {{ user.age }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="profile-edit">
          <div class="profile-content">
            <div class="profile-column">
              <div class="profile-picture-container">
                <img :src="newProfilePicture" alt="Profile" class="profile-picture" />
                <input type="file" id="profilePicture" @change="handlePictureChange" accept="image/*" />
              </div>
              <div class="edit-buttons">
                <button class="save-button" @click="saveProfile">Save Profile</button>
                <button class="cancel-button" @click="toggleEdit">Cancel</button>
              </div>
            </div>
            <div class="details-column">
              <div class="edit-details">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="user.name" />
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="user.email" />
                <label for="studentId">Student ID:</label>
                <input type="text" id="studentId" v-model="user.studentId" />
                <label for="position">Position:</label>
                <input type="text" id="position" v-model="user.position" />
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" v-model="user.mobileNumber" />
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" v-model="user.birthday" />
                <label for="age">Age:</label>
                <input type="text" id="age" v-model="user.age" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
        studentId: "123456",
        position: "Student",
        mobileNumber: "123-456-7890",
        birthday: "1990-01-01",
        age: "32",
        profilePicture: "https://via.placeholder.com/150",
      },
      isEditing: false,
      newProfilePicture: null,
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    handlePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newProfilePicture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveProfile() {
      // Save the user profile and profile picture to the backend or perform necessary actions
      if (this.newProfilePicture) {
        this.user.profilePicture = this.newProfilePicture;
      }
      this.toggleEdit();
    },
  },
};
</script>

<style>
#yo {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #333;
  background-image: url('./NIY_03551.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 80vw;
  max-width: 800px;
  height: auto; /* Adjusted to auto for variable height */
  max-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile {
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.9);
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #070707;
}

.profile-view,
.profile-edit {
  margin-top: 20px;
  width: 100%;
}

.profile-content {
  display: flex;
  justify-content: space-between;
}

.profile-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture-container {
  width: 150px;
  height: 150px;
  position: relative;
  margin-bottom: 10px;
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.details-column {
  flex: 1;
  margin-left: 20px;
}

.profile-details,
.edit-details {
  margin-top: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: calc(100% - 12px);
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.edit-buttons {
  margin-top: 20px;
}

.edit-buttons button {
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.edit-button {
  background-color: #e62b4d;
  color: #fff;
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.save-button {
  background-color: #e62b4d;
  color: #fff;
}

.cancel-button {
  background-color: #e62b4d;
  color: #fff;
}

button:hover {
  background-color: #F68B9E;
}
</style>
