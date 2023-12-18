<template>
  <div>
    <div class="projects--header">
      <h1 class="projects--title">Eliot Meriet</h1>
      <video autoplay muted loop class="projects--video">
        <source :src="data.video" type="video/mp4">
      </video>
      <a href="mailto:merieteliot@gmail.com" class="projects--mail">merieteliot@gmail.com</a>
      <div class="projects--links">
        <a href="/">Projects</a>
        <a href="https://www.instagram.com/eliot.meriet/" target="_blank">Instagram</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import data from "../data.json";
</script>

<style>
.projects--header {
  position: relative;
}
.projects--title {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 3rem;
  margin: 0;
}
.projects--mail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  background-color: white;
  padding: 16px;
  box-shadow: 5px 5px 0px #F0F0F0;
}
.projects--links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: right;
  font-size: 2rem;
}
.projects--links a {
  color: inherit;
  text-decoration: none;
}
.projects--video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 500px;
}
@media (min-width: 1024px) {
  .projects--title {
    top: 50px;
    left: 50px;
    font-size: 6rem;
  }
  .projects--mail {
    font-size: 3rem;
  } 
  .projects--links {
    gap: 20px;
    right: 50px;
    bottom: 50px;
    font-size: 3rem;
  }
  .projects--list {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 8px;
  }
}
</style>
