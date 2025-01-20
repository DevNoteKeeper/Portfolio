<!-- src/views/Home.vue -->
<template>
    <section class="hero-section">
  <div class="hero-content">
    <h1 class="title">Hello, I'm</h1>
    <h1><span class="name">Seoyoon Choi</span></h1>
    <p class="subtitle">Developer and Designer</p>
  </div>
</section>

  </template>
  <script>
  export default {
    name: 'HomeSection',
  };
  </script>
  <style scoped>
.hero-section {
  background-color: #171a35;  /* 배경색 설정 */
  color: white;  /* 텍스트 색상 */
  min-height: 100vh;  /* 화면 전체 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0; /* 시작할 때 내용이 보이지 않도록 설정 */
  animation: fadeIn 1s forwards, slideIn 1s forwards; /* fadeIn과 slideIn 애니메이션 추가 */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);  /* 시작은 왼쪽 밖 */
  }
  50% {
    transform: translateX(0);  /* 가운데로 오기 */
  }
  100% {
    transform: translateX(0);  /* 끝까지 가운데 */
  }
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: slideInLeft 1s ease-out forwards; /* 왼쪽에서 오른쪽으로 슬라이딩 */
}

.subtitle {
  font-size: 1.5rem;
  animation: slideInRight 1s ease-out forwards; /* 오른쪽에서 왼쪽으로 슬라이딩 */
}

/* 타이틀과 서브타이틀 각각에 대해 다른 슬라이딩 방향 설정 */
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>
  