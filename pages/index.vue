<template>
  <div>
    <div class="projects--header">
      <h1 class="projects--title">Eliot Meriet</h1>
      <video autoplay muted loop class="projects--video">
        <source :src="data.video" type="video/mp4">
      </video>
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
  top: 50px;
  left: 50px;
  color: #3b444f;
  font-size: 6rem;
  margin: 0;
}
.projects--video {
  width: 100%;
  height: auto;
}
.projects--list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;
}
.project-card--img {
  width: 100%;
  height: auto;
  display: flex;
}
@media (min-width: 1024px) {
  
}
</style>
