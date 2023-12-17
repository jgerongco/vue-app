<template>
  <div id="account-detail">
    <div class="user-info">
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Student ID: {{ user.studentId }}</p>
      <p>Position: {{ user.position }}</p>
      <p>Mobile Number: {{ user.mobileNumber }}</p>
      <p>Birthday: {{ user.birthday }}</p>
      <p>Age: {{ user.age }}</p>
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
        mobileNumber: "+123 456 7890",
        birthday: "January 1, 1990",
        age: 33
      }
    };
  }
};
</script>

<style scoped>
#account-detail {
  font-family: 'Arial', sans-serif;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-info {
  text-align: left;
}

h2 {
  color: #333;
}

p {
  margin: 8px 0;
  color: #666;
}
</style>
