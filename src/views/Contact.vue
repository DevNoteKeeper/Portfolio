<template>
    <section class="contact-section">
      <div class="container">
        <div class="contact-message">
          <h2>Contact Me</h2>
          <p>
          협업 또는 프로젝트 관련 논의를 원하시면 아래 양식을 작성해 주세요. 귀하의 메세지를 소중히 다루겠습니다.
        </p>
        <p>
          If you're interested in collaboration or discussing a project, please fill out the form below. Your message will be handled with care.
        </p>
        </div>

        <form @submit.prevent="sendMessage" class="contact-form">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Full Name" required/>

          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Email" required/>

          <label for="message">Message</label>
          <input type="message" v-model="form.message" placeholder="Message" required/>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  </template>
  <script>
  export default {
    name: 'ContactSection',
    data(){
      return{
        form:{
          name: '',
          email: '',
          message: '',
        }
      };
    },
    methods:{
      async sendMessage(){
        console.log('Form submitted', this.form);
        alert('Your message has been sent!');
      }
    }
  };
  </script>

<style scoped>
.contact-section{
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.contact-message{
  flex:1;
  margin-right: 2rem;
}
.contact-form{
  flex:1;
  display: flex;
  flex-direction: column;
}

.contact-form input, .contact-form textarea{
  margin-bottom: 1rem;
  padding: 0.5rem;
}
</style>
  