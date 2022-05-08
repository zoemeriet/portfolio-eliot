<template>
  <div>
    <div class="about">
      <h1 class="about--title">Eliot Meriet</h1>
      <img class="about--image" src="~/assets/image_profil.jpg" />
      <div class="about--text">
        <p>Je m'appelle Eliot Meriet, étant passionné de vidéo et de montage, je suis actuellement en 2ème année d'école
          de cinéma / audiovisuel.</p>
        <p>Je n'ai qu'un seul désir, en faire mon métier.</p>
      </div>
    </div>
    <div class="projects">
      <h2 class="projects--title">Mes projets</h2>
      <IframeGroup v-for="iframegroup in data.iframegroup" :title="iframegroup.title" :subtitle="iframegroup.subtitle"
        :iframes="iframegroup.iframes" />
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
      subtitle: "Réflexion et coréalisation de chaque vidéo. Je fais tous les montages de chacune des vidéos de la chaine",
      iframes: ["oA6UeIhlZAQ", "j9fAzkGdfrI", "bee1c-Nl0aw", "rSQe1r_hwPc"]
    },
    {
      title: "Court métrage",
      subtitle: "Participation à toute la préparation, au tournage. Et réalisation du montage",
      iframes: ["c03tiO8vnHY"]
    },
    {
      title: "Documentaire",
      subtitle: "Participation à toute la préparation, au tournage. Et réalisation du montage",
      iframes: ["rAf54ryHW5I"]
    }
  ]
}
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.about--title {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
}

.about--image {
  max-width: 100%;
  width: 400px;
}

.about--text {
  font-size: 18px;
  max-width: 500px;
}

.projects {
  padding: 20px;
  color: #FFFFFF;
  background-color: #1F2933;
}

.projects--title {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
  color: #384149;
}

@media (min-width: 1024px) {
  .about {
    flex-direction: row;
    padding: 40px;
    padding-top: 110px;
  }

  .about--title {
    position: absolute;
    top: 0;
    left: -10px;
    font-size: 130px;
    z-index: -1;
    color: #E6E7E8;
    opacity: 0.4;
  }

  .about--image {
    margin-right: 30px;
  }

  .projects {
    position: relative;
    padding: 40px;
    padding-top: 110px;
  }

  .projects--title {
    position: absolute;
    top: 0;
    right: -10px;
    font-size: 130px;
  }
}
</style>
