<template>
  <section id="project">
    <div class="project-container">
      <div class="project-title">Project</div>
      <div class="project-page">
        <div class="project-list">
          <!-- 최신 4개 프로젝트만 필터링 후 표시 -->
          <div 
            v-for="project in displayedProjects" 
            :key="project.id" 
            class="project-card" 
            @click="goToProjectsPage(project.id)"
          >
            <img :src="project.main_image" alt="Project Image" class="project-card-image" />
            <div class="project-card-info">
              <h3>{{ project.name }}</h3>
              <p>{{ project.period }}</p>
              <p>{{ project.type.join(', ') }}</p>

              <!-- Languages & Tools 한 줄로 표시 -->
              <div class="languages-tools">
                <div v-for="(language, index) in project.languages" :key="index" class="language-item">{{ language }}</div>
                <div v-for="(tool, index) in project.tools" :key="index" class="tool-item">{{ tool }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 전체보기 버튼 -->
        <div class="view-all-button">
          <button @click="goToProjectsPage()">전체보기</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    displayedProjects() {
      const filteredProjects = this.projects.filter(project => project.main_display === true);

      const sortedProjects = filteredProjects.sort((a, b) => {
        const dateA = this.convertToDate(a.period);
        const dateB = this.convertToDate(b.period);
        return dateB - dateA;
      });

      return sortedProjects.slice(0, 4);
    }
  },
  methods: {
    async fetchProjects() {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      this.projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    convertToDate(period) {
      const [start, end] = period.split('-');
      const [startYear, startMonth] = start.split('.').map(Number);
      const [endYear, endMonth, endDay] = end ? end.split('.').map(Number) : [startYear, startMonth, 1];
      const dateString = `${endYear}-${String(endMonth).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`;
      return new Date(dateString);
    },

    goToProjectsPage(projectId) {
      if (projectId) {
        this.$router.push({ path: '/projects', query: { target: projectId } });
      } else {
        this.$router.push('/projects');
      }
    }
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>

<style scoped>
.project-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  align-items: flex-start;
  flex-wrap: wrap;
}
.project-page {
  padding: 2rem;
}

.project-title{
    margin-bottom: 50px;
    font-size: 3rem;
    font-weight: 700;
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

/* Languages & Tools 섹션 */
.languages-tools {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.language-item, .tool-item {
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffff;
}

.language-item {
  background-color: #4e5d6d;
}

.tool-item {
  background-color: #d6bfa7;
}

/* 전체보기 버튼 */
.view-all-button {
  margin-top: 2rem;
  text-align: center;
}

.view-all-button button {
  padding: 0.75rem 1.5rem;
  background-color: #171a35;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.view-all-button button:hover {
  background-color: #2d3748;
}
</style>