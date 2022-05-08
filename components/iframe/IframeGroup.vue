<template>
  <div class="iframegroup--component">
    <div class="iframegroup--content">
      <h2 class="iframegroup--title">{{ props.title }}</h2>
      <p class="iframegroup--subtitle">{{ props.subtitle }}</p>
    </div>
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
.iframegroup--component {
  margin-bottom: 40px;
}

.iframegroup--iframes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.iframegroup--title {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
}

.iframegroup--subtitle {
  color: #FAFAFA;
  font-weight: lighter;
  margin: 0;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .iframegroup--iframes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .iframegroup--component {
    display: flex;
    align-items: flex-start;
    margin-bottom: 80px;
  }

  .iframegroup--content {
    width: 350px;
    margin-right: 20px;
  }

  .iframegroup--title {
    font-size: 50px;
  }

  .iframegroup--iframes {
    flex: 1;
  }
}
</style>