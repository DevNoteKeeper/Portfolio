<template>
  <div id="app" class="page-container">
    <HeaderComponent></HeaderComponent>
    <div class="project-page">
      <div class="project-title">Project</div>
      <div class="project-list">
        <div v-for="project in projects" :key="project.id" class="project-card" @click="openProjectPopup(project)">
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

      <!-- 팝업 Modal -->
      <div v-if="showPopup" class="popup-overlay">
        <div class="popup-content">
          <h2>{{ selectedProject.name }}</h2>
          <img :src="selectedProject.main_image" alt="Project Main Image" class="popup-image" />
          <p>{{ selectedProject.description }}</p>

          <div v-if="selectedProject.additional_images.length">
            <h3>Additional Images</h3>
            <div class="additional-images">
              <img v-for="(image, index) in selectedProject.additional_images" :key="index" :src="image" class="additional-image" />
            </div>
          </div>

          <div v-if="selectedProject.languages.length || selectedProject.tools.length">
            <h3>Languages & Tools</h3>
            <div class="languages-tools-list">
              <!-- languages -->
              <div v-for="(language, index) in selectedProject.languages" :key="index" class="language-item">
                {{ language }}
              </div>
              <!-- tools -->
              <div v-for="(tool, index) in selectedProject.tools" :key="index" class="tool-item">
                {{ tool }}
              </div>
            </div>
          </div>

          <div v-if="selectedProject.link">
            <h3>Project Link</h3>
            <a :href="selectedProject.link" target="_blank">
              <img src="@/assets/logo/vcs/github.png" alt="GitHub" class="stack-logo" />
            </a>
          </div>

          <button @click="closePopup">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import HeaderComponent from '@/components/Header.vue';

export default {
  name: 'ProjectPage',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      projects: [],
      showPopup: false,
      selectedProject: null,
    };
  },
  methods: {
    // 전체 프로젝트 목록 가져오기
    async fetchProjects() {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      this.projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    // 팝업 열기
    openProjectPopup(project) {
      this.selectedProject = project;
      this.showPopup = true;
    },

    // 팝업 닫기
    closePopup() {
      this.showPopup = false;
      this.selectedProject = null;
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>

<style scoped>
.project-page {
  padding: 2rem;
}

.project-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: left;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.project-card {
  width: 250px;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.project-card:hover {
  background-color: #f4f4f4;
}

.project-card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.project-card-info {
  margin-top: 1rem;
}

.project-card-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
}

.project-card-info p {
  font-size: 1rem;
  color: #555;
}

.languages-tools {
  display: flex;
  flex-wrap: nowrap;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 60%;
  max-width: 900px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.popup-content h2 {
  font-size: 2rem;
  font-weight: 700;
}

.popup-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.additional-images {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.additional-image {
  width: auto;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #171a35;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #2d3748;
}

/* Styles for the Languages & Tools section */
.languages-tools-list {
  display: flex;
  gap: 1rem;
}

.languages {
  display: flex;
  flex-wrap: wrap;
}

.tools {
  display: flex;
  flex-wrap: wrap;
}

.language-item, .tool-item {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin: 0.5rem;
  font-weight: 600;
}

.language-item {
  background-color: #4e5d6d ; /* 언어 항목 배경색 */
  color: white;
}

.tool-item {
  background-color: #d6bfa7 ; /* 툴 항목 배경색 */
  color: white;
}

</style>
