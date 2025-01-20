<template>
    <header class="header">
      <div class="container mx-auto flex justify-between items-center">

        <div class="text-2xl font-bold">
          <router-link to="/" class="logo">SY</router-link>
        </div>
  
        <nav>
          <ul class="nav-list">
            <li><router-link to="/" class="nav-item" exact-active-class="active">Home</router-link></li>
            <li><a href="#about" class="nav-item" exact-active-class="active">About</a></li>
            <li><a href="#stack" class="nav-item" exact-active-class="active">Stack</a></li>
            <li><a href="#project" class="nav-item" exact-active-class="active">Project</a></li>
            <li><a href="#education" class="nav-item" exact-active-class="active">Education</a></li>
            <li><a href="#career" class="nav-item" exact-active-class="active">Career</a></li>
            <li><a href="#contact" class="nav-item" exact-active-class="active">Contact</a></li>
            <li><router-link to="/login" class="nav-item" exact-active-class="active">Login</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

<script>
export default{
    name:'HeaderComponent',
};
</script>
<style scoped>
.header{
  background: #171a35;
  color: #d5c8a8;
  padding: 16px 0;
  width: 100%;
  height: auto;
  position:fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
}

.logo{
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #d5c8a8;
  transition: color 0.3s;
  padding: 16px;
}

.logo:hover{
  color: #d5c8a8;
}

.nav-list{
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item{
  display: inline-block;
  padding: 8px 16px;
  border-radius: 0.375rem;
  text-decoration: none;
  color: #d5c8a8;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item:hover{
  background-color:#4a5568;
}

.nav-item.active{
  background-color: #1a202c;
}
</style>