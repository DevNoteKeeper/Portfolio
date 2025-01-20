<template>
    <section id="about">
    <div class="about-container">
      <div class="about-title">
        About
      </div>

      <div class="about-content">
        <div class="about-left">
          <img src="@/assets/portfile.jpg" class="profile-img"/>
        </div>

        <div class="about-right">
          <div class="name">Seoyoon Choi</div>
          <p class="bio">
            <span :style="{ 'font-weight': '600' }">아이디어를 현실로 만드는 올라운드 플레이어</span>
            <br/>기획, 디자인 개발까지 전 과정을 책임지며,
            <br/>사용자 중심의 완성도 높은 서비스를 제공합니다.
          </p>
          <p class="bio">  
            <span :style="{ 'font-weight': '600' }">A versatile creator who turns ideas into reality</span>
            <br/>From planning and design to development,
            <br/>I deliver seamless, user-focused solutions.
          </p>

          <div class="contact-info">
            <div class="contact-item">
              📍 Enschede, Netherlands
            </div>
            <div class="contact-item">
              🌐 Korean, English
            </div>
          </div>
          <div class="social-links">
            <a href="https://github.com/DevNoteKeeper" target="_blank" class="social-icon"><i class="bi bi-github"></i></a>
            <a href="https://www.instagram.com/yuni_s18?igsh=YW1ram1uM2p5M2ds&utm_source=qr" target="_blank" class="social-icon"><i class="bi bi-instagram"></i></a>
            <a href="mailto:s.choi-1@student.utwente.nl" target="_blank" class="social-icon"><i class="bi bi-envelope-fill"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>


<script>
  export default {
    name: 'AboutSection',
  };
</script>


<style scoped>
.about-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  align-items: flex-start;
  flex-wrap: wrap;
}
  .about-title{
    margin-bottom: 50px;
    font-size: 3rem;
    font-weight: 700;
  }

  .about-content{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin-left: 100px;
    gap: 150px;
  }
  .about-left{
    flex: 0 0 320px;
  }
  .profile-img{
    width: 100%;
    height: auto;
    border-radius: 16px;
    object-fit: cover;
  }

  .about-right{
    flex: 1;
    
  }
  .name{
    font-size: 3rem;
    font-weight: 700;
  }
  .bio{
    margin: 30px 0;
    font-size: 1.5rem;
  }
  .contact-info{
    margin: 20px 0;
  }
  .contact-item{
    margin-bottom: 18px;
    font-size: 1.8rem;
  }
  .social-links{
    margin-top: 20px;
    display: flex;
    gap: 30px;
  }
  .social-icon{
    font-size: 1.8rem;
    text-decoration: none;
    color: #2d3748;
  }
  .social-icon:hover{
    color: #4a5568;
  }
</style>
  