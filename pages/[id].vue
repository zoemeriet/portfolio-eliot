<template>
  <div v-if="dataProject" class="project--page">
    {{ dataProject.title }}
    <img :src="dataProject.head" :alt="dataProject.title">
    <video controls class="project--video">
      <source :src="dataProject.video" type="video/mp4" />
    </video>
    <div class="project--stills">
      <img v-for="still in dataProject.stills" :src="still" :alt="dataProject.title" class="project--img">
    </div>
  </div>
  <div v-else>
    No data
  </div>
</template>

<script lang="ts" setup>
import data from "../data.json";
const route = useRoute();
const dataProject = data.projects.find(project => project.slug === route.params.id)
</script>

<style>
.project--page {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 1200px;
  margin: auto;
  padding: 8px;
}
.project--video {
  width: 100%;
  height: auto;
}
.project--stills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.project--img {
  width: 100%;
  height: auto;
}

@media (min-width: 1024px) {

}
</style>
