<template>
  <section id="projects">
    <div class="projects-container">
      <div class="projects-title">Projects</div>
      <div class="projects-list">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          :id="'project-' + project.id" 
          class="project-card"
        >
          <img :src="project.main_image" alt="Project Image" class="project-card-image" />
          <div class="project-card-info">
            <h3>{{ project.name }}</h3>
            <p>{{ project.period }}</p>
            <p>{{ project.type.join(', ') }}</p>

            <div class="languages-tools">
              <div v-for="(language, index) in project.languages" :key="index" class="language-item">{{ language }}</div>
              <div v-for="(tool, index) in project.tools" :key="index" class="tool-item">{{ tool }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    async fetchProjects() {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      this.projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // 쿼리 파라미터로 전달된 target ID로 스크롤
      this.scrollToTarget();
    },
    scrollToTarget() {
      const targetId = this.$route.query.target;
      if (targetId) {
        this.$nextTick(() => {
          const element = document.getElementById('project-' + targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      }
    }
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>

<style scoped>
/* 스타일은 기존 코드와 유사하게 적용 */
</style>
