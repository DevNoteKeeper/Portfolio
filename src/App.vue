<template>
  <div id="app" class="page-container">
    <HeaderComponent></HeaderComponent>
    <div class="main-container">
      <router-view />
      <template v-if="!['/projects', '/project-upload'].includes($route.path)">
        <AboutSection id="about" />
        <StackSection id="stack" />
        <Project id="project" />
        <Education id="education" />
        <Career id="career" />
        <Contact id="contact" />
      </template>
    </div>
  </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue';
import AboutSection from "@/section/About.vue";
import StackSection from "@/section/Stack.vue";
import Project from "@/section/Project.vue";
import Education from "@/section/Education.vue";
import Career from "@/section/Career.vue";
import Contact from "@/section/Contact.vue";

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
