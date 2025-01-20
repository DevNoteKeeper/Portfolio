<template>
  <div id = "app" class="page-container">
    <HeaderComponent></HeaderComponent>
    <div class="main-container">
      <router-view v-if="$route.path == '/projects'"/>
      <AboutSection v-if="$route.path !== '/projects'" id="about" />
      <StackSection v-if="$route.path !== '/projects'" id="stack" />
      <Project v-if="$route.path !== '/projects'" id="project" />
      <Education v-if="$route.path !== '/projects'" id="education" />
      <Career v-if="$route.path !== '/projects'" id="career" />
      <Contact v-if="$route.path !== '/projects'" id="contact" />
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
