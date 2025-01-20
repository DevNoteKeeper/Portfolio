<template>
  <section class="education-section">
    <div class="education-title">Education</div>

    <div class="education-item">
      <div class="school-name">Twente University, Enschede, Netherlands</div>
      <div class="course">Creative Technology</div>
      <div class="duration">2024.09 - Current</div>
    </div>

    <div class="education-item">
      <div class="school-name">Saxion University of Applied Science, Deventer, Netherlands</div>
      <div class="course">Information and Communication Technology (ICT)</div>
      <div class="duration">2023.09 - 2024.08</div>
    </div>

    <div class="education-item">
      <div class="school-name">Hanyang Cyber University, Seoul, Korea</div>
      <div class="course">New Media Design</div>
      <div class="duration">2019.03 - 2022.06</div>
    </div>

    <div class="education-item">
      <div class="school-name">Sunrin Internet High School, Seoul, Korea</div>
      <div class="course">Techno Management</div>
      <div class="duration">2015.02 - 2018.02</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
};
</script>

<style scoped>
.education-section {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #f7f7f7;
}

.education-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: left;
  color: #171a35;
}

.education-item {
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.school-name {
  font-size: 2rem;
  font-weight: 700;
  color: #171a35;
}

.course {
  font-size: 1.6rem;
  color: #4a5568;
  margin-top: 0.5rem;
}

.duration {
  font-size: 1.4rem;
  color: #777;
  margin-top: 0.5rem;
}
</style>
