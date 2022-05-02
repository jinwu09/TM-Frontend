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
  <main>
    <!-- <TheWelcome /> -->
    <WelcomeVue />
    <AboutusVue />
  </main>
</template>
