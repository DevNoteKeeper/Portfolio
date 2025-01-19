<template>
  <div id = "app" class="page-container">
    <HeaderComponent></HeaderComponent>
    <div class="main-container">
      <AboutSection id="about" />
      <StackSection id="stack" />
      <Project id="project" />
      <Education id="education" />
      <Career id="career" />
      <Contact id="contact" />
  </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import AboutSection from "@/views/About.vue";
import StackSection from "@/views/Stack.vue";
import Project from "@/views/Project.vue";
import Education from "@/views/Education.vue";
import Career from "@/views/Career.vue";
import Contact from "@/views/Contact.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutSection,
    StackSection,
    Project,
    Education,
    Career,
    Contact
  }
}
</script>

<style scoped>
.page-container{
  padding-top: 80px;
}

html, body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.main-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
}


</style>
