<script>
import WelcomeVue from '../components/Welcome.vue'
import AboutusVue from '../components/Aboutus.vue'

export default {
  components:{
    WelcomeVue,
    AboutusVue
  },
}
</script>

<template>
  <NavBarHomeVue />

  <main>
    <!-- <TheWelcome /> -->
    <WelcomeVue />
    <AboutusVue />
  </main>
</template>