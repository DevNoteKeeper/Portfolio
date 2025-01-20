<template>
  <section class="contact-section">
      <div class="contact-title">Contact</div>
      <div class="container">
      <div class="contact-message">
        
        <p>
          협업 또는 프로젝트 관련 논의를 원하시면<br/>아래 양식을 작성해 주세요.<br/>귀하의 메세지를 소중히 다루겠습니다.
        </p>
        <p>
          If you're interested in collaboration or discussing a project,<br/>please fill out the form below.<br/>Your message will be handled with care.
        </p>
      </div>

      <form @submit.prevent="sendMessage" class="contact-form">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" placeholder="Full Name" required />

        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" placeholder="Email" required />

        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" placeholder="Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async sendMessage() {
      console.log('Form submitted', this.form);
      alert('Your message has been sent!');
      location.reload();
    },
  },
};
</script>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.container {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;
}

.contact-message {
  text-align: left;
}

.contact-title {
  font-size: 3rem; /* About Section과 동일한 제목 크기 */
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: left;
}

.contact-message p {
  font-size: 1.2rem; 
  line-height: 1.8;
  margin-bottom: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  min-width: 50%;
}

.contact-form label {
  font-size: 1.5rem; 
  font-weight: 600;
  align-self: flex-start;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  font-size: 1.2rem; 
  font-weight: 400;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-form textarea {
  height: 150px;
  resize: none;
}

.contact-form button {
  background: #171a35; /* About Section과 동일한 색상 */
  color: #d5c8a8; /* About Section과 동일한 텍스트 색상 */
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: #2d3748; /* Hover 효과 추가 */
}
</style>
