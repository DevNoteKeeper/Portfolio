<template>
  <div id="app" class="page-container">
    <HeaderComponent></HeaderComponent>
    <div class="main-container">
      <router-view />
      <template v-if="!['/projects', '/project-upload'].includes($route.path)">
        <HomeSection id="home" />
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
import HomeSection from "@/section/Home.vue";
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
    HomeSection,
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
#app, html, body{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
}
.main-container{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
}


</style>
