<template>
  <div>
    <div class="projects--header">
      <h1 class="projects--title">Eliot Meriet</h1>
      <video autoplay muted loop class="projects--video">
        <source :src="data.video" type="video/mp4">
      </video>
      <div class="projects--links">
        <a href="/contact">Contact</a>
        <a href="https://www.instagram.com/eliot.meriet/" target="_blank">Instagram</a>
      </div>
    </div>

    <div class="projects--list">
      <NuxtLink :to="`/${project.slug}`" v-for="project in data.projects">
        <img class="project-card--img" :src="project.miniature" :alt="project.title">
      </NuxtLink>
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
.projects--links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: right;
}
.projects--links a {
  color: inherit;
  text-decoration: none;
}
.projects--video {
  width: 100%;
  height: auto;
}
.projects--list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
  padding: 8px;
}
.project-card--img {
  width: 100%;
  height: auto;
  display: flex;
}
@media (min-width: 1024px) {
  .projects--title {
    top: 50px;
    left: 50px;
    font-size: 6rem;
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
