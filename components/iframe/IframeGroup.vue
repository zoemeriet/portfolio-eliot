<template>
  <div class="iframegroup--component">
    <h2 class="iframegroup--title">{{ props.title }}</h2>
    <p class="iframegroup--subtitle">{{ props.subtitle }}</p>
    <div class="iframegroup--iframes">
      <Iframe v-for="iframe in props.iframes" :id="iframe" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
  },
  iframes: {
    type: Array,
    required: true
  }
})
</script>

<style>
.iframegroup--iframes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}
.iframegroup--title {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}
.iframegroup--subtitle {
  color: #FAFAFA;
  font-weight: lighter;
  margin: 0;
}
@media (min-width: 900px) {
  .iframegroup--iframes {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>