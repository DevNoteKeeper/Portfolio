<template>
  <section class="career-section">
    <div class="career-title">Career</div>

    <div class="career-item">
      <img src="@/assets/logo/companyLogo/team-sparta-logo.png" alt="Team Sparta Logo" class="company-logo"/>
      <div class="company-info">
        
        <div class="company-name">Team Sparta, Seoul, Korea</div>
      
      <div class="position">Freelancer</div>
      <div class="duration">2022.03 - Current</div>
      <ul class="job-responsibilities">
        <li>Provided Q&A tutoring for coding and no-code courses</li>
        <li>Edited course videos using Vrew and Premiere Pro</li>
        <li>Handled error reports from students and ensured quality corrections</li>
      </ul>
    </div>
  </div>

    <div class="career-item">
      <img src="@/assets/logo/companyLogo/shim-company-logo.png" alt="Shim Company Logo" class="company-logo"/>
      <div class="company-info">
        
        <div class="company-name">Shim Company Korea, Seoul, Korea</div>
      
      <div class="position">Exhibition Assistant</div>
      <div class="duration">2020.10 - 2021.12</div>
      <ul class="job-responsibilities">
        <li>Organized and planned job festival events</li>
        <li>Created proposals for marketing and event campaigns</li>
        <li>Managed company website and social media posts</li>
      </ul>
    </div>
  </div>

    <div class="career-item">
      <img src="@/assets/logo/companyLogo/moms-touch-logo.png" alt="Mom's Touch Logo" class="company-logo"/>
      <div class="company-info">
        
        <div class="company-name">Mom's Touch, Seoul, Korea</div>
      
      <div class="position">Manager</div>
      <div class="duration">2019.02 - 2020.06</div>
      <ul class="job-responsibilities">
        <li>Managed part-time staff and scheduled shifts</li>
        <li>Worked in kitchen, hall, and cooking areas</li>
      </ul>
    </div>
  </div>
    
    <div class="career-item">
      <img src="@/assets/logo/companyLogo/lucidpromo-logo.png" alt="Lucidpromo Logo" class="company-logo"/>
      <div class="company-info">
        
        <div class="company-name">Lucidpromo, Seoul, Korea</div>
      <div class="position">Marketing Concierge</div>
      <div class="duration">2017.07 - 2018.09</div>
      <ul class="job-responsibilities">
        <li>Developed services for concierge in apartments</li>
        <li>Created PowerPoint presentations for TF teams</li>
        <li>Managed SNS accounts</li>
      </ul>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CareerSection',
};
</script>

<style scoped>
.career-section {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.career-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: left;
}

.career-item {
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.company-logo {
  width: 15rem; /* 로고 크기 조정 */
  height: 15rem;
  object-fit: contain;
}

.company-name {
  font-size: 2rem;
  font-weight: 700;
  color: #171a35;
}

.position {
  font-size: 1.6rem;
  color: #4a5568;
  margin-top: 0.5rem;
}

.duration {
  font-size: 1.4rem;
  color: #777;
  margin-top: 0.5rem;
}

.job-responsibilities {
  list-style: none;
  margin-top: 1rem;
  padding-left: 1rem;
}

.job-responsibilities li {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}
</style>
