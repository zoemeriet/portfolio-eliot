<template>
  <div>
    <div>Coucou</div>
    <div class="projects">
      <IframeGroup v-for="iframegroup in data.iframegroup" :title="iframegroup.title" :subtitle="iframegroup.subtitle" :iframes="iframegroup.iframes" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = {
  iframegroup: [
    {
      title: "Clip",
      subtitle: "Prestation de cadrage et montage",
      iframes: ["sWjxVGunUq8", "ivU7uWbC5l8"]
    },
    {
      title: "Vlog",
      subtitle: "Réflexion et coréalisation de chaque vidéo. Je fais tout les montages de chacune de vidéos de la chaine",
      iframes: ["oA6UeIhlZAQ", "j9fAzkGdfrI", "bee1c-Nl0aw", "rSQe1r_hwPc"]
    },
    {
      title: "Court métrage",
      subtitle: "participation a toute la prépa, au tournage. Et réalisation du montage",
      iframes: ["c03tiO8vnHY"]
    },
    {
      title: "Documentaire",
      subtitle: "participation a toute la prépa, au tournage. Et réalisation du montage",
      iframes: ["rAf54ryHW5I"]
    }
  ]
}
</script>

<style>
.projects {
  padding: 20px;
  color: #FFFFFF;
  background-color: #1F2933;
}
</style>
