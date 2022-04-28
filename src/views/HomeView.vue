
<script>
import { RouterLink, RouterView } from 'vue-router'
import WelcomeVue from '../components/Welcome.vue'
import Aboutus from '../components/Aboutus.vue'
import NavBarHomeVue from '../components/NavBarHome.vue'
export default {
  components: {
    RouterLink,
    RouterView,
    WelcomeVue,
    Aboutus,
    NavBarHomeVue
  }
}
</script>

<template>
  <NavBarHomeVue />

  <main>
    <WelcomeVue />
    <Aboutus />
  </main>
</template>