<template>
  <section id="stack" class="stack-section">
    <div class="stack-container">
      <div class="stack-title">
        Stack
      </div>

      <div class="stack-categories">
        
        <div class="stack-category">
          <div class="category-title">Development</div>
          <div class="stack-items">
            <img src="@/assets/logo/development/java.png" alt="java" class="stack-logo" />
            <img src="@/assets/logo/development/processing.svg" alt="processing" class="stack-logo" />
            <img src="@/assets/logo/development/weblan.png" alt="HTML, CSS, JS" class="stack-logo" />
            <img src="@/assets/logo/development/unity.png" alt="unity" class="stack-logo" />
            <img src="@/assets/logo/development/vue.png" alt="Vue.js" class="stack-logo" />
            <img src="@/assets/logo/development/python.png" alt="python.js" class="stack-logo" />
          </div>
      
      </div>

      <div class="stack-category">
          <div class="category-title">Design</div>
          <div class="stack-items">
            <img src="@/assets/logo/design/figma.png" alt="Figma" class="stack-logo" />
            <img src="@/assets/logo/design/illustrator.png" alt="Illustrator" class="stack-logo" />
            <img src="@/assets/logo/design/vrew.png" alt="vrew" class="stack-logo" />
            <img src="@/assets/logo/design/premiere.png" alt="Premiere pro" class="stack-logo" />
            <img src="@/assets/logo/design/photoshop.png" alt="Photoshop" class="stack-logo" />
            <img src="@/assets/logo/design/aftereffect.png" alt="AfterEffect" class="stack-logo" />
          </div>
      </div>

      <div class="stack-category">
          <div class="category-title">Nocode</div>
          <div class="stack-items">
            <img src="@/assets/logo/nocode/webflow.png" alt="Webflow" class="stack-logo" />
            <img src="@/assets/logo/nocode/wordpress.png" alt="Wordpress" class="stack-logo" />
          </div>
      
      </div>

      <div class="stack-category">
          <div class="category-title">Tool</div>
          <div class="stack-items">
            <img src="@/assets/logo/tool/slack.png" alt="Slack" class="stack-logo" />
            <img src="@/assets/logo/tool/notion.png" alt="Notion" class="stack-logo" />
            <img src="@/assets/logo/tool/trello.png" alt="Trello" class="stack-logo" />
            <img src="@/assets/logo/tool/zapier.png" alt="Zapier" class="stack-logo" />
          </div>
      
      </div>

      <div class="stack-category">
          <div class="category-title">VCS</div>
          <div class="stack-items">
            <img src="@/assets/logo/vcs/github.png" alt="GitHub" class="stack-logo" />
            <img src="@/assets/logo/vcs/gitlab.png" alt="GitLab" class="stack-logo" />
            <img src="@/assets/logo/vcs/git.png" alt="Git" class="stack-logo" />
          </div>
      </div>
      
    </div>
    </div>
  </section>
  </template>

<script>
  export default {
    name: 'StackSection',
  };
</script>

<style scoped>
.stack-section{
  background-color: #171a35;
  width: 100%;
  height: auto;
}

.stack-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  align-items: flex-start;
  flex-wrap: wrap;
}

.stack-title{
    margin-bottom: 50px;
    font-size: 3rem;
    font-weight: 700;
    color: #d5c8a8;
}

.stack-categories{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  margin-left: 100px;
  flex-direction: column;
  gap: 100px;
}

.stack-category{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 50px;
}

.category-title{
  font-size: 2.5rem;
  font-weight: 600;
  color: #d5c8a8;
  min-width: 300px;
}

.stack-items{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.stack-logo{
  width: 100%;
  height: 48px;
  object-fit: contain;
}
.stack-logo:hover{
  transform: scale(1.1);
}
</style>
  