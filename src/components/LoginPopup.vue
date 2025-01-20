<template>
  <div class="login-popup" v-if="isVisible">
    <div class="popup-content">
      <h3>Admin Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="id">ID</label>
          <input type="text" v-model="id" id="id" placeholder="Enter your ID" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" placeholder="Enter your password" />
        </div>
        <div class="button-group">
          <button type="submit">Login</button>
          <button type="button" @click="closePopup">Cancel</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPopup',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      id: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.id === 'admin' && this.password === 'admin') {
        // 로그인 성공 시 localStorage에 저장
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true');
        this.$emit('login-success');
        this.closePopup();
      } else {
        this.errorMessage = 'Invalid ID or Password.';
      }
    },
    closePopup() {
      this.$emit('close');
    },
  },
};
</script>


<style scoped>
.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.popup-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4a5568;
  color: white;
}

.button-group button:hover {
  background-color: #2d3748;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>
